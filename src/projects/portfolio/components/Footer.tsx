import { Flex, Text } from "@chakra-ui/react"
import { Heart } from "phosphor-react"
import useI18N from "../hooks/useI18N"

function Footer() {
  const i18n = useI18N("portfolio")

  return (
    <Flex as="footer" gap={1} mt={4} justifyContent="center">
      <Text>{i18n.content.home.madeWith}</Text>
      <Heart size={32} weight="fill" color="#eb5df5" />
    </Flex>
  )
}

export default Footer
