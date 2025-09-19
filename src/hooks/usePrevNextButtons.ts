import { useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'

import { UsePrevNextButtonsType } from '@/types/hooks/carousel'

export const usePrevNextButtons = (
  emblaApi?: EmblaCarouselType
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi) return

    const autoplay = emblaApi.plugins()?.autoplay

    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return

    emblaApi.scrollPrev()

    if (onNavButtonClick) onNavButtonClick(emblaApi)
  }, [emblaApi, onNavButtonClick])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return

    emblaApi.scrollNext()

    if (onNavButtonClick) onNavButtonClick(emblaApi)
  }, [emblaApi, onNavButtonClick])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)

    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}
