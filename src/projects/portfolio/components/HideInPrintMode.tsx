import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import styled from "styled-components";

interface HideInPrintModeProps {
  children: ReactNode;
}

const Container = styled(Flex)`
  @media print {
    display: none !important;
  }
`;

function HideInPrintMode({
  children,
  ...props
}: HideInPrintModeProps & FlexProps) {
  return (
    <Container flexDir="column" {...props}>
      {children}
    </Container>
  );
}

export default HideInPrintMode;
