interface HeadingOneProps {
  headingText: string
}

export function HeadingOne({ headingText }: HeadingOneProps) {
  return (
    <h1 className="text-6xl font-bold leading-loose text-brand-light dark:text-zinc-100">
      {headingText}
    </h1>
  )
}
