import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ToolsSection } from "./index";

describe("ToolsSection", () => {
  it("renders the main headline and supporting copy", () => {
    render(<ToolsSection />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /proven tooling for dependable mainnet launches/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /blockhack.io builds and shares security tooling born from real audits/i,
      ),
    ).toBeInTheDocument();
  });

  it("lists all tool cards with their titles", () => {
    render(<ToolsSection />);

    expect(screen.getByRole("heading", { name: /^foundry$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /solidity \(foundry\)/i })).toBeInTheDocument();
  });

  it("shows the trusted by heading and embeds the showcase video", () => {
    render(<ToolsSection />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /trusted to keep launches incident-free/i,
      }),
    ).toBeInTheDocument();

    const video = screen.getByTestId("trusted-video") as HTMLVideoElement;
    expect(video).toHaveAttribute("src", "/videos/trusted-by.mp4");
    expect(video.muted).toBe(true);
    expect(video.loop).toBe(true);
    expect(video.autoplay).toBe(true);
  });
});
