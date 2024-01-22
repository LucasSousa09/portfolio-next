import Image from "next/image";
import { CaretCircleDown } from "@phosphor-icons/react/dist/ssr";

import { Section } from "../components/Section";
import { Paragraph } from "../components/Paragraph"
import { ParagraphMain } from "../components/ParagraphMain";
import { ProjectDisplay } from "../components/ProjectDisplay";

import logoImgDark from '../assets/logo-dark.svg'
import logoImgLight from '../assets/logo-light.svg'
import { SectionHeader } from "@/components/SectionHeader";

export default function Home() {
  return (
    <>
      <main className="relative w-full h-[calc(100vh-52px)] sm:h-[calc(100vh-56px)] lg:h-[calc(100vh-92px)] flex justify-center lg:justify-between items-center sm:items-start sm:pt-32 sm:px-8 md:px-12 sm:gap-12 md:gap-14 xl:px-32 ">
            
        <Image className="hidden dark:block absolute top-1/2 translate-y-[-50%] right-1/2 translate-x-1/2 sm:static sm:translate-y-0 sm:translate-x-0 mt-[-96px] sm:mt-4 xl:mt-12 h-40 w-40 sm:h-48 sm:w-48 lg:h-72 lg:w-72 opacity-10 sm:opacity-100" src={logoImgDark} alt="" />
        <Image className="dark:hidden block absolute top-1/2 translate-y-[-50%] right-1/2 translate-x-1/2 sm:static sm:translate-y-0 sm:translate-x-0 mt-[-96px] sm:mt-4 xl:mt-12 h-40 w-40 sm:h-48 sm:w-48 lg:h-72 lg:w-72 opacity-10 sm:opacity-100" src={logoImgLight} alt="" />

        <div className="mt-[-144px] sm:mt-0 flex flex-col items-center lg:items-start">
          <div className="max-w-[300px] sm:max-w-[400px] lg:max-w-[600px]">
            <ParagraphMain animation="animate-[fade-out_1.5s_ease-in-out_forwards]">
              <span className="text-shadow-light-md dark:text-shadow-dark-md">Dev Front-end,</span>
            </ParagraphMain>
            <ParagraphMain animation="animate-[fade-out_1.5s_ease-in-out_1.2s_forwards]">
              Te ajudando a dar
            </ParagraphMain>
            <ParagraphMain animation="animate-[fade-out_1.5s_ease-in-out_2.2s_forwards]">
              <span className="text-shadow-light-md dark:text-shadow-dark-md">Vida</span> ao seu site dos sonhos!
            </ParagraphMain>
          </div>

          <button className="hover:animate-bounce w-full mt-6 sm:mt-12 flex items-center gap-2 text-zinc-400 text-shadow-light dark:text-shadow-dark font-semibold md:text-lg lg:text-2xl xl:text-3xl">
            <CaretCircleDown className="h-5 w-5 lg:h-10 lg:w-10" weight="fill" />
            Conheça um pouco do meu trabalho!
          </button>
          
        </div>
      </main>

      <Section>
        <SectionHeader title="Meus Trabalhos" />

        <div className="grid md:grid-cols-2 w-full gap-5 lg:gap-10 px-20">
          <ProjectDisplay />
          <ProjectDisplay />
        </div>
        <button className="hover:text-shadow-light-md dark:hover:text-shadow-dark-md transition-all ease-linear flex items-center justify-center gap-2 text-zinc-400 text-shadow-light dark:text-shadow-dark font-medium text-sm sm:text-xl lg:text-2xl">
          <CaretCircleDown className="h-5 w-5 lg:h-10 lg:w-10" weight="fill" />
          Mostrar mais
        </button>
      </Section>

      <Section>
        <SectionHeader title="Sobre Mim" />

        <div className="grid lg:grid-cols-2 lg:px-20 lg:gap-5 xl:gap-10 lg:mb-16">
          <div className="flex flex-col max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] overflow-clip">
              <Paragraph> 
                Após decidir trocar de carreira, comecei a aprender desenvolvimento web por volta de março de 2020 assistindo vídeos no Youtube. Foi nessa época que tive meu primeiro contato com a Rocketseat na semana NLW e meu primeiro aplicativo com eles foi o Proffy.
              </Paragraph>

              <Paragraph> 
                Decidi então realizar um curso rapido de HTML, CSS & Javascript (50 projects in 50 days - from Florin Pop e Brad Traversy) em 2021.
              </Paragraph>

              <Paragraph> 
                Em 2022 completei o bootcamp Ignite da Rocketseat na trilha de ReactJS
              </Paragraph>

              <Paragraph> 
                E no início de 2023 consegui meu primeiro trabalho freelancer com desenvolvimento Front-end na Upwork.
              </Paragraph>

              <Paragraph> 
                Atualmente me encontro a procura de mais trabalhos nessa área.
              </Paragraph>
          </div>
          <div className="hidden lg:flex h-full w-full bg-orange-500">
        
          </div>

        </div>

      </Section>
    </>
  );
}
