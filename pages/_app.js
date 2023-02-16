import '@/styles/globals.css'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
  colors:{
    brand:{
      orange: "hsl(25, 97%, 53%)",
      white: "hsl(0, 0%, 100%)",
      lightgrey : "hsl(217, 12%, 63%)",
      mediumgrey : "hsl(213, 12%, 25%)",
      darkblue : "hsl(213, 19%, 18%)",
      dark : "hsl(216, 12%, 8%)"
    }
  },
  breakpoints:{
    sm:'376px',
    md:'425px',
    lg:'768px',
    xl:'1024px',
    '2xl': '1440px'
  }
})
export default function App({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
}
