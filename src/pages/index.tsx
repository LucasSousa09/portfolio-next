import { useTheme } from 'next-themes'
import { MainPage } from '../components/MainPage'

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col mx-auto xl:max-w-desktop">
      <button
        className="fixed bottom-6 left-12 p-1 flex w-14 h-8 justify-start rounded-full bg-text-light transition-all dark:justify-end dark:bg-text-dark"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <span className="flex rounded-full h-6 w-6 bg-background-light dark:bg-background-dark" />
      </button>
      <MainPage />
    </div>
  )
}
