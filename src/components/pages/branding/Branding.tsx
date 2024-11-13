import { getDataBranding } from '@/utils/actions/get-data'
import { BrandingProps } from '@/utils/types/branding.type'
import Image from 'next/image'

import Box from '@/components/grid/Box'

export async function Branding() {
  const { object }: BrandingProps = await getDataBranding()
  const { branding_box_1, branding_box_2, branding_box_3, branding_box_4 } =
    object.metadata

  const bb1 = [
    {
      url: branding_box_1.imagem_1.url,
      className: 'col-span-12 lg:col-span-8',
      height: 'h-[13rem]',
    },
    {
      url: branding_box_1.imagem_2.url,
      className: 'col-span-6 lg:col-span-4',
      height: 'h-full',
    },
    {
      url: branding_box_1.imagem_3.url,
      className: 'col-span-6 lg:col-span-4 lg:row-span-2',
      height: 'h-full',
    },
    {
      url: branding_box_1.imagem_4.url,
      className: 'col-span-6 lg:col-span-3',
      height: 'h-[13rem]',
    },
    {
      url: branding_box_1.imagem_5.url,
      className: 'col-span-6 lg:col-span-5',
      height: 'h-[13rem]',
    },
    {
      url: branding_box_1.imagem_6.url,
      className: 'col-span-12 lg:col-span-8',
      height: 'h-[13rem]',
    },
  ]

  const bb2 = [
    {
      url: branding_box_2.imagem_1.url,
      className: 'col-span-12 lg:col-span-8',
      height: 'h-[13rem]',
    },
    {
      url: branding_box_2.imagem_2.url,
      className: 'col-span-6 lg:col-span-4',
      height: 'h-full',
    },
    {
      url: branding_box_2.imagem_3.url,
      className: 'col-span-6 lg:col-span-4 lg:row-span-2',
      height: 'h-full',
    },
    {
      url: branding_box_2.imagem_4.url,
      className: 'col-span-6 lg:col-span-3',
      height: 'h-[13rem]',
    },
    {
      url: branding_box_2.imagem_5.url,
      className: 'col-span-6 lg:col-span-5',
      height: 'h-[13rem]',
    },
    {
      url: branding_box_2.imagem_6.url,
      className: 'col-span-12 lg:col-span-8',
      height: 'h-[13rem]',
    },
  ]

  const bb3 = [
    {
      url: branding_box_3.imagem_1.url,
      className: 'col-span-12 lg:col-span-8',
      height: 'h-[13rem]',
    },
    {
      url: branding_box_3.imagem_2.url,
      className: 'col-span-6 lg:col-span-4',
      height: 'h-full',
    },
    {
      url: branding_box_3.imagem_3.url,
      className: 'col-span-6 lg:col-span-4 lg:row-span-2',
      height: 'h-full',
    },
    {
      url: branding_box_3.imagem_4.url,
      className: 'col-span-6 lg:col-span-3',
      height: 'h-[13rem]',
    },
    {
      url: branding_box_3.imagem_5.url,
      className: 'col-span-6 lg:col-span-5',
      height: 'h-[13rem]',
    },
    {
      url: branding_box_3.imagem_6.url,
      className: 'col-span-12 lg:col-span-8',
      height: 'h-[13rem]',
    },
  ]

  const bb4 = [
    {
      url: branding_box_4.imagem_1.url,
      className: 'col-span-12 lg:col-span-8',
      height: 'h-[13rem]',
    },
    {
      url: branding_box_4.imagem_2.url,
      className: 'col-span-6 lg:col-span-4',
      height: 'h-full',
    },
    {
      url: branding_box_4.imagem_3.url,
      className: 'col-span-6 lg:col-span-4 lg:row-span-2',
      height: 'h-full',
    },
    {
      url: branding_box_4.imagem_4.url,
      className: 'col-span-6 lg:col-span-3',
      height: 'h-[13rem]',
    },
    {
      url: branding_box_4.imagem_5.url,
      className: 'col-span-6 lg:col-span-5',
      height: 'h-[13rem]',
    },
    {
      url: branding_box_4.imagem_6.url,
      className: 'col-span-12 lg:col-span-8',
      height: 'h-[13rem]',
    },
  ]

  return (
    <section>
      <div className="flex flex-col gap-24">
        <div className="grid grid-cols-12 gap-2 lg:gap-4">
          {bb1.map((image, index) => (
            <Box
              key={index}
              className={`${image.className} rounded-xl p-0 shadow-xl`}
            >
              <div className={`${image.height} overflow-hidden rounded-xl`}>
                <Image
                  src={image.url}
                  width={300}
                  height={300}
                  quality={100}
                  alt={`Image ${index + 1}`}
                  className={`w-full object-cover ${image.height} rounded-xl duration-300 ease-in-out hover:scale-110`}
                />
              </div>
            </Box>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-2">
          {bb2.map((image, index) => (
            <Box
              key={index}
              className={`${image.className} rounded-xl p-0 shadow-xl`}
            >
              <div className={`${image.height} overflow-hidden rounded-xl`}>
                <Image
                  src={image.url}
                  width={300}
                  height={300}
                  quality={100}
                  alt={`Image ${index + 1}`}
                  className={`w-full object-cover ${image.height} rounded-xl duration-300 ease-in-out hover:scale-110`}
                />
              </div>
            </Box>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-2">
          {bb3.map((image, index) => (
            <Box
              key={index}
              className={`${image.className} rounded-xl p-0 shadow-xl`}
            >
              <div className={`${image.height} overflow-hidden rounded-xl`}>
                <Image
                  src={image.url}
                  width={300}
                  height={300}
                  quality={100}
                  alt={`Image ${index + 1}`}
                  className={`w-full object-cover ${image.height} rounded-xl duration-300 ease-in-out hover:scale-110`}
                />
              </div>
            </Box>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-2">
          {bb4.map((image, index) => (
            <Box
              key={index}
              className={`${image.className} rounded-xl p-0 shadow-xl`}
            >
              <div className={`${image.height} overflow-hidden rounded-xl`}>
                <Image
                  src={image.url}
                  width={300}
                  height={300}
                  quality={100}
                  alt={`Image ${index + 1}`}
                  className={`w-full object-cover ${image.height} rounded-xl duration-300 ease-in-out hover:scale-110`}
                />
              </div>
            </Box>
          ))}
        </div>
      </div>
    </section>
  )
}
