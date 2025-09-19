export interface UsePrevNextButtonsProps {
  emblaApi: EmblaCarouselType | undefined
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
}

export interface UsePrevNextButtonsType {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}
