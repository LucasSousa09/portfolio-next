import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from '../components/Header'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Poppins:wght@400;500;600;700;800&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-zinc-100 dark:bg-brand-dark">
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
