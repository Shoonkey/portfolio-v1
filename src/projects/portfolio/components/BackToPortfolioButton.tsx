import Link from "next/link"
import { Tooltip } from "@chakra-ui/react"
import { ArrowLeft } from "phosphor-react"

import useI18N from "../hooks/useI18N"

function BackToPortfolioButton() {
  const i18n = useI18N("portfolio")

  return (
    <Tooltip label={i18n.meta.backToPortfolio}>
      <Link href="/" aria-label={i18n.meta.backToPortfolio}>
        <ArrowLeft size={48} />
      </Link>
    </Tooltip>
  )
}

export default BackToPortfolioButton
