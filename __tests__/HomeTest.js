import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../src/pages/index";

// We need tests!!!

test("Check for Getting Started Text", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Unofficial Docs")).toBeInTheDocument();
});