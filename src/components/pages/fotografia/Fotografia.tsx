import { getDataFoto } from '@/utils/actions/get-data'
import { FotografiaProps } from '@/utils/types/photography.type'
import Image from 'next/image'

import { Tabs } from '@/components/ui/aceternity/tabs'

export async function Fotografia() {
  const { object }: FotografiaProps = await getDataFoto()
  const { fotografia } = object.metadata

  const tabs = fotografia.map((foto) => ({
    title: foto.name,
    value: foto.name,
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 text-xl font-bold text-white md:text-3xl">
        <Image
          quality={100}
          src={foto.image.url}
          alt={foto.name}
          width={1000}
          height={1000}
          className="absolute inset-x-0 mx-auto h-full w-full rounded-xl object-cover"
        />
      </div>
    ),
  }))

  return (
    <section>
      <div className="relative mx-auto mb-16 hidden h-[20rem] w-full max-w-5xl flex-col items-start justify-start [perspective:1000px] md:flex md:h-[30rem]">
        <Tabs tabs={tabs} />
      </div>
    </section>
  )
}
