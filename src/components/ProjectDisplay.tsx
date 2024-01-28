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
        <div className="relative flex items-center px-16 justify-center h-40 sm:h-64 md:h-96 lg:h-[458px] rounded overflow-clip group">
            <Image className='absolute group-hover:brightness-50 top-0 left-0 bottom-0 right-0 object-cover w-full h-full transition-all ease-linear' src={image} alt="" width={600} height={400} />
            <div className="hidden group-hover:flex flex-col items-start justify-center z-10">
                
                <strong className='w-full text-center text-white lg:text-3xl mb-6'>{title}</strong>
                
                <p className="lg:text-xl lg:leading-normal text-white">
                    {description}
                </p>
                <p className="lg:text-xl lg:leading-normal text-white">
                    {technologies.text}
                </p>
                
                <ul className="lg:text-xl lg:leading-normal text-white list-disc lg:pl-7 lg:mb-11">
                    {
                        technologies.techs.map((tech, idx) => (
                            <li key={idx}>{tech}</li>
                        ))
                    }
                </ul>
                
                <div className="flex w-full items-center justify-between">
                    <Link href={links.githubLink} className="flex items-center gap-3 bg-white text-zinc-800 font-semibold lg:px-6 lg:py-3 hover:shadow-arr-dark hover:text-shadow-light-md transition-all ease-linear">
                        <GithubLogo className="lg:h-8 lg:w-8" weight="bold"/>
                        Github
                    </Link>
                    <Link href={links.websiteLink} className="flex items-center gap-3 bg-white text-zinc-800 font-semibold lg:px-6 lg:py-3 hover:shadow-arr-dark hover:text-shadow-light-md transition-all ease-linear">
                        <LinkIcon className="lg:h-8 lg:w-8" weight="bold"/>
                        Website
                    </Link>
                </div>
            </div>
        </div>
    )
}