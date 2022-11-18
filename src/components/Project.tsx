import { Box, Heading, Image, Flex, Text, Tooltip } from "@chakra-ui/react"
import Link from "next/link"
import { ReactNode } from "react"
import { Code, ArrowSquareOut } from "phosphor-react"

interface ProjectProps {
  name: string
  link?: string
  githubLink: string
  imageSource: string
  imageAlt?: string
  imageCredit?: string | ReactNode
  inProgress?: boolean
}

function Project({
  name,
  link,
  githubLink,
  imageSource,
  imageAlt,
  imageCredit,
  inProgress = false,
}: ProjectProps) {
  return (
    <Flex flexDir="column" style={{ textIndent: "initial" }}>
      <Flex flexDir="column" p={4} bg="gray.900" borderRadius="32px">
        <Box className="image-container" position="relative">
          <Image
            flexGrow={1}
            src={imageSource}
            alt={imageAlt || name}
            borderRadius="16px"
            h="200px"
          />
          {imageCredit && (
            <Box
              position="absolute"
              bottom={0}
              left="50%"
              transform="translateX(-50%)"
              bg="black"
              px={2}
              py={1}
              borderRadius="8px 8px 0 0"
              fontSize=".75rem"
            >
              {imageCredit}
            </Box>
          )}
        </Box>
        <Flex justifyContent="end" alignItems="center" gap={2} mt={2}>
          {inProgress && (
            <Text fontSize="1rem" color="gray">
              In progress
            </Text>
          )}
          {link && (
            <Link href={link}>
              <a target="_blank">
                <Tooltip placement="top" label="Open website">
                  <ArrowSquareOut size={32} color="cyan" />
                </Tooltip>
              </a>
            </Link>
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
