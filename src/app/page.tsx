import Link from "next/link"
import Image from "next/image";
import { 
  CaretCircleDown, 
  EnvelopeSimple, 
  GithubLogo, 
  LinkedinLogo, 
  Phone 
} from "@phosphor-icons/react/dist/ssr";

import { Form } from "../components/Form";
import { Section } from "../components/Section";
import { Container } from "../components/Container";
import { Paragraph } from "../components/Paragraph";
import { SocialLink } from "../components/SocialLink";
import { SectionHeader } from "../components/SectionHeader";
import { ParagraphMain } from "../components/ParagraphMain";
import { ProjectDisplay } from "../components/ProjectDisplay";

import logoImgDark from '../assets/logo-dark.svg'
import logoImgLight from '../assets/logo-light.svg'

type ProjectProps = {
  id: string,
  title: string,
  image: string,
  description: string,
  technologies: {
    text: string,
    techs: string[]
  }
  links: {
    githubLink: string,
    websiteLink: string
  }
}

export default async function Home() {

  const data = await fetch(`${process.env.NEXT_URL}/api/get-projects`, {next: { revalidate: 3600}})

  const projectsData = await data.json()

  return (
    <Container>
      <main id="main" className="relative w-full h-[calc(100vh-52px)] sm:h-[calc(100vh-56px)] lg:h-[calc(100vh-92px)] flex justify-center lg:justify-between items-center sm:items-start sm:pt-32 sm:px-8 md:px-12 sm:gap-12 md:gap-14 xl:px-32 mb-[92px]">
            
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
            <Link href="#works">
              Conheça um pouco do meu trabalho!
            </Link>
          </button>
          
        </div>
      </main>

      <Section id="works">
        <SectionHeader title="Meus Trabalhos" />

        <div className="grid md:grid-cols-2 w-full gap-5 lg:gap-10 px-20">
          {
            projectsData.data.map((project: ProjectProps) => (
                <ProjectDisplay 
                  key={project.id}
                  title={project.title} 
                  description={project.description} 
                  image={project.image}
                  links={project.links}
                  technologies={project.technologies} 
                />
              )
            )
          }
        </div>
        <button className="hover:text-shadow-light-md dark:hover:text-shadow-dark-md transition-all ease-linear flex items-center justify-center gap-2 text-zinc-400 text-shadow-light dark:text-shadow-dark font-medium text-sm sm:text-xl lg:text-2xl">
          <CaretCircleDown className="h-5 w-5 lg:h-10 lg:w-10" weight="fill" />
          Mostrar mais
        </button>
      </Section>

      <Section id="about">
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

      <Section id="hire">
        <SectionHeader title="Me Contrate" />

        
        <div className="grid md:grid-cols-[minmax(0,700px)_minmax(354px,1fr)] lg:grid-cols-[minmax(0,700px)_minmax(354px,430px)] md:content-start md:gap-6 lg:gap-12 xl:gap-16 md:max-h-[268px] lg:max-h-full w-full px-5 sm:px-16 md:px-20">
          <Form />
          
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-5 md:mt-18 lg:mt-22">
            <SocialLink linkUrl="https://github.com/LucasSousa09">
              <GithubLogo className="h-5 w-5" weight="fill" />
              Github
            </SocialLink>

            <SocialLink linkUrl="https://www.linkedin.com/in/lucas-sousa-4892901b4/">
              <LinkedinLogo className="h-5 w-5" weight="fill" />
              Linkedin
            </SocialLink>

            <SocialLink clickable={false}>
              <Phone className="h-5 w-5" weight="bold" />
              (11) 93211-0323
            </SocialLink>

            <SocialLink linkUrl="https://mail.google.com/">
              <EnvelopeSimple className="h-5 w-5" weight="bold" />
              lucasrodrigues.sousa09@gmail.com
            </SocialLink>
          </div>
        </div>         
      </Section>
    </Container>
  );
}
