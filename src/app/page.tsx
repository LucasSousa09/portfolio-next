import Image from "next/image";
import { CaretCircleDown } from "@phosphor-icons/react/dist/ssr";

import { Paragraph } from "@/components/Paragraph";

import logoImgDark from '../assets/logo-dark.svg'
import logoImgLight from '../assets/logo-light.svg'
import { ProjectDisplay } from "@/components/ProjectDisplay";

export default function Home() {
  return (
    <>
      <main className="relative w-full h-[calc(100vh-52px)] sm:h-[calc(100vh-56px)] lg:h-[calc(100vh-92px)] flex justify-center lg:justify-between items-center sm:items-start sm:pt-32 sm:px-8 md:px-12 sm:gap-12 md:gap-14 xl:px-32 ">
            
        <Image className="hidden dark:block absolute top-1/2 translate-y-[-50%] right-1/2 translate-x-1/2 sm:static sm:translate-y-0 sm:translate-x-0 mt-[-96px] sm:mt-4 xl:mt-12 h-40 w-40 sm:h-48 sm:w-48 lg:h-72 lg:w-72 opacity-10 sm:opacity-100" src={logoImgDark} alt="" />
        <Image className="dark:hidden block absolute top-1/2 translate-y-[-50%] right-1/2 translate-x-1/2 sm:static sm:translate-y-0 sm:translate-x-0 mt-[-96px] sm:mt-4 xl:mt-12 h-40 w-40 sm:h-48 sm:w-48 lg:h-72 lg:w-72 opacity-10 sm:opacity-100" src={logoImgLight} alt="" />

        <div className="mt-[-144px] sm:mt-0 flex flex-col items-center lg:items-start">
          <div className="max-w-[300px] sm:max-w-[400px] lg:max-w-[600px]">
            <Paragraph animation="animate-[fade-out_1.5s_ease-in-out_forwards]">
              <span className="text-shadow-light-md dark:text-shadow-dark-md">Dev Front-end,</span>
            </Paragraph>
            <Paragraph animation="animate-[fade-out_1.5s_ease-in-out_1.2s_forwards]">
              Te ajudando a dar
            </Paragraph>
            <Paragraph animation="animate-[fade-out_1.5s_ease-in-out_2.2s_forwards]">
              <span className="text-shadow-light-md dark:text-shadow-dark-md">Vida</span> ao seu site dos sonhos!
            </Paragraph>
          </div>

          <button className="hover:animate-bounce w-full mt-6 sm:mt-12 flex items-center gap-2 text-zinc-400 text-shadow-light dark:text-shadow-dark font-semibold md:text-lg lg:text-2xl xl:text-3xl">
            <CaretCircleDown className="h-5 w-5 lg:h-10 lg:w-10" weight="fill" />
            Conheça um pouco do meu trabalho!
          </button>
          
        </div>
      </main>

      <section className="flex flex-col items-center justify-center gap-8 lg:gap-16 w-full min-h-[calc(100vh-52px)] sm:h-[calc(100vh-56px)] lg:h-[calc(100vh-92px)]">
        <header className="flex items-center justify-start gap-3 w-full px-16">
          <Image className="hidden dark:block h-8 w-8 sm:h-12 sm:w-12  lg:h-16 lg:w-16" src={logoImgDark} alt="" />
          <Image className="block dark:hidden h-8 w-8 sm:h-12 sm:w-12  lg:h-16 lg:w-16" src={logoImgLight} alt="" />

          <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-shadow-light-md dark:text-shadow-dark-md">
            Meus Trabalhos
          </h2>
        </header>
        <div className="grid md:grid-cols-2 w-full gap-5 lg:gap-10 px-20">
          <ProjectDisplay />
          <ProjectDisplay />
        </div>
        <button className="hover:text-shadow-light-md dark:hover:text-shadow-dark-md transition-all ease-linear flex items-center justify-center gap-2 text-zinc-400 text-shadow-light dark:text-shadow-dark font-medium text-sm sm:text-xl lg:text-2xl">
          <CaretCircleDown className="h-5 w-5 lg:h-10 lg:w-10" weight="fill" />
          Mostrar mais
        </button>
      </section>
    </>
  );
}
