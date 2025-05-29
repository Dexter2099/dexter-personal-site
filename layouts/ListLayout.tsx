'use client'

import { usePathname } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import IconsBundle from '@/components/social-icons'
import SectionContainer from '@/components/SectionContainer'
import { Button } from '@/components/ui/button'
interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 py-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <Button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </Button>
        )}
        {prevPage && (
          <Button asChild>
            <Link
              href={
                currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`
              }
              rel="prev"
            >
              Previous
            </Link>
          </Button>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <Button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </Button>
        )}
        {nextPage && (
          <Button asChild>
            <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
              Next
            </Link>
          </Button>
        )}
      </nav>
    </div>
  )
}

export default function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags?.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })


  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="">
        <SectionContainer>
          <div className="space-y-2  border-b-[0.5px] border-b-gray-200  pb-8 pt-6  dark:border-b-gray-700 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              {title}
            </h1>
          </div>
        </SectionContainer>
        <SectionContainer size="md" className="pt-5">
          <div className="relative my-4 w-full">
            <label>
              <span className="sr-only">Search articles</span>
              <input
                aria-label="Search articles"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search articles"
                className="block w-full rounded-md border border-muted-foreground  px-4 py-2 focus:border-primary focus:ring-primary dark:border-muted"
              />
            </label>
            <IconsBundle
              kind="search"
              iconType="icon"
              size={5}
              className="absolute right-3 top-3 text-muted-foreground"
            />
          </div>
          <ul>
            {!filteredBlogPosts.length && 'No posts found.'}
            {displayPosts.map((post) => {
              const { path, date, title, summary, tags } = post

              return (
                <li key={path} className="py-4">
                  <article className="space-y-2">
                    <div className="space-y-3">
                      <div>
                        <h3 className="mb-2 text-2xl font-bold leading-8 tracking-tight">
                          <Link href={`/${path}`} className="text-foreground">
                            {title}
                          </Link>
                        </h3>
                        <div className="flex flex-wrap space-x-3">
                          {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                        </div>
                      </div>
                      <div className="prose prose-sm max-w-none text-muted-foreground">
                        {summary}
                      </div>
                      <div>
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium leading-6 text-muted-foreground">
                            <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
          {pagination && pagination.totalPages > 1 && !searchValue && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </SectionContainer>
      </div>
    </>
  )
}
