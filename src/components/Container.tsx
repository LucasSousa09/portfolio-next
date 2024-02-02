import { ReactNode } from "react"
import { Header } from "./Header"

type ContainerProps = {
    children: ReactNode
}

export function Container({
    children
}: ContainerProps){

    return (
            <div className="bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-white flex flex-col items-center overflow-clip">
                <Header />
                {children}     
            </div>
    )
}