import Link from "next/link"
import { Tooltip } from "@chakra-ui/react"
import { ArrowLeft } from "phosphor-react"

function BackToPortfolioButton() {
  return (
    <Tooltip label="Go back to portfolio">
      <Link href="/" aria-label="Go back to portfolio">
        <ArrowLeft size={48} />
      </Link>
    </Tooltip>
  )
}

export default BackToPortfolioButton
