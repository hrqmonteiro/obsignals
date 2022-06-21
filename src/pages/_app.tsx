import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import 'aos/dist/aos.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
