'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useInView } from 'react-intersection-observer'

import { usePrevNextButtons } from '@/hooks/usePrevNextButtons'
import { testimonials as testimonialsMock } from '@/mocks'

import { NextButton, PrevButton } from './Nav'

export const Testimonials: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: false }),
  ])
  const [testimonials] = useState(testimonialsMock as typeof testimonialsMock)

  if (testimonials.length === 0) return null

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  useEffect(() => {
    if (testimonials.length <= 1) return
    if (!emblaApi) return
    const autoplay = emblaApi.plugins().autoplay

    if (inView) autoplay.play()
  }, [emblaApi, inView])

  return (
    <section
      className="group bg-black"
      data-controls={testimonials.length > 1}
      ref={ref}
    >
      <div className="container mx-auto px-6 py-11 md:py-20">
        <h2 className="mx-auto max-w-xs text-center text-2xl font-bold sm:max-w-sm sm:text-3xl md:max-w-lg md:text-[40px]">
          O que{' '}
          <u className="border-sinais-blue border-b-5 leading-snug no-underline">
            nossos clientes
          </u>{' '}
          falam sobre a gente:
        </h2>

        <div className="embla relative mt-12 px-0 md:px-12">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {testimonials.map(({ author, image, role, text }, idx) => (
                <div
                  className="embla__slide flex flex-col gap-6 select-none md:flex-row"
                  key={idx}
                >
                  <Image
                    src={image}
                    alt={author}
                    width={200}
                    height={200}
                    className="mx-auto mb-4 size-32 rounded-full object-cover md:size-40 xl:size-48"
                  />
                  <blockquote className="text-center md:text-left lg:pt-6">
                    <p className="mb-8 text-xl italic">{text}</p>
                    <p className="text-xl font-semibold">{author}</p>
                    <p className="text-lg">{role}</p>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-16 left-0 z-10 w-full -translate-y-1/2 justify-between group-data-[controls=false]:hidden group-data-[controls=true]:flex md:top-1/2">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
