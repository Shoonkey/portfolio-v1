import { Button, Tooltip, useBreakpointValue } from "@chakra-ui/react"
import { ArrowLeft } from "phosphor-react"

import useI18N from "../hooks/useI18N"
import { useRouter } from "next/router"

function BackButton() {
  const i18n = useI18N("portfolio")
  const iconSize = useBreakpointValue({ base: 24, md: 48 })
  const router = useRouter()

  return (
    <Tooltip label={i18n.meta.goBack}>
      <Button variant="transparent" onClick={() => router.back()} aria-label={i18n.meta.goBack}>
        <ArrowLeft size={iconSize} />
      </Button>
    </Tooltip>
  )
}

export default BackButton
