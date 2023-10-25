import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";

test("renders Header component without errors", () => {
  render(<Header />);
});
