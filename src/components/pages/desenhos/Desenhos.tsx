import { getDataDesign } from '@/utils/actions/get-data'
import { DesignProps } from '@/utils/types/design.type'

import { ParallaxScroll } from '@/components/ui/aceternity/parallax-grid-scroll'

export async function Desenhos() {
  const { object }: DesignProps = await getDataDesign()
  const images = object.metadata.desenhos.map((item) => item.images.url)

  return <ParallaxScroll images={images} />
}
