interface HeroProps {
  titulo: string
  subtitulo: string
}
export function Hero({ titulo, subtitulo }: HeroProps) {
  return (
    <section
      className="relative mt-8 flex scroll-mt-40 flex-col items-start justify-center lg:-mt-16 lg:h-screen lg:items-center"
      id="hero"
    >
      <div className="z-40">
        <h1 className="mb-2 animate-pulse text-3xl font-medium tracking-wider text-black lg:text-9xl">
          {titulo}
        </h1>

        <p className="z-50 max-w-xl text-xs text-neutral-900 md:text-sm lg:text-center">
          {subtitulo}
        </p>
      </div>
    </section>
  )
}
