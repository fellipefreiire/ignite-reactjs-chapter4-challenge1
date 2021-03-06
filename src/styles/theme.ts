import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { createBreakpoints } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const breakpoints = createBreakpoints({
  sm: '375px',
  md: '768px',
  lg: '1440px',
  xl: '1920px',
})

export const theme = extendTheme({
  config,
  breakpoints,
  colors: {
    highlight: '#FFBA08',
    highlight50: 'rgba(255, 186, 8, 0.5)',
    dark: {
      black: '#000000',
      headings: '#47585B',
      text: '#47585B',
      info: '#999999',
      info50: 'rgba(153, 153, 153, 0.5)'
    },
    light: {
      white: '#FFFFFF',
      headings: '#F5F8FA',
      text: '#F5F8FA',
      info: '#DADADA',
      info50: 'rgba(218, 218, 218, 0.5)'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: theme.colors.light.white,
        color: theme.colors.dark.text,
        margin: 'auto',
        maxWidth: '1920px',
        fontFamily: theme.fonts.main
      },
    })
  }
})