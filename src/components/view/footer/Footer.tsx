import qrcode from '@/images/qrcode.jpeg'
import Image from 'next/image'
import { BiLogoGmail } from 'react-icons/bi'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { PiLinktreeLogo } from 'react-icons/pi'

export async function Footer() {
  return (
    <>
      <footer
        className="mx-auto max-w-5xl justify-between rounded-3xl bg-neutral-200/30 p-8 lg:flex"
        id="contato"
      >
        <div>
          <h2 className="mb-2 text-2xl lg:text-3xl">Contato</h2>
          <p className="mb-8 text-xs">
            Está interessado em iniciar um novo projeto?{' '}
            <br className="hidden lg:block" />
            Sinta-se à vontade para mandar mensagem.{' '}
            <br className="hidden lg:block" />
            Entrarei em contato em menos de 24 horas.
          </p>
          <div className="flex flex-col gap-4 text-sm">
            <a
              href="#"
              className="flex items-center gap-2 duration-300 ease-in-out hover:text-red-700 hover:underline"
            >
              <BiLogoGmail size={20} />
              Gmail
            </a>
            <a
              href="#"
              className="flex items-center gap-2 duration-300 ease-in-out hover:text-red-700 hover:underline"
            >
              <FaInstagram size={20} />
              Instagram
            </a>
            <a
              href="#"
              className="flex items-center gap-2 duration-300 ease-in-out hover:text-red-700 hover:underline"
            >
              <FaLinkedin size={20} />
              Linkedin
            </a>
            <a
              href="#"
              className="flex items-center gap-2 duration-300 ease-in-out hover:text-red-700 hover:underline"
            >
              <PiLinktreeLogo size={20} />
              Linktree
            </a>
            <a
              href="#"
              className="flex items-center gap-2 duration-300 ease-in-out hover:text-red-700 hover:underline"
            >
              <FaWhatsapp size={20} />
              Whatsapp
            </a>
          </div>
        </div>

        {/* QRCODE */}
        <div className="hidden flex-col justify-end lg:flex">
          <Image
            src={qrcode}
            alt="Linktree"
            width={250}
            height={250}
            quality={100}
            className="h-[12rem] w-full rounded-lg object-cover shadow-lg"
          />
          <p className="mt-4 text-center">Escaneie tambem!</p>
        </div>
      </footer>

      {/* COPYRIGHT */}
      <p className="my-12 text-center text-xs">
        © 2024 Todos os direitos reservados. <br /> Este site foi desenvolvido
        por{' '}
        <a
          href="https://konbinicode.com/en"
          target="_blank"
          className="font-semibold"
        >
          Konbini Code
        </a>
        .
      </p>
    </>
  )
}
