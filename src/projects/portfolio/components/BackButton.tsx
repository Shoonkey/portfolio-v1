import { Button, Tooltip } from "@chakra-ui/react";
import { ArrowLeft } from "@phosphor-icons/react";

import useI18N from "../hooks/useI18N";
import { useRouter } from "next/router";

function BackButton() {
  const i18n = useI18N("portfolio");
  const router = useRouter();

  return (
    <Tooltip label={i18n.meta.goBack}>
      <Button
        minW={8}
        variant="transparent"
        onClick={() => router.back()}
        aria-label={i18n.meta.goBack}
      >
        <ArrowLeft size={48} />
      </Button>
    </Tooltip>
  );
}

export default BackButton;
