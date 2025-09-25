import { BannerHeroHome } from './Home'
import { BannerHeroAbout } from './About'
import { BannerHeroService } from './Service'
import { BannerHeroServiceCTA } from './ServiceCTA'
import { BannerHeroServiceImage } from './ServiceImage'

export const Banner = {
  Home: BannerHeroHome,
  About: BannerHeroAbout,
  Service: {
    Default: BannerHeroService,
    CTA: {
      Background: BannerHeroServiceCTA,
      Image: BannerHeroServiceImage,
    },
  },
}
