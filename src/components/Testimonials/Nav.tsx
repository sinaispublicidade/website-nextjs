import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { Button } from '@/types'

export const PrevButton: React.FC<Button.CarouselNavigation> = ({
  ...restProps
}) => (
  <button
    type="button"
    className="text-sinais-blue cursor-pointer disabled:cursor-not-allowed"
    aria-label="Anterior"
    {...restProps}
  >
    <FiChevronLeft size={50} />
  </button>
)

export const NextButton: React.FC<Button.CarouselNavigation> = ({
  ...restProps
}) => (
  <button
    type="button"
    className="text-sinais-blue cursor-pointer disabled:cursor-not-allowed"
    aria-label="Próximo"
    {...restProps}
  >
    <FiChevronRight size={50} />
  </button>
)
