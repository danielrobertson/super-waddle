import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  test("renders the button with the correct label", () => {
    const { getByText } = render(<Button>Click Me</Button>);

    expect(getByText("Click Me")).toBeInTheDocument();
  });

  test("handles onPress event", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onPress={handleClick}>Click Me</Button>
    );

    fireEvent.click(getByText("Click Me"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
