import { Logo } from './Logo'
import { HeadingOne } from './HeadingOne'

export function MainPage() {
  return (
    <main className="mt-28 w-full px-28">
      <div className="flex items-center justify-between p-6">
        <Logo />
        <div className="max-w-screen-sm">
          <HeadingOne headingText="Dev frontend" />
          <HeadingOne headingText="Helping you to give your designs life!" />
        </div>
      </div>
    </main>
  )
}
