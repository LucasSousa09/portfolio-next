'use client'

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SquaresFour, X } from "@phosphor-icons/react"

import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header(){
    const headerRef = useRef<HTMLHeadingElement>(null)
    const [myWorksHighlight, setMyWorksHighlight] = useState('')
    const [aboutMeHighlight, setAboutMeHighlight] = useState('')
    const [hireMeHighlight, setHireMeHighlight] = useState('')

    const [showNavBar, setShowNavBar] = useState(false)

    useEffect(() => {
        function highlightNavLinks(text: string, headerOffset: number, windowHeight: number, multiplier: number){
            if( headerOffset > windowHeight
                && headerOffset < windowHeight * multiplier 
            ){
                if(text === 'my works'){
                    setMyWorksHighlight('border-b-2 border-zinc-700 dark:border-white')
                    setAboutMeHighlight('')
                    setHireMeHighlight('')
                }
                if(text === 'about me'){
                    setMyWorksHighlight('')
                    setAboutMeHighlight('border-b-2 border-zinc-700 dark:border-white')
                    setHireMeHighlight('')
                }
                if(text === 'hire me'){
                    setMyWorksHighlight('')
                    setAboutMeHighlight('')
                    setHireMeHighlight('border-b-2 border-zinc-700 dark:border-white sm:border-0 sm:brightness-150')
                }
                return
            }
            if(headerOffset < windowHeight && text === 'landing'){
                    setMyWorksHighlight('')
                    setAboutMeHighlight('')
                    setHireMeHighlight('')
            }
        }

        function handleScroll() {
            if(headerRef.current){
                highlightNavLinks('landing', headerRef.current.offsetTop, window.innerHeight, 1)
                highlightNavLinks('my works', headerRef.current.offsetTop, window.innerHeight, 2)
                highlightNavLinks('about me', headerRef.current.offsetTop, window.innerHeight * 2, 3)
                highlightNavLinks('hire me', headerRef.current.offsetTop, window.innerHeight * 3, 4)
            }
            return
        }

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    },[])    

    return (
        <header
            ref={headerRef}
            className="sticky top-0 left-0 right-0 w-full flex items-center justify-between px-6 py-3 lg:px-12 lg:py-6 bg-zinc-100 dark:bg-zinc-900 z-10"
        >
            <Link href="#main">
                <strong className="dark:text-shadow-dark text-shadow-light font-extrabold text-xl lg:text-2xl">
                    Lucas Sousa
                </strong>
            </Link>

            <button onClick={() => setShowNavBar(state => !state)} className="sm:hidden">
                <SquaresFour weight="fill" size={20} />
            </button>

            <nav className={`sm:hidden absolute top-0 ${showNavBar ? 'right-0' : 'right-[-50%]'} h-screen w-1/2 flex flex-col gap-2 pt-10 px-4 list-none font-medium transition-all ease-linear bg-zinc-200 dark:bg-zinc-800`}>                         
                <button 
                    onClick={() => setShowNavBar(state => !state)}
                    className="absolute top-4 right-4"
                >
                    <X weight="bold"/>
                </button>
                
                <li className={`${myWorksHighlight} py-2 lg:py-3`}>
                    <Link 
                        href="#works"
                        className="hover:text-shadow-light-md dark:hover:text-shadow-dark-md transition-all ease-linear">
                        Meus trabalhos
                    </Link>
                </li>
                
                <li className={`${aboutMeHighlight} py-2 lg:py-3`}>
                    <Link 
                        href="#about"
                        className="hover:text-shadow-light-md dark:hover:text-shadow-dark-md transition-all ease-linear">
                        Sobre Mim
                    </Link>
                </li>
                
                <li className={`${hireMeHighlight} py-2 lg:py-3`}>
                    <Link 
                        href="#hire"
                        className="hover:text-shadow-light-md dark:hover:text-shadow-dark-md transition-all ease-linear">
                        Me contrate
                    </Link>
                </li>
            </nav>

            <nav className="hidden list-none sm:flex items-center sm:gap-5 lg:gap-12 xl:gap-20 font-semibold text-sm lg:text-base">       
                <li className=" sm:h-8 sm:w-8 lg:h-11 lg:w-11">
                    <ThemeSwitcher />
                </li>
                
                <li className={`${myWorksHighlight} py-2 lg:py-3`}>
                    <Link 
                        href="#works"
                        className="hover:text-shadow-light-md dark:hover:text-shadow-dark-md transition-all ease-linear">
                        Meus trabalhos
                    </Link>
                </li>
                
                <li className={`${aboutMeHighlight} py-2 lg:py-3`}>
                    <Link 
                        href="#about"
                        className="hover:text-shadow-light-md dark:hover:text-shadow-dark-md transition-all ease-linear">
                        Sobre Mim
                    </Link>
                </li>
                
                <li>
                    <Link 
                        href="#hire"
                        className={`${hireMeHighlight} bg-zinc-700 text-zinc-100 dark:bg-white dark:text-zinc-900 px-4 lg:px-6 py-2 lg:py-3 hover:shadow-arr-light dark:hover:shadow-arr-dark hover:text-shadow-dark-md dark:hover:text-shadow-light-md transition-all ease-linear`}>
                        Me contrate
                    </Link>
                </li>
            </nav>
        </header>
    )
}