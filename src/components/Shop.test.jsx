import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Shop from "../pages/Shop";
import { CartProvider } from "../contexts/CartContext";

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
      <MemoryRouter>
        <CartProvider>
          <Shop />
        </CartProvider>
      </MemoryRouter>,
    );

    // Loading state
    expect(screen.getByText(/loading products/i)).toBeInTheDocument();

    // Wait for products to load
    await waitFor(() => {
      expect(screen.getByText("Test Product 1")).toBeInTheDocument();
      expect(screen.getByText("Test Product 2")).toBeInTheDocument();
    });

    // Check that the heading renders
    expect(screen.getByRole("heading", { name: /shop/i })).toBeInTheDocument();

    // Check that Add to Cart buttons are present
    expect(screen.getAllByRole("button", { name: /add to cart/i }).length).toBe(
      2,
    );
  });
});
