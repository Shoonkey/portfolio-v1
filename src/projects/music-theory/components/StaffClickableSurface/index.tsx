import { Box, Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"

import { Line, Space } from "./surfaces"

interface StaffClickableSurface {
  type: "line" | "space"
  height: number
  notePlaced: boolean
  onClick: () => void
}

function StaffClickableSurface({ type, height, notePlaced, onClick }: StaffClickableSurface) {
  const [showButton, setShowButton] = useState(false)

  return (
    <Box
      onMouseOver={() => setShowButton(true)}
      onMouseOut={() => setShowButton(false)}
      pos="relative"
      cursor="pointer"
      onClick={onClick}
    >
      {(notePlaced || showButton) && (
        <Box
          pos="absolute"
          w="50px"
          h="40px"
          background={notePlaced ? "#e2e2e2" : "#e2e2e24f"}
          borderRadius="50%"
          border="solid 1px white"
          left="280px"
          top={type === "space" ? "5px" : "0px"}
        />
      )}
      {type === "line" && <Line height={height} />}
      {type === "space" && <Space height={height} />}
    </Box>
  )
}

export default StaffClickableSurface
