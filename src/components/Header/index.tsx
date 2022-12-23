import { ListItem } from './ListItem'

export function Header() {
  return (
    <header className="flex items-center justify-center w-full">
      <div className="flex items-center justify-between w-desktop max-w-desktop text-brand-light dark:text-zinc-100 py-6 px-12">
        <strong className="text-2xl font-extrabold">Lucas Sousa</strong>
        <nav className="flex">
          <ul className="flex items-center gap-20 font-semibold">
            <ListItem linkText="My work" linkRef="#" />
            <ListItem linkText="About Me" linkRef="#" />
            <ListItem linkText="Hire Me" linkRef="#" isHireMe />
          </ul>
        </nav>
      </div>
    </header>
  )
}
