import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { LayoutProvider } from '@/context/layout'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
        <Component {...pageProps} />
    </LayoutProvider>
  )
}