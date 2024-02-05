import {
  Card,
  CardBody,
  CardFooter,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import convertBinaryToDecimal from "./convertBinaryToDecimal";
import {
  BINARY_REGEX,
  ERROR_BINARY_MAX_LENGTH,
  ERROR_INVALID_BINARY,
} from "./constants";

export default function BinaryConverter() {
  const [inputBinary, setInputBinary] = useState("");
  const [outputDecimal, setOutputDecimal] = useState<number | undefined>();
  const [formError, setFormError] = useState("");

  useEffect(() => {
    handledBinaryInput(inputBinary);
  }, [inputBinary]);

  function handledBinaryInput(binary: string) {
    if (!binary) {
      setFormError("");
      setOutputDecimal(undefined);
      return;
    }

    if (binary.length > 8) {
      setFormError(ERROR_BINARY_MAX_LENGTH);
      setOutputDecimal(undefined);
      return;
    }

    if (!BINARY_REGEX.test(binary)) {
      setFormError(ERROR_INVALID_BINARY);
      setOutputDecimal(undefined);
      return;
    }

    const decimal = convertBinaryToDecimal(binary);

    setFormError("");
    setOutputDecimal(decimal);
  }

  return (
    <>
      <Card>
        <CardBody>
          <FormControl isRequired isInvalid={!!formError}>
            <FormLabel>Binary</FormLabel>
            <Input
              value={inputBinary}
              type="text"
              placeholder="Please provide binary..."
              onChange={(event) => {
                setInputBinary(event.target.value);
              }}
            />
            <FormErrorMessage>{formError}</FormErrorMessage>
          </FormControl>
        </CardBody>
        <CardFooter>
          <Text fontWeight="bold">Decimal: {outputDecimal}</Text>
        </CardFooter>
      </Card>
    </>
  );
}
