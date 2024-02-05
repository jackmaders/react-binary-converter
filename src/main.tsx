import { ChakraProvider, Container } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import BinaryConverter from "./binaryConverter/BinaryConverter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <React.StrictMode>
      <Container>
        <BinaryConverter />
      </Container>
    </React.StrictMode>
  </ChakraProvider>
);
