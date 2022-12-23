import { useTheme } from 'next-themes'
import { MainPage } from '../components/MainPage'

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="w-desktop max-w-desktop flex flex-col mx-auto">
      <button
        className="text-lg text-brand-light dark:text-zinc-100"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        Hello
      </button>
      <MainPage />
    </div>
  )
}
