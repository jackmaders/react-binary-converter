import { ChakraProvider, Container } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import BinaryConverter from "./binaryConverter/BinaryConverter";
import "./tailwind.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <React.StrictMode>
      <Container className="space-y-8 pt-8">
        <h1 className="text-2xl font-semibold">Binary Converter</h1>
        <BinaryConverter />
      </Container>
    </React.StrictMode>
  </ChakraProvider>
);
