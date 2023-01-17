import { Box } from "@chakra-ui/react"

interface SurfaceProps {
  height: number
}

export const Line = ({ height }: SurfaceProps) => (
  <Box w="100%" py={4}>
    <Box h={`${height}px`} background="#e2e2e2" />
  </Box>
)

export const Space = ({ height }: SurfaceProps) => <Box w="100%" h={`${height}px`} />