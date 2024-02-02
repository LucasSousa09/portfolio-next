import Link from "next/link"
import { ReactNode } from "react"

type SocialLinkProps = {
    children: ReactNode
    clickable?: boolean
    linkUrl?: string
}

export function SocialLink({children, clickable = true, linkUrl = "" }: SocialLinkProps) {
    return(
        <>
            {
                clickable ? (
                    <Link 
                        href={linkUrl}
                        className={`hover:shadow-arr-light dark:hover:shadow-arr-dark hover:text-shadow-dark-md dark:hover:text-shadow-light-md transition-all ease-linear flex items-center justify-center gap-3 text-sm sm:text-base font-medium bg-zinc-700 dark:bg-zinc-100 text-white dark:text-zinc-800 py-2 sm:py-3 w-full`}
                    >
                        {children}    
                    </Link>
                ) : (
                    <span
                        className={`flex items-center justify-center gap-3 text-sm sm:text-base font-medium bg-zinc-700 dark:bg-zinc-100 text-white dark:text-zinc-800 py-2 sm:py-3 w-full`}
                    >
                        {children}
                    </span>
                )
            }
        </>
    )
}