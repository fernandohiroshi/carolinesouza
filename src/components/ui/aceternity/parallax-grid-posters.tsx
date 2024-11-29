'use client'

import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

import { cn } from '@/lib/cn'

export const ParallaxScroll2 = ({
  images,
  className,
}: {
  images: string[]
  className?: string
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gridRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ['start start', 'end start'],
  })

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200])
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200])

  const third = Math.ceil(images.length / 2)

  const firstPart = images.slice(0, third)
  const secondPart = images.slice(third, 2 * third)

  return (
    <div
      className={cn('h-full w-full items-start overflow-y-auto', className)}
      ref={gridRef}
    >
      <div
        className="mx-auto mt-8 grid max-w-5xl grid-cols-1 items-start gap-10 md:mt-16 md:grid-cols-2"
        ref={gridRef}
      >
        <div className="relative grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={'grid-1' + idx}>
              <Image
                src={el}
                className="!m-0 h-[30rem] w-full gap-10 rounded-lg object-cover object-center !p-0 md:h-[36rem]"
                height="400"
                width="800"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={'grid-2' + idx}>
              <Image
                src={el}
                className="!m-0 h-[36rem] w-full gap-10 rounded-lg object-cover object-left-top !p-0"
                height="400"
                width="800"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}