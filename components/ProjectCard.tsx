'use client'
import useSWR from 'swr'
import type { ProjectCardProps } from '@//types/components'
import type { GithubRepository } from '@/types/server'
import { swrFetcher } from '@/lib/utils'
import { GithubRepo } from '@/components/GithubRepo'
import Image from 'next/image'
import Link from 'next/link'
import IconsBundle from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import { Card } from '@/components/ui/card'
interface SWRResponse {
  repository: GithubRepository
}
export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, imgSrc, url, repo, builtWith } = project
  const { data } = useSWR(repo ? `/api/github?repo=${repo}` : null, swrFetcher)
  const repository: GithubRepository | undefined = data?.repository
  const href = url || repository?.url
  const owner = siteMetadata.github?.split('/').pop() || ''
  const repoHref = repo
    ? repo.startsWith('http')
      ? repo
      : `https://github.com/${repo.includes('/') ? repo : `${owner}/${repo}`}`
    : undefined

  return (
    <Card className="md m-2 max-w-[544px] border-0 p-2 shadow-lg ">
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-transparent">
        <Image
          alt={title}
          src={imgSrc}
          className="h-36 object-cover object-center lg:h-60"
          width={1088}
          height={612}
          // objectFit="cover"
        />
        <div className="flex grow flex-col justify-between space-y-6 p-4 md:p-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold leading-8 tracking-tight">
              {href ? (
                <Link href={href} aria-label={`Link to ${title}`}>
                  <span data-umami-event={title || 'project-press'}>{title}</span>
                </Link>
              ) : (
                title
              )}
            </h2>
            <div className="max-w-none space-y-2 text-gray-500 dark:text-gray-400">
              <p>{description || repository?.description}</p>
            </div>
          </div>
          <div>
            <div className="my-2 flex flex-wrap space-x-1.5">
              <span className="shrink-0">Built With:</span>
              {builtWith?.map((tool, index) => {
                return (
                  <span key={index} className="font-semibold text-gray-600 dark:text-gray-300">
                    {tool}
                    {index !== builtWith.length - 1 && ','}
                  </span>
                )
              })}
            </div>

            {repository ? (
              <GithubRepo repo={repository} />
            ) : (
              <div className="flex items-center space-x-2">
                {url && (
                  <Link
                    href={url}
                    className="hover:text-primary-600 dark:hover:text-primary-400 text-base font-medium leading-6 text-primary-500"
                    aria-label={`Link to ${title}`}
                  >
                    <span data-umami-event="project-learn-more">Learn More &rarr;</span>
                  </Link>
                )}
                {repoHref && (
                  <>
                    {url && <span className="text-gray-400 dark:text-gray-500">|</span>}
                    <Link
                      href={repoHref}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub repository for ${title}`}
                      className="hover:text-primary-600 dark:hover:text-primary-400 text-gray-400"
                    >
                      <IconsBundle kind="github" iconType="icon" size={5} strokeWidth={1} />
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
