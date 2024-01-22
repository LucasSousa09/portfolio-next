import { ReactNode } from "react"

type SectionProps = {
    children: ReactNode
}

export function Section({ children }: SectionProps){
    return (
        <section className="flex flex-col items-center justify-center gap-8 lg:gap-16 w-full min-h-[calc(100vh-52px)] sm:min-h-[calc(100vh-56px)] lg:min-h-[calc(100vh-92px)]">
            {children}
        </section>
    )
}