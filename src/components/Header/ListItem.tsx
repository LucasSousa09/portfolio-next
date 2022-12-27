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
          className="text-base text-background-light bg-text-light dark:text-background-dark dark:bg-text-dark sm:py-2 sm:px-4  py-3 px-6"
          href={linkRef}
        >
          {linkText}
        </Link>
      ) : (
        <Link className="sm:text-sm md:text-base" href={linkRef}>
          {linkText}
        </Link>
      )}
    </li>
  )
}
