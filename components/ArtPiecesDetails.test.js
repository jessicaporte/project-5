import "@testing-library/jest-dom"; // Para usar las aserciones de jest-dom como toBeInTheDocument
import ArtPieceDetails from "@/pages/art-pieces/[slug]";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import useSWR from "swr";

// Mocks
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("swr");

describe("ArtPieceDetails", () => {
  test("debe renderizar los detalles de la obra correctamente cuando se obtienen los datos", () => {
    // Simular router.query para un slug específico
    useRouter.mockReturnValue({
      query: { slug: "orange-red-and-green" },
    });

    // Simular los datos devueltos por SWR
    const mockData = [
      {
        slug: "orange-red-and-green",
        artist: "Steve Johnson",
        name: "Orange Red and Green Abstract Painting",
        imageSource:
          "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
        year: "2018",
        genre: "Abstract Painting",
        colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
      },
    ];

    useSWR.mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
    });

    render(<ArtPieceDetails favorites={[]} setFavorites={() => {}} />);

    // Verificar que los detalles de la obra se renderizan correctamente
    expect(
      screen.getByText(/Orange Red and Green Abstract Painting/i)
    ).toBeInTheDocument();
    expect(screen.getByText("Steve Johnson")).toBeInTheDocument();
    expect(screen.getByText("2018")).toBeInTheDocument();
    expect(screen.getByText("Abstract Painting")).toBeInTheDocument();

    // Verificar si la imagen se renderiza correctamente
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
    );
  });

  test("debe mostrar el mensaje de carga mientras se obtienen los datos", () => {
    useSWR.mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    render(<ArtPieceDetails favorites={[]} setFavorites={() => {}} />);

    // Verificar que el mensaje de carga se muestra
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("debe mostrar un mensaje de error si la obtención de los datos falla", () => {
    useSWR.mockReturnValue({
      data: null,
      error: { message: "Network Error" },
      isLoading: false,
    });

    render(<ArtPieceDetails favorites={[]} setFavorites={() => {}} />);

    // Verificar que el mensaje de error se muestra
    expect(
      screen.getByText("Error loading art piece details: Network Error")
    ).toBeInTheDocument();
  });

  test("debe manejar el caso de datos vacíos correctamente", () => {
    useSWR.mockReturnValue({
      data: [],
      error: null,
      isLoading: false,
    });

    render(<ArtPieceDetails favorites={[]} setFavorites={() => {}} />);

    // Verificar que el mensaje adecuado se muestra cuando no hay datos
    expect(screen.getByText("Obra de arte no encontrada.")).toBeInTheDocument();
  });

  test('debe mostrar el botón "Back"', () => {
    const mockData = [
      {
        slug: "orange-red-and-green",
        artist: "Steve Johnson",
        name: "Orange Red and Green Abstract Painting",
        imageSource:
          "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
        year: "2018",
        genre: "Abstract Painting",
        colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
      },
    ];

    useSWR.mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
    });

    render(<ArtPieceDetails favorites={[]} setFavorites={() => {}} />);

    // Verificar que el botón "Back" esté presente en el documento
    expect(screen.getByText("Back")).toBeInTheDocument();
  });
});
