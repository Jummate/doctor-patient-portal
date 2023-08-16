import App from "./App";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

test("should render h1", () => {
  render(<App />);
  const hOneElem = screen.getByRole("heading");
  expect(hOneElem).toBeDefined();
});
