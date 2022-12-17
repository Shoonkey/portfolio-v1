import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles: {
    global: {
      "html, body": {
        padding: 0,
        margin: 0
      },
      "*": {
        boxSizing: "border-box"
      }
    }
  }
})

export default theme