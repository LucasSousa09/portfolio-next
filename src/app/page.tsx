import Image from "next/image";
import { CaretCircleDown } from "@phosphor-icons/react/dist/ssr";

import { Paragraph } from "@/components/Paragraph";

import logoImgDark from '../assets/logo-dark.svg'
import logoImgLight from '../assets/logo-light.svg'

export default function Home() {
  return (
    <div className="relative max-w-8xl w-full h-[calc(100vh-52px)] sm:h-[calc(100vh-56px)] lg:h-[calc(100vh-92px)] flex justify-center lg:justify-between items-center sm:items-start sm:pt-32 sm:px-8 md:px-12 sm:gap-12 md:gap-14 xl:px-32 ">
      
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

        <button className="hover:animate-bounce mt-6 w-full sm:mt-12 flex items-center gap-2 text-zinc-400 text-shadow-light dark:text-shadow-dark font-semibold md:text-lg lg:text-2xl xl:text-3xl">
          <CaretCircleDown className="h-5 w-5 lg:h-10 lg:w-10" weight="fill" />
          Conheça um pouco do meu trabalho!
        </button>
        
      </div>
    </div>
  );
}
