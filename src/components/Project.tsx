import { Heading, Image, Flex } from "@chakra-ui/react"
import Link from "next/link"

interface ProjectProps {
  name: string
  githubLink: string
  imageSource: string
}

function Project({ name, githubLink, imageSource }: ProjectProps) {
  return (
    <Link href={githubLink}>
      <a target="_blank">
        <Flex flexDir="column" h="250px" style={{ textIndent: "initial" }}>
          <Flex
            p={4}
            bg="gray.900"
            borderRadius="32px"
            flexGrow={1}
            alignItems="center"
          >
            <Image src={imageSource} alt={name} borderRadius="16px" />
          </Flex>
          <Heading mt={2} as="h2" size="lg" textAlign="center">
            {name}
          </Heading>
        </Flex>
      </a>
    </Link>
  )
}

export default Project
