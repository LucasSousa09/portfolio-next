import { Logo } from './Logo'
import { HeadingOne } from './HeadingOne'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

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
    <main className="mt-28 w-full px-28">
      <div className="flex items-center justify-between p-6">
        <Logo theme={themeMode} />
        <div className="max-w-screen-sm">
          <HeadingOne headingText="Dev frontend" />
          <HeadingOne headingText="Helping you to give your designs life!" />
        </div>
      </div>
    </main>
  )
}
