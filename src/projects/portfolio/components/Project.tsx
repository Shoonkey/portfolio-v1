import Link from "next/link";
import { Heading, Image, Flex, Text, Tooltip } from "@chakra-ui/react";
import { Robot } from "phosphor-react";

import useI18N from "../hooks/useI18N";

interface ProjectProps {
  name: string;
  type: "website" | "bot";
  link?: string;
  githubLink: string;
  imageSource?: string;
  imageAlt?: string;
  inProgress?: boolean;
}

function Project({
  name,
  type,
  link,
  githubLink,
  imageSource,
  imageAlt,
  inProgress = false,
}: ProjectProps) {
  const i18n = useI18N("portfolio");

  return (
    <Flex flexDir="column" style={{ textIndent: "initial" }}>
      <Flex flexDir="column" p={4} bg="gray.900" borderRadius="32px">
        <Link href={link || "#"} aria-label="Open website">
          <Flex h="200px" justifyContent="center" alignItems="center">
            {type === "website" && imageSource && (
              <Image
                flexGrow={1}
                src={imageSource}
                alt={imageAlt || name}
                borderRadius="16px"
                h="200px"
                objectFit="contain"
              />
            )}
            {type === "bot" && <Robot size={128} color="#efae32" />}
          </Flex>
        </Link>
        <Flex justifyContent="end" alignItems="center" gap={2} mt={2}>
          {inProgress && (
            <Text fontSize="1rem" color="gray">
              {i18n.content.home.projectInProgress}
            </Text>
          )}
          <Link href={githubLink} aria-label="View code">
            <Tooltip placement="top" label="View code">
              <Image
                src="/github-logo.png"
                alt="Github logo"
                height="32px"
                filter="invert(.7)"
              />
            </Tooltip>
          </Link>
        </Flex>
      </Flex>
      <Heading mt={4} as="h2" size="md" textAlign="center">
        {name}
      </Heading>
    </Flex>
  );
}

export default Project;
