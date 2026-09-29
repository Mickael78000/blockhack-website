import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ToolsSection } from "./index";

describe("ToolsSection", () => {
  it("renders the section heading", () => {
    render(<ToolsSection />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /un accompagnement clair, utile au quotidien/i,
      }),
    ).toBeInTheDocument();
  });

  it("shows the video loading placeholder before the file is in view", () => {
    render(<ToolsSection />);

    expect(screen.getByText(/chargement/i)).toBeInTheDocument();
  });
});
