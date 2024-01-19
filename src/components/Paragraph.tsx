import { ReactNode } from "react"

interface ParagraphProps {
    animation?: string
    children: ReactNode
}

export function Paragraph({children, animation = ''}: ParagraphProps){
    return (
        <p className={`${ animation } opacity-0 font-bold text-center sm:text-start text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-normal sm:leading-relaxed lg:leading-relaxed xl:leading-normal dark:text-shadow-dark`}>
            {children}
        </p>
    )
}