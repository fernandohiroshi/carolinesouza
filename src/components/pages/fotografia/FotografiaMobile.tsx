import { ParallaxScroll } from '@/components/ui/aceternity/parallax-grid-scroll'

export function FotografiaMobile() {
  return <ParallaxScroll images={images} className="md:hidden" />
}

const images = [
  'https://images.pexels.com/photos/1732/black-and-white-dawn-mountains-nature.jpg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1658579/pexels-photo-1658579.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/85013/pexels-photo-85013.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3998490/pexels-photo-3998490.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1008144/pexels-photo-1008144.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/2968782/pexels-photo-2968782.jpeg?auto=compress&cs=tinysrgb&w=600',
]
