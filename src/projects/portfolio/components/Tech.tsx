import { Box, Image, Text } from "@chakra-ui/react";

interface TechProps {
  logoSrc: string
  name: string
}

function Tech({ logoSrc, name }: TechProps) {
  return (
    <Box>
      <Image
        src={logoSrc}
        alt={`${name} logo`}
        h={{ base: "48px", md: "64px" }}
      />
      <Text mt={2} textAlign="center">
        <strong>{name}</strong>
      </Text>
    </Box>
  )
}

export default Tech;