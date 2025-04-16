import { render, screen } from "@testing-library/react";
import HomePage from "@/pages/art-pieces";
import useSWR from "swr";

// Mockear useSWR, osea un falso swr para poder testear
jest.mock("swr");

test("if (isLoading) aparece return: Loading...", () => {
  // Simular que está cargando
  useSWR.mockReturnValue({
    data: null,
    error: null,
    isLoading: true,
  });

  render(<HomePage favorites={[]} setFavorites={() => {}} />);
  const loadingTest = screen.getByText("Loading...");
  expect(loadingTest).toBeInTheDocument();
});

//2
test("if (error) return : error", () => {
  // Simular un error
  useSWR.mockReturnValue({
    data: null,
    error: true,
    isLoading: false,
  });
  render(<HomePage favorites={[]} setFavorites={() => {}} />);
  const errorTest = screen.getByText("error");
  expect(errorTest).toBeInTheDocument();
});

//3
test("el titulo este presente", () => {
  useSWR.mockReturnValue({
    data: [
      {
        slug: "orange-red-and-green",
        artist: "Steve Johnson",
        name: "Orange Red and Green Abstract Painting",
        imageSource:
          "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
        year: "2018",
        genre: "Abstract Painting",
      },
    ],
    error: null,
    isLoading: false,
  });

  render(<HomePage favorites={[]} setFavorites={() => {}} />);
  const titleTest = screen.getByText("🎨 ART GALLERY");
  expect(titleTest).toBeInTheDocument();

  // Verifica que el contenedor de las piezas de arte esté presente
  const artPieceContainer = screen.getByTestId("art-piece-container"); //tenia error con "region" asi que en
  // <ArtPieceContainer use data-testid="art-piece-container">
  expect(artPieceContainer).toBeInTheDocument();
});

//4 imagen
test("muestra una imagen con el alt correspondiente", () => {
  useSWR.mockReturnValue({
    data: [
      {
        slug: "orange-red-and-green",
        artist: "Steve Johnson",
        name: "Orange Red and Green Abstract Painting",
        imageSource:
          "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
        year: "2018",
        genre: "Abstract Painting",
      },
    ],
    error: null,
    isLoading: false,
  });
  render(<HomePage favorites={[]} setFavorites={() => {}} />);
  const image = screen.getByAltText("Orange Red and Green Abstract Painting"); //Alt porque es una imagen
  expect(image).toBeInTheDocument();
});

//5 h2 nombre de la obra
test("ver que este el <h2> este presente osea el nombre de la obra", () => {
  useSWR.mockReturnValue({
    data: [
      {
        slug: "orange-red-and-green",
        artist: "Steve Johnson",
        name: "Orange Red and Green Abstract Painting",
        imageSource:
          "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
        year: "2018",
        genre: "Abstract Painting",
      },
    ],
    error: null,
    isLoading: false,
  });

  render(<HomePage favorites={[]} setFavorites={() => {}} />);
  const h2Test = screen.getByText("Orange Red and Green Abstract Painting");
  expect(h2Test).toBeInTheDocument();
});

//6 nombre del artista
test("ver que el nombre del artista esté presente", () => {
  useSWR.mockReturnValue({
    data: [
      {
        slug: "orange-red-and-green",
        artist: "Steve Johnson",
        name: "Orange Red and Green Abstract Painting",
        imageSource:
          "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
        year: "2018",
        genre: "Abstract Painting",
      },
    ],
    error: null,
    isLoading: false,
  });

  render(<HomePage favorites={[]} setFavorites={() => {}} />);
  const artistNameTest = screen.getByText("Steve Johnson");
  expect(artistNameTest).toBeInTheDocument();
});
//7 boton favoritos
test("ver que el botón de favoritos esté presente", () => {
  useSWR.mockReturnValue({
    data: [
      {
        slug: "orange-red-and-green",
        artist: "Steve Johnson",
        name: "Orange Red and Green Abstract Painting",
        imageSource:
          "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
        year: "2018",
        genre: "Abstract Painting",
        colors: "Red, Green, Orange",
      },
    ],
    error: null,
    isLoading: false,
  });
  render(<HomePage favorites={[]} setFavorites={() => {}} />);
  const favoriteButton = screen.getByRole("button");
  expect(favoriteButton).toBeInTheDocument();
});
