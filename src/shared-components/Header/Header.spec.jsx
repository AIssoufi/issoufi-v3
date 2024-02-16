import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";

describe("Header", () => {
  it("should render", () => {
    render(
      <Router>
        <Header testId="header" />
      </Router>
    );
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
});
