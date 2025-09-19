'use client'
import React, { useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { usePrevNextButtons } from '@/hooks/usePrevNextButtons'
import { testimonials as testimonialsMock } from '@/mocks'

import { NextButton, PrevButton } from './Nav'

export const Testimonials: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [testimonials, _setTestimonials] = useState(
    testimonialsMock as typeof testimonialsMock
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="bg-black">
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
              {testimonials.map((testimonial, idx) => (
                <div
                  className="embla__slide flex flex-col gap-6 select-none md:flex-row"
                  key={idx}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="mx-auto mb-4 size-32 rounded-full object-cover md:size-40 xl:size-48"
                  />
                  <blockquote className="text-center md:text-left lg:pt-6">
                    <p className="mb-8 text-xl italic">{testimonial.text}</p>
                    <p className="text-xl font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-lg">{testimonial.role}</p>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-16 left-0 z-10 flex w-full -translate-y-1/2 justify-between md:top-1/2">
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
