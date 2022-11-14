import { Heading, Image, Flex, Text, Tooltip } from "@chakra-ui/react"
import Link from "next/link"
import { Code } from "phosphor-react"

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
    <Flex flexDir="column" style={{ textIndent: "initial" }}>
      <Flex
        flexDir="column"
        p={4}
        bg="gray.900"
        borderRadius="32px"
      >
        <Image src={imageSource} alt={name} borderRadius="16px" />
        <Flex justifyContent="end" alignItems="center" gap={2} mt={2}>
          {inProgress && (
            <Text fontSize="1rem" color="gray">
              In progress
            </Text>
          )}
          <Link href={githubLink}>
            <a target="_blank">
              <Tooltip placement="top" label="View code">
                <Code size={32} color="pink" />
              </Tooltip>
            </a>
          </Link>
        </Flex>
      </Flex>
      <Heading mt={2} as="h2" size="md" textAlign="center">
        {name}
      </Heading>
    </Flex>
  )
}

export default Project
