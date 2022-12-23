import Link from 'next/link'

interface ListItemProps {
  linkText: string
  linkRef: string
  isHireMe?: boolean
}

export function ListItem({
  linkText,
  linkRef,
  isHireMe = false,
}: ListItemProps) {
  return (
    <li className="flex">
      {isHireMe ? (
        <Link
          className="text-base text-zinc-100 bg-brand-light dark:text-brand-dark dark:bg-zinc-100 py-3 px-6"
          href={linkRef}
        >
          {linkText}
        </Link>
      ) : (
        <Link className="text-base" href={linkRef}>
          {linkText}
        </Link>
      )}
    </li>
  )
}
