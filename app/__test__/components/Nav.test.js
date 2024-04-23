import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "@/components/Nav";
import { usePathname } from "next/navigation";

// Mock de usePathname
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Nav", () => {
  test('renders the H1 component with title "Podcaster" when path is home', () => {
    usePathname.mockReturnValue("/");
    render(<Nav />);
    const h1Component = screen.getByText(/Podcaster/i);
    expect(h1Component).toBeInTheDocument();
  });

  test('renders the H1 component with title "Podcaster" wrapped in a Link when path is not home', () => {
    usePathname.mockReturnValue("/some-path");
    render(<Nav />);
    const linkElement = screen.getByRole("link");
    const h1Component = screen.getByText(/Podcaster/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
    expect(h1Component).toBeInTheDocument();
  });

  test('renders the H1 component with title "Podcaster" when path is ROUTES.router.podcast', () => {
    usePathname.mockReturnValue("/podcast");
    render(<Nav />);
    const h1Component = screen.getByText(/Podcaster/i);
    expect(h1Component).toBeInTheDocument();
  });
});
