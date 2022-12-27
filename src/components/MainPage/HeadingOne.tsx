interface HeadingOneProps {
  headingText: string
}

export function HeadingOne({ headingText }: HeadingOneProps) {
  return (
    <h1 className="font-bold leading-loose text-3xl sm:text-3.5xl md:text-4xl md:leading-loose lg:text-5xl lg:leading-loose xl:text-6xl xl:leading-loose text-text-light dark:text-text-dark">
      {headingText}
    </h1>
  )
}
