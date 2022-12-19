import { Flex, Heading, Select } from "@chakra-ui/react"
import { useContext } from "react"
import BackButton from "./BackButton"

import { I18NContext, SupportedLanguage } from "./I18NProvider"

interface NavbarProps {
  title: string
  showBackButton?: boolean
}

function Navbar({ title, showBackButton = true }: NavbarProps) {
  const { currentLanguage, changeLanguage } = useContext(I18NContext)

  return (
    <Flex
      as="header"
      mb={4}
      justifyContent="space-between"
      alignItems="center"
      gap={4}
    >
      {showBackButton && <BackButton />}
      <Flex flexGrow={1} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size={{ base: "md", md: "2xl" }} fontFamily="Arvo">
          {title}
        </Heading>
        <Select
          value={currentLanguage}
          onChange={(e) => changeLanguage(e.target.value as SupportedLanguage)}
          w="auto"
        >
          <option value="en-US">en-US</option>
          <option value="pt-BR">pt-BR</option>
        </Select>
      </Flex>
    </Flex>
  )
}

export default Navbar
