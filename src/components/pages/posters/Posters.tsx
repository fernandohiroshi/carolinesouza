import { getDataPoster } from '@/utils/actions/get-data'
import { PosterProps } from '@/utils/types/posters.type'

import { ParallaxScroll2 } from '@/components/ui/aceternity/parallax-grid-scroll-2'

export async function Posters() {
  const { object }: PosterProps = await getDataPoster()
  const images = object.metadata.poster.map((item) => item.images.url)

  return <ParallaxScroll2 images={images} />
}
