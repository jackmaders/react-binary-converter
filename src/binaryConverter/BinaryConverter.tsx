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
    if (!inputBinary) {
      setFormError("");
      setOutputDecimal(undefined);
      return;
    }

    if (inputBinary.length > 8) {
      setFormError(ERROR_BINARY_MAX_LENGTH);
      setOutputDecimal(undefined);
      return;
    }

    if (!BINARY_REGEX.test(inputBinary)) {
      setFormError(ERROR_INVALID_BINARY);
      setOutputDecimal(undefined);
      return;
    }

    const decimal = convertBinaryToDecimal(inputBinary);

    setFormError("");
    setOutputDecimal(decimal);
  }, [inputBinary]);

  return (
    <>
      <Card>
        <CardBody>
          <FormControl isRequired isInvalid={!!formError}>
            <FormLabel>Binary</FormLabel>
            <Input
              value={inputBinary}
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
