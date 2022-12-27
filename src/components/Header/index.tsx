import { SquaresFour } from 'phosphor-react'
import { ListItem } from './ListItem'

export function Header() {
  return (
    <header className="flex items-center justify-center w-full">
      <div className="flex items-center justify-between w-desktop max-w-desktop text-text-light dark:text-text-dark py-4 px-8 lg:py-6 lg:px-12">
        <strong className="text-lg lg:text-2xl font-extrabold">
          Lucas Sousa
        </strong>
        <nav className="flex">
          <ul className="hidden sm:flex sm:items-center sm:gap-6 md:gap-20 font-semibold">
            <ListItem linkText="My work" linkRef="#" />
            <ListItem linkText="About Me" linkRef="#" />
            <ListItem linkText="Hire Me" linkRef="#" isHireMe />
          </ul>
          <button className="flex sm:hidden">
            <SquaresFour className="h-6 w-6" weight="fill" />
          </button>
        </nav>
      </div>
    </header>
  )
}
