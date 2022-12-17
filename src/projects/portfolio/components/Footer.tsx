import { Flex, Text } from "@chakra-ui/react"
import { Heart } from "phosphor-react"

function Footer() {
  return (
    <Flex as="footer" gap={1} mt={4} justifyContent="center">
      <Text>Made with</Text>
      <Heart size={32} weight="fill" color="#eb5df5" />
    </Flex>
  )
}

export default Footer
