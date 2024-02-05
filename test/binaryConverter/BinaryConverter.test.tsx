import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import BinaryConverter from "../../src/binaryConverter/BinaryConverter";

describe("App", () => {
  test("renders headline", () => {
    render(<BinaryConverter />);

    screen.debug();
  });
});
