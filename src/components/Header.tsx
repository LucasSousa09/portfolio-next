import Link from "next/link";

import { SquaresFour } from "@phosphor-icons/react/dist/ssr"

import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header(){
    return (
        <header className="sticky top-0 left-0 right-0 w-full flex items-center justify-between px-6 py-3 lg:px-12 lg:py-6 bg-zinc-100 dark:bg-zinc-900 z-10">
            <strong className="dark:text-shadow-dark text-shadow-light font-extrabold text-xl lg:text-2xl">
                Lucas Sousa
            </strong>

            <button className="sm:hidden">
                <SquaresFour weight="fill" size={20} />
            </button>

            <nav className="hidden sm:flex items-center sm:gap-5 lg:gap-12 xl:gap-20 font-semibold text-sm lg:text-base">
                
                <li className="list-none sm:h-8 sm:w-8 lg:h-11 lg:w-11">
                    <ThemeSwitcher />
                </li>
                
                <li className="list-none">
                    <Link className="hover:text-shadow-light-md dark:hover:text-shadow-dark-md transition-all ease-linear" href="" >
                        Meus trabalhos
                    </Link>
                </li>
                
                <li className="list-none">
                    <Link className="hover:text-shadow-light-md dark:hover:text-shadow-dark-md transition-all ease-linear" href="" >
                        Sobre Mim
                    </Link>
                </li>
                
                <li className="list-none">
                    <Link className="bg-zinc-700 text-zinc-100 dark:bg-white dark:text-zinc-900 px-4 lg:px-6 py-2 lg:py-3 hover:shadow-arr-light dark:hover:shadow-arr-dark hover:text-shadow-dark-md dark:hover:text-shadow-light-md transition-all ease-linear" href="" >
                        Me contrate
                    </Link>
                </li>
            </nav>
        </header>
    )
}