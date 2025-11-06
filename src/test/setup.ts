import "@testing-library/jest-dom";
import { expect } from "vitest";
import * as axeMatchers from "vitest-axe/matchers";

expect.extend(axeMatchers);

// Mock IntersectionObserver for Framer Motion
class IntersectionObserverMock {
  observe = () => null;
  unobserve = () => null;
  disconnect = () => null;
}

global.IntersectionObserver = IntersectionObserverMock as any;

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
