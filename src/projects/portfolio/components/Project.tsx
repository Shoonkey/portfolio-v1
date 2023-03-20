import Link from "next/link";
import { useState } from "react";
import { Heading, Image, Flex, Text, Tooltip, Box } from "@chakra-ui/react";
import { Robot, Hammer, HandGrabbing, Checks } from "@phosphor-icons/react";

import useI18N from "../hooks/useI18N";

interface ProjectProps {
  name: string;
  type: "website" | "bot";
  status?: "complete" | "paused" | "in-progress";
  link?: string;
  githubLink: string;
  imageSource?: string;
  imageAlt?: string;
  inProgress?: boolean;
}

function Project({
  name,
  type,
  status = "complete",
  link,
  githubLink,
  imageSource,
  imageAlt,
}: ProjectProps) {
  const i18n = useI18N("portfolio");

  const [imageHovered, setImageHovered] = useState(false);

  return (
    <Flex flexDir="column" style={{ textIndent: "initial" }}>
      <Flex flexDir="column" p={4} bg="gray.900" borderRadius="32px">
        <Link href={link || "#"} aria-label="Open website">
          <Flex
            h="200px"
            justifyContent="center"
            alignItems="center"
            position="relative"
            borderRadius="16px"
          >
            {type === "website" && imageSource && (
              <>
                <Box
                  position="absolute"
                  w="100%"
                  h="100%"
                  background="cyan.100"
                  borderRadius="inherit"
                  transform={`scale(${imageHovered ? "1" : "0.98"})`}
                />
                <Image
                  zIndex={1}
                  flexGrow={1}
                  src={imageSource}
                  alt={imageAlt || name}
                  borderRadius="inherit"
                  h="200px"
                  transition="transform .3s"
                  objectFit="contain"
                  _hover={{ transform: "translate(6px, -6px)" }}
                  onMouseOver={() => setImageHovered(true)}
                  onMouseOut={() => setImageHovered(false)}
                />
              </>
            )}
            {type === "bot" && <Robot size={128} color="#efae32" />}
          </Flex>
        </Link>
        <Flex justifyContent="space-between" alignItems="center" gap={2} mt={2}>
          <Text
            fontSize="1rem"
            color="gray"
            display="flex"
            gap={2}
            alignItems="center"
          >
            <Text as="span">Status:</Text>
            <Text
              as="span"
              display="flex"
              alignItems="center"
              gap={1}
              // complete -> green.400
              // in-progress -> pink.200
              // paused -> cyan.200
              color={
                status === "complete"
                  ? "green.300"
                  : status === "in-progress"
                  ? "pink.200"
                  : "cyan.200"
              }
            >
              {i18n.content.home.projectStatus[status]}
              {status === "complete" && <Checks size={24} />}
              {status === "in-progress" && <Hammer size={24} />}
              {status === "paused" && <HandGrabbing size={24} />}
            </Text>
          </Text>
          <Link
            href={githubLink}
            aria-label={i18n.content.home.projectLabels.viewCode}
          >
            <Tooltip
              placement="top"
              label={i18n.content.home.projectLabels.viewCode}
            >
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
