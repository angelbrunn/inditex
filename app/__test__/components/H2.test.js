import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import H2 from "@/components/Atoms/H2";

describe("H2", () => {
  const title = "Test Title";

  test("renders the title correctly", () => {
    const { getByText } = render(<H2 title={title} />);
    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders a header correctly", () => {
    const { getByRole } = render(<H2 title={title} />);
    const header = getByRole("heading");
    expect(header).toHaveTextContent(title);
  });
});
