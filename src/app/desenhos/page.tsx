import { Desenhos } from '@/components/pages/desenhos/Desenhos'

export default function DesenhosPage() {
  return (
    <main
      className="mx-auto my-8 h-full max-w-5xl scroll-mt-40 px-4 lg:my-16"
      id="desenhos"
    >
      <h1 className="text-2xl lg:text-3xl">Desenhos</h1>
      <Desenhos />
    </main>
  )
}
