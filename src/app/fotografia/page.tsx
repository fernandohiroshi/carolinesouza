import { Fotografia } from '@/components/pages/fotografia/Fotografia'
import { FotografiaMobile } from '@/components/pages/fotografia/FotografiaMobile'

export default function FotografiaPage() {
  return (
    <main
      className="mx-auto h-full w-full max-w-5xl scroll-mt-40 px-4 py-16"
      id="fotografia"
    >
      <h1 className="mb-4 text-3xl">Fotografias</h1>
      <Fotografia />
      <FotografiaMobile />
    </main>
  )
}
