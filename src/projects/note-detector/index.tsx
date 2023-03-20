import { Box, Flex, Heading, IconButton, Spinner, Tooltip } from "@chakra-ui/react";
import { Microphone, MicrophoneSlash } from "@phosphor-icons/react";
import { useRef, useState } from "react";

import Page from "../portfolio/components/Page";

function DetectNoteApp() {
  const [audioStream, setAudioStream] = useState<MediaStream | null>(null);
  const [supported, setSupported] = useState(true);

  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleListen = async () => {
    if (!audioRef.current) return;

    if (!navigator.mediaDevices) {
      setSupported(false);
      return;
    }

    if (audioStream) {
      audioStream.getTracks().forEach((track) => track.stop());
      setAudioStream(null);
    } else {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true,
      });
      audioRef.current.srcObject = stream;
      audioRef.current.autoplay = true;

      setAudioStream(stream);
    }
  };

  if (!supported)
    return (
      <Page projectName="note-detector" title="home">
        <Heading as="h1" size="lg">
          Your browser does not support accessing the microphone. Sorry!
        </Heading>
      </Page>
    );

  return (
    <Page projectName="note-detector" title="home">
      <Flex
        flexGrow={1}
        flexDir={{ base: "column", lg: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Flex alignItems="center" flexDir="column" gap={2}>
          <Tooltip
            placement="top"
            label={
              audioStream
                ? "Status: listening. Click to stop"
                : "Status: not listening. Click to start"
            }
          >
            <IconButton
              bg="#efae32"
              _hover={{ bg: "#be800e" }}
              width="96px"
              height="96px"
              borderRadius="50%"
              icon={
                audioStream ? (
                  <MicrophoneSlash size={64} color="#2b2b2b" />
                ) : (
                  <Microphone size={64} color="#2b2b2b" />
                )
              }
              aria-label={
                audioStream
                  ? "Status: listening. Click to stop"
                  : "Status: not listening. Click to start"
              }
              onClick={() => toggleListen()}
            />
          </Tooltip>
          {audioStream ? (
            <Heading as="h1" size="lg" color="gray.400">
              Detecting...
            </Heading>
          ) : (
            <>
              <Heading as="h1" size="lg" color="gray.400">
                Not detecting yet
              </Heading>
              <Heading as="h2" size="md" color="gray.400">
                Click the icon to start
              </Heading>
            </>
          )}
          <audio ref={audioRef} />
          {/* TODO: Add visualizer */}
          {/* <Flex gap={2} alignItems="end" mt={4}>
            <Box w="16px" h="300px" bg="#efae32" />
            <Box w="16px" h="200px" bg="#efae32" />
            <Box w="16px" h="150px" bg="#efae32" />
            <Box w="16px" h="250px" bg="#efae32" />
            <Box w="16px" h="225px" bg="#efae32" />
            <Box w="16px" h="200px" bg="#efae32" />
            <Box w="16px" h="150px" bg="#efae32" />
            <Box w="16px" h="250px" bg="#efae32" />
            <Box w="16px" h="300px" bg="#efae32" />
            <Box w="16px" h="300px" bg="#efae32" />
            <Box w="16px" h="150px" bg="#efae32" />
            <Box w="16px" h="250px" bg="#efae32" />
            <Box w="16px" h="300px" bg="#efae32" />
            <Box w="16px" h="250px" bg="#efae32" />
            <Box w="16px" h="225px" bg="#efae32" />
            <Box w="16px" h="150px" bg="#efae32" />
            <Box w="16px" h="300px" bg="#efae32" />
          </Flex>
        </Flex> */}
      </Flex>
    </Page>
  );
}

export default DetectNoteApp;
