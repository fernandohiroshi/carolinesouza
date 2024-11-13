import { getDataSocialMedia } from '@/utils/actions/get-data'
import { SocialProps } from '@/utils/types/social.type'
import Image from 'next/image'

export async function ContainerOne() {
  const { object }: SocialProps = await getDataSocialMedia()
  const { social_box_1 } = object.metadata

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-8 md:mt-24 md:h-full lg:flex-row">
      <Image
        src={social_box_1.imagem_1.url}
        alt="Image"
        width={300}
        height={600}
        className="h-[26rem] object-cover"
      />

      <Image
        src={social_box_1.imagem_2.url}
        alt="Image"
        width={300}
        height={600}
        className="h-[26rem] max-w-full object-cover lg:h-[30rem]"
      />

      <Image
        src={social_box_1.imagem_3.url}
        alt="Image"
        width={300}
        height={600}
        className="h-[26rem] object-cover"
      />
    </div>
  )
}
