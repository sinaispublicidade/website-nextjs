import { BannerHeroHome } from './Home'
import { BannerHeroAbout } from './About'
import { BannerHeroService } from './Service'
import { BannerHeroServiceCTA } from './ServiceCTA'

export const Banner = {
  Home: BannerHeroHome,
  About: BannerHeroAbout,
  Service: {
    Default: BannerHeroService,
    CTA: BannerHeroServiceCTA,
  },
}
