import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  }, [])

  return <Component {...pageProps} />
}
