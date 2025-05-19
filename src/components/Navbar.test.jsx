import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../contexts/CartContext";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders Home and Shop nav links", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <CartProvider>
          <Navbar />
        </CartProvider>
      </MemoryRouter>,
    );
    screen.debug();
    expect(screen.getByTestId("nav-home-link")).toBeInTheDocument();
    expect(screen.getByTestId("nav-shop-link")).toBeInTheDocument();
  });

  it("shows cart info on /shop route only", () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <CartProvider>
          <Navbar />
        </CartProvider>
      </MemoryRouter>,
    );

    expect(screen.getByText(/items/i)).toBeInTheDocument();
    expect(screen.getByText(/go to checkout/i)).toBeInTheDocument();
  });
});
