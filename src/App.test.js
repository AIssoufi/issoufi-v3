import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render App component", () => {
    render(<App />);
    const app = screen.getByTestId("app");
    expect(app).toBeInTheDocument();
  });
});
