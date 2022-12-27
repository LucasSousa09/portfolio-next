import { ArrowCircleDown } from 'phosphor-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Logo } from './Logo'
import { HeadingOne } from './HeadingOne'

export function MainPage() {
  const { theme } = useTheme()
  const [themeMode, setThemeMode] = useState('light')

  useEffect(() => {
    const themeSettings =
      localStorage.getItem(`@portfolio:theme-state-1.0.0`) || 'light'
    setThemeMode(themeSettings)
  }, [])

  useEffect(() => {
    localStorage.setItem(`@portfolio:theme-state-1.0.0`, String(theme))
    if (theme) {
      setThemeMode(theme)
    }
  }, [theme])

  return (
    <main className="w-full mt-20 lg:mt-24 lg:px-12 xl:mt-24 xl:px-28">
      <div className="relative flex items-center sm:px-12 sm:gap-14 lg:p-6 lg:gap-20 lg:justify-center xl:justify-between">
        <Logo theme={themeMode} />
        <div className="relative max-w-[340px] text-center mx-auto sm:max-w-sm sm:text-left lg:max-w-lg xl:max-w-screen-sm">
          <HeadingOne headingText="Dev frontend" />
          <HeadingOne headingText="Helping you to give your designs life!" />

          <a
            className="absolute flex items-center left-[50%] whitespace-nowrap font-semibold text-worksLink text-base gap-2 translate-x-[-50%] mt-10 sm:left-0 sm:translate-x-0 sm:text-lg lg:mt-15 lg:gap-3 lg:text-3xl xl:text-4xl xl:gap-6"
            href="#"
          >
            <ArrowCircleDown
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
              weight="fill"
            />
            Get it to know our work!
          </a>
        </div>
      </div>
    </main>
  )
}
