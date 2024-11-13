import Link from 'next/link'

import { MobileMenu } from '../nav/mobile/Mobile'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-200/60 shadow backdrop-blur-3xl">
      <nav className="mx-auto hidden max-w-5xl items-center justify-between py-8 lg:flex lg:px-4">
        <Link
          className="duration-300 ease-in-out hover:tracking-widest hover:text-[#720429]"
          href="/#"
        >
          Home
        </Link>
        <Link
          className="duration-300 ease-in-out hover:tracking-widest hover:text-[#720429]"
          href="/#perfil"
        >
          Perfil
        </Link>
        <Link
          className="duration-300 ease-in-out hover:tracking-widest hover:text-[#720429]"
          href="/#portfolios"
        >
          Portfolios
        </Link>
        <Link
          className="duration-300 ease-in-out hover:tracking-widest hover:text-[#720429]"
          href="/#contato"
        >
          Contato
        </Link>
      </nav>
      <MobileMenu />
    </header>
  )
}
