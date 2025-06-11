'use client'

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import IconsBundle from '@/components/social-icons'
import { ModelViewer } from '@/components/landing/model-viewer'
import siteMetadata from '@/data/siteMetadata'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 100,
    autoInsertCss: true,
    cursorChar: '|',
  })
}

export default function Hero() {
  const el = useRef(null)
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (el.current) {
      typed.current = createTypedInstance(el.current)
    }
    return () => {
      typed.current?.destroy()
    }
  }, [])

  return (
    <div className="container mx-auto -mt-16 flex h-screen flex-col content-center justify-center px-4 py-5 text-center">
      <h1 className="sr-only">{siteMetadata.title}</h1>

      <ModelViewer />

      <div>
        <ul id="bios" className="hidden">
          <li>Hi I'm Dexter!</li>
        </ul>

        <span
          ref={el}
          className="text-4xl font-extrabold tracking-tighter text-primary sm:text-6xl"
        />
      </div>

      <p className="mx-auto mt-3 max-w-lg text-gray-500 dark:text-gray-400 md:text-xl lg:text-lg xl:text-xl">
        Exploring real-world software engineering through projects, experiments and
        continuous learning.
      </p>

      <p className="mx-auto max-w-lg text-gray-500 dark:text-gray-400 md:text-xl lg:text-lg xl:text-xl">
        I'm based in Brisbane, Australia
      </p>

      <IconsBundle
        kind="mail"
        iconType="linkButton"
        href={`mailto:${siteMetadata.email}`}
        text="Say Hi!"
        size={5}
        parentClassName="w-32 mx-auto p-4 mt-3"
      />
    </div>
  )
}
