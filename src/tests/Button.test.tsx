import "@testing-library/jest-dom";
import Button from "../components/Button";
import { render } from "@testing-library/react";

describe("Button", () => {
  it("renders text", () => {
    // Arrange
    const text = "Test Text";
    const button = {
      onClick: () => console.log('Clicked')
    }
    const { getByText } = render(<Button button={button} text={text} isLoading={false}></Button>);

    // Act
    const titleElement = getByText(text);

    // Assert
    expect(titleElement).toBeInTheDocument();
  });
});