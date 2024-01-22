import Image from "next/image"
import logoImgDark from '../assets/logo-dark.svg'
import logoImgLight from '../assets/logo-light.svg'

type SectionHeaderProps = {
    title: string
}

export function SectionHeader({ title }: SectionHeaderProps){
    return (
        <header className="flex items-center justify-center md:justify-start gap-3 w-full px-16">
            <Image className="hidden dark:block h-8 w-8 sm:h-12 sm:w-12  lg:h-16 lg:w-16" src={logoImgDark} alt="" />
            <Image className="block dark:hidden h-8 w-8 sm:h-12 sm:w-12  lg:h-16 lg:w-16" src={logoImgLight} alt="" />

            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-shadow-light-md dark:text-shadow-dark-md">
                {title}
            </h2>
        </header>
    )
}