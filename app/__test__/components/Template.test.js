import React from "react";
import { render } from "@testing-library/react";
import Template from "@/components/Templates";

describe("Template", () => {
  test("renders the XNav component", () => {
    const { getByText } = render(<Template />);
    const navComponent = getByText("Podcaster");
    expect(navComponent).toBeInTheDocument();
  });


  test("renders the children components", () => {
    const { getByTestId } = render(
      <Template>
        <div data-testid="child-component">Child Component</div>
      </Template>
    );
    const childComponent = getByTestId("child-component");
    expect(childComponent).toBeInTheDocument();
  });
});
