import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import BinaryConverter from "../../src/binaryConverter/BinaryConverter";
import {
  ERROR_BINARY_MAX_LENGTH,
  ERROR_INVALID_BINARY,
} from "../../src/binaryConverter/constants";

describe("BinaryConverter", () => {
  test("renders headline", async () => {
    render(<BinaryConverter />);

    const input = await screen.findByRole<HTMLInputElement>("textbox", {
      name: "Binary",
    });

    expect(input);
  });

  test("updates the binaryInput correctly", async () => {
    const INPUT_BINARY = "1010";

    render(<BinaryConverter />);

    const input = (await screen.findByRole("textbox", {
      name: "Binary",
    })) as HTMLInputElement;

    fireEvent.change(input, { target: { value: INPUT_BINARY } });

    expect(input.value).toBe(INPUT_BINARY);
  });

  const binaryScenarios = [
    { binary: "0", decimal: 0 },
    { binary: "1", decimal: 1 },
    { binary: "10", decimal: 2 },
    { binary: "01", decimal: 1 },
    { binary: "11001", decimal: 25 },
    { binary: "11111111", decimal: 255 },
  ];

  test.each(binaryScenarios)(
    "convertBinary($binary) -> $decimal",
    async ({ binary, decimal }) => {
      render(<BinaryConverter />);

      const input = (await screen.findByRole("textbox", {
        name: "Binary",
      })) as HTMLInputElement;

      fireEvent.change(input, { target: { value: binary } });

      const outputRegex = `Decimal:\\s${decimal}`;
      const output = await screen.findByText(new RegExp(outputRegex));

      expect(output).toBeVisible();
    }
  );

  test("handles invalid characters", async () => {
    const INPUT_BINARY = "ab";
    render(<BinaryConverter />);

    const input = (await screen.findByRole("textbox", {
      name: "Binary",
    })) as HTMLInputElement;

    fireEvent.change(input, { target: { value: INPUT_BINARY } });

    const output = await screen.findByText(new RegExp(ERROR_INVALID_BINARY));

    expect(output).toBeVisible();
  });

  test("handles too many characters", async () => {
    const INPUT_BINARY = "1010101010";
    render(<BinaryConverter />);

    const input = (await screen.findByRole("textbox", {
      name: "Binary",
    })) as HTMLInputElement;

    fireEvent.change(input, { target: { value: INPUT_BINARY } });

    const output = await screen.findByText(new RegExp(ERROR_BINARY_MAX_LENGTH));

    expect(output).toBeVisible();
  });
});
