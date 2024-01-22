import { ReactNode } from "react"

interface ParagraphProps {
    children: ReactNode
}

export function Paragraph({children}: ParagraphProps){
    return (
        <p className="indent-4 sm:indent-6 lg:indent-8 text-sm sm:text-lg xl:text-xl leading-normal xl:leading-relaxed">
            {children}
        </p>
    )
}