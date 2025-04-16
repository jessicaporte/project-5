import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Asegúrate de tener esto para toBeInTheDocument
import { NavButtons } from "./NavButtons";
// Si usas Next.js y Link, es importante este mock
jest.mock("next/link", () => {
  return {
    __esModule: true,
    default: ({ href, children }) => <a href={href}>{children}</a>,
  };
});

//navi botton presentes
test("verificar que los enlaces de navegación están presentes", () => {
  render(<NavButtons />);
  const spotlightLink = screen.getByRole("link", { name: /Spotlight/i });
  const artPiecesLink = screen.getByRole("link", { name: /Art Pieces/i });
  const favoritesLink = screen.getByRole("link", { name: /Favorites/i });

  expect(spotlightLink).toBeInTheDocument();
  expect(artPiecesLink).toBeInTheDocument();
  expect(favoritesLink).toBeInTheDocument();
});

//// Verifica que el enlace a Spotlight redirige correctamente
test("los enlaces tienen los href correctos", () => {
  render(<NavButtons />);
  const spotlightLink = screen.getByText(/Spotlight/i);
  const artPiecesLink = screen.getByText(/Art Pieces/i);
  const favoritesLink = screen.getByText(/Favorites/i);

  expect(spotlightLink.closest("a")).toHaveAttribute("href", "/Spotlight");
  expect(artPiecesLink.closest("a")).toHaveAttribute("href", "/art-pieces");
  expect(favoritesLink.closest("a")).toHaveAttribute("href", "/favorites");
});
