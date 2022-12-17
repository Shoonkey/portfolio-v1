import { Box, Heading } from "@chakra-ui/react"

function Navbar() {
  return (
    <Box as="header" mb={4}>
      <Heading as="h1" size="2xl" fontFamily="Arvo">
        Portfolio
      </Heading>
    </Box>
  )
}

export default Navbar
