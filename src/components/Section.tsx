'use client'

import { ReactNode, useEffect, useRef } from "react"
import { motion } from 'framer-motion'

type SectionProps = {
    children: ReactNode,
    id: string
}

export function Section({ children, id }: SectionProps){
    const ref = useRef<HTMLElement>(null)

    return (
        <motion.section
            ref={ref}
            id={id}
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0)' }}
            transition={{ delay:.5, duration: .8 }}
            className="flex flex-col items-center justify-center gap-8 lg:gap-16 w-full min-h-[calc(100vh-52px)] sm:min-h-[calc(100vh-56px)] lg:min-h-[calc(100vh-92px)] mb-[53px] sm:mb-[57px] lg:mb-[93px] last-of-type:mb-0"
        >
            {children}
        </motion.section>
    )
}