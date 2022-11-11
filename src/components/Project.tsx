import { Heading, Image, Flex, Text } from "@chakra-ui/react"
import Link from "next/link"

interface ProjectProps {
  name: string
  githubLink: string
  imageSource: string
  inProgress?: boolean
}

function Project({
  name,
  githubLink,
  imageSource,
  inProgress = false,
}: ProjectProps) {
  return (
    <Link href={githubLink}>
      <a target="_blank">
        <Flex flexDir="column" style={{ textIndent: "initial" }}>
          <Flex
            flexDir="column"
            p={4}
            bg="gray.900"
            borderRadius="32px"
            flexGrow={1}
            alignItems="center"
          >
            <Image src={imageSource} alt={name} borderRadius="16px" />
            {inProgress && (
              <Text
                mt={2}
                fontSize="1rem"
                color="gray"
              >
                In progress
              </Text>
            )}
          </Flex>
          <Heading mt={2} as="h2" size="md" textAlign="center">
            {name}
          </Heading>
        </Flex>
      </a>
    </Link>
  )
}

export default Project
