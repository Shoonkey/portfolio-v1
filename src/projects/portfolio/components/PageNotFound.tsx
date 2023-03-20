import { Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useI18N from "../hooks/useI18N";
import Page from "./Page";

function PageNotFound() {
  const i18n = useI18N("custom-404");
  const [face, setFace] = useState<string | null>(null);

  // Moved to an effect so as to not trigger a hydration error
  useEffect(() => {
    const getTextFace = () => {
      const faces = [
        "( ⚆ _ ⚆ )",
        "ಠ╭╮ಠ",
        "◉_◉",
        "(；一_一)",
        "ಠ_ಥ",
        "ب_ب",
        ">_>",
      ];

      return faces[Math.floor(Math.random() * faces.length)];
    };

    setFace(getTextFace());
  }, []);

  return (
    <Page
      projectName="custom-404"
      title="page-not-found"
      showBackToPortfolioButton={false}
    >
      <Flex
        flexGrow={1}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h1" size="4xl" fontFamily="Arvo" color="#efae32">
          404
        </Heading>
        <Heading as="h1" mt={4} textAlign="center">
          <Text as="span" color="#efae32">
            Oops!
          </Text>{" "}
          {i18n.content["page-not-found"].mainText}
        </Heading>
        <Heading as="h2" size="md" textAlign="center">
          {i18n.content["page-not-found"].subtext}
        </Heading>
        {face && (
          <Heading as="h2" size="3xl" mt={4} color="gray.400">
            {face}
          </Heading>
        )}
      </Flex>
    </Page>
  );
}

export default PageNotFound;
