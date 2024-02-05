import { BINARY_REGEX } from "./constants";

function convertBinaryToDecimal(binaryInput: string) {
  if (binaryInput === "") return NaN;
  if (!BINARY_REGEX.test(binaryInput)) return NaN;

  let decimalOutput = 0;

  for (let index = 0; index < binaryInput.length; index++) {
    const binaryCharacter = binaryInput[index];
    const binaryExponent = binaryInput.length - index - 1;
    const binaryValue = 2 ** binaryExponent;

    decimalOutput += parseInt(binaryCharacter) * binaryValue;
  }

  return decimalOutput;
}

export default convertBinaryToDecimal;
