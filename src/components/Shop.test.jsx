import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Shop from "../pages/Shop";
import { CartProvider } from "../contexts/CartContext";
import Navbar from "./Navbar";

const mockProducts = [
  {
    id: 1,
    title: "Test Product 1",
    price: 29.99,
    image: "https://example.com/image1.jpg",
  },
  {
    id: 2,
    title: "Test Product 2",
    price: 49.99,
    image: "https://example.com/image2.jpg",
  },
];

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockProducts),
    }),
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Shop Page", () => {
  it("renders the Shop page title and products", async () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <CartProvider>
          <Navbar />
          <Shop />
        </CartProvider>
      </MemoryRouter>,
    );

    await waitFor(() =>
      expect(screen.getByText(/Test Product 1/i)).toBeInTheDocument(),
    );

    const incrementBtn = screen.getAllByRole("button", { name: "+" })[0];
    await userEvent.click(incrementBtn);

    const addToCartBtn = screen.getAllByRole("button", {
      name: /add to cart/i,
    })[0];
    await userEvent.click(addToCartBtn);

    await waitFor(() => {
      expect(screen.getByText(/2 items/i)).toBeInTheDocument();
    });
  });
});
