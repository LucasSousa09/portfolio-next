interface LogoProps {
  theme?: string
}

export function Logo({ theme = 'light' }: LogoProps) {
  return (
    <svg
      className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-28 sm:w-48 opacity-10 sm:static sm:translate-x-0 sm:translate-y-0 sm:opacity-100"
      xmlns="http://www.w3.org/2000/svg"
      width="280"
      height="280"
      fill="none"
      viewBox="0 0 280 280"
    >
      <circle
        cx="140"
        cy="140"
        r="140"
        fill={`${theme === 'dark' ? '#f4f4f5' : '#333333'}`}
      ></circle>
      <path
        fill={`${theme === 'dark' ? '#232323' : '#f4f4f5'}`}
        stroke={`${theme === 'dark' ? '#232323' : '#f4f4f5'}`}
        strokeWidth="2.8"
        d="M70 221.165V58l89.64 79.568L70 221.165z"
      ></path>
      <path
        fill={`${theme === 'dark' ? '#232323' : '#f4f4f5'}`}
        stroke={`${theme === 'dark' ? '#232323' : '#f4f4f5'}`}
        strokeWidth="2.8"
        d="M126.825 219.765H102.56l80.234-81.213 1.021-1.033-1.07-.982L98.773 59.4h24.063l85.148 78.217-81.159 82.148z"
      ></path>
    </svg>
  )
}
