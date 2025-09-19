import localFont from 'next/font/local'

export const HelveticaNeue = localFont({
  src: [
    {
      path: '../../public/fonts/HelveticaNeueLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HelveticaNeueLightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/HelveticaNeueRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HelveticaNeueItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/HelveticaNeueMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HelveticaNeueMediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/HelveticaNeueBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HelveticaNeueBoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/HelveticaNeueBlack.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HelveticaNeueBlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-helvetica',
})

export default {
  HelveticaNeue,
}
