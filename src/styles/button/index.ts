import { OUTLINE_BUTTON_STYLES } from './outline'
import { WHATSAPP_BUTTON_STYLES } from './whatsapp'
import { BLUE_BUTTON_STYLES } from './blue'
import { WHITE_BUTTON_STYLES } from './white'
import { BLACK_BUTTON_STYLES } from './black'

export const BUTTON_BASE_STYLE = [
  'w-fit',
  'flex',
  'items-center',
  'cursor-pointer',
  'rounded-xl',
  'px-9',
  'py-3',
  'font-medium',
  'transition-colors',
  'text-white',
  'focus:outline-none',
].join(' ')

export const BUTTON_STYLES = {
  BASE: BUTTON_BASE_STYLE,
  OUTLINE: OUTLINE_BUTTON_STYLES,
  WHATSAPP: WHATSAPP_BUTTON_STYLES,
  BLUE: BLUE_BUTTON_STYLES,
  WHITE: WHITE_BUTTON_STYLES,
  BLACK: BLACK_BUTTON_STYLES,
}
