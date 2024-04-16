import Link from 'next/link'
import Image from 'next/image'
import { GithubLogo, Link as LinkIcon } from '@phosphor-icons/react/dist/ssr'

import projectPresentationImg from '../assets/project-presentation.jpg'

type ProjectDisplayProps = {
    title: string,
    image: string,
    description: string,
    technologies: {
        text: string,
        techs: string[]
    },
    links: {
        githubLink: string,
        websiteLink: string
    }
}

export function ProjectDisplay({
    title,
    image,
    description,
    technologies,
    links
}: ProjectDisplayProps){
    return (
        <div className="relative flex items-center md:px-8 lg:px-16 justify-center h-40 sm:h-64 md:h-96 lg:h-[458px] rounded overflow-clip group">
            <Image className='absolute group-hover:brightness-50 top-0 left-0 bottom-0 right-0 object-cover w-full h-full transition-all ease-linear' src={image} alt="" width={600} height={400} />
            <div className="hidden group-hover:flex flex-col items-center md:items-start justify-center z-10 w-full">
                
                <strong className='w-full text-center text-white text-xl lg:text-2xl xl:text-3xl mb-3 lg:mb-6'>{title}</strong>
                
                <p className="hidden sm:block lg:text-lg xl:text-xl lg:leading-normal text-white sm:max-w-96 sm:mb-4 md:mb-0">
                    {description}
                </p>
                <p className="hidden max-w-96 w-full md:block lg:text-lg xl:text-xl lg:leading-normal text-white">
                    {technologies.text}
                </p>
                
                <ul className="hidden md:block lg:text-lg xl:text-xl lg:leading-normal text-white list-disc md:pl-5 md:mb-5">
                    {
                        technologies.techs.map((tech, idx) => (
                            <li key={idx}>{tech}</li>
                        ))
                    }
                </ul>
                
                <div className="flex flex-col sm:flex-row sm:max-w-60 md:max-w-full gap-2 w-full items-center justify-between">
                    <Link href={links.githubLink} className="flex items-center gap-3 bg-white text-zinc-800 text-sm sm:text-base font-semibold px-3 py-1 lg:px-6 lg:py-3 hover:shadow-arr-dark hover:text-shadow-light-md transition-all ease-linear">
                        <GithubLogo className="lg:h-8 lg:w-8" weight="bold"/>
                        Github
                    </Link>
                    <Link href={links.websiteLink} className="flex items-center gap-3 bg-white text-zinc-800 text-sm sm:text-base font-semibold px-3 py-1 lg:px-6 lg:py-3 hover:shadow-arr-dark hover:text-shadow-light-md transition-all ease-linear">
                        <LinkIcon className="lg:h-8 lg:w-8" weight="bold"/>
                        Website
                    </Link>
                </div>
            </div>
        </div>
    )
}