import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../chakra/theme'
import I18NProvider from '../projects/portfolio/components/I18NProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <I18NProvider>
        <Component {...pageProps} />
      </I18NProvider>
    </ChakraProvider>
  )
}

export default MyApp
