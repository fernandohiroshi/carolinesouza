'use client'

import Image from 'next/image'

import notFoundAnimation from '../../public/not-found.gif'

export default function NotFound() {
  return (
    <div className="flex h-[80vh] animate-pulse flex-col items-center justify-center">
      <Image
        width={100}
        height={100}
        src={notFoundAnimation}
        alt="Animation"
        className=""
      />
      <h1 className="mt-8 text-center text-xl">This page does not exist.</h1>
    </div>
  )
}
