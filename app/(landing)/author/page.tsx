import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import { Separator } from '@/components/ui/separator'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Author' })

export default function Page() {
  return (
    <>
      <SectionContainer>
        <div className="">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Check out my book
            </h1>
          </div>
          <Separator />
          <div className="flex flex-col items-center space-y-6 py-12">
            <Image
              src="/static/images/Bookcover/Bookcover.jpeg"
              alt="I Am Your Beast book cover"
              width={300}
              height={450}
              className="rounded-md"
            />
            <p className="prose max-w-none text-center dark:prose-invert">
              A Message from the Author: I am thrilled to share my debut novel,{' '}
              <em>I Am Your Beast</em>. Thank you for your support and I hope you enjoy reading it
              as much as I enjoyed writing it.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.amazon.com"
                className="font-medium text-primary-500 hover:underline"
              >
                Amazon
              </a>
              <a
                href="https://www.goodreads.com"
                className="font-medium text-primary-500 hover:underline"
              >
                Goodreads
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
