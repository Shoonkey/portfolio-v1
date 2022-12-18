import Link from "next/link"
import { Tooltip, useBreakpointValue } from "@chakra-ui/react"
import { ArrowLeft } from "phosphor-react"

import useI18N from "../hooks/useI18N"

function BackToPortfolioButton() {
  const i18n = useI18N("portfolio")
  const iconSize = useBreakpointValue({ base: 24, md: 48 })

  return (
    <Tooltip label={i18n.meta.backToPortfolio}>
      <Link href="/" aria-label={i18n.meta.backToPortfolio}>
        <ArrowLeft size={iconSize} />
      </Link>
    </Tooltip>
  )
}

export default BackToPortfolioButton
