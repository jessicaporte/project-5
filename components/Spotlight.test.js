import { render, screen } from "@testing-library/react"; //necesita renderizar el componente, y verificar que algo esté en pantalla.
import SpotlightPage from "../pages/Spotlight";

import useSWR from "swr";

// Mockear useSWR, osea un falso swr para poder testear
jest.mock("swr");

//spotlight
// 1

test("if (isLoading) aparece return: Loading...", () => {
  // Simular que está cargando
  useSWR.mockReturnValue({
    data: null,
    error: null,
    isLoading: true,
  });

  render(<SpotlightPage favorites={[]} setFavorites={() => {}} />);
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
  render(<SpotlightPage favorites={[]} setFavorites={() => {}} />);
  const errorTest = screen.getByText("error");
  expect(errorTest).toBeInTheDocument();
});

//3
test("if error data o data.length es igual a 0 return: No hay obras disponibles", () => {
  useSWR.mockReturnValue({
    // Simulamos la respuesta del hook useSWR como si estuviéramos en una situación real: no hay obras de arte,
    //no hubo errores y ya terminó de cargar
    data: [], // <- caso de data vacío
    error: null,
    isLoading: false,
  });

  render(<SpotlightPage favorites={[]} setFavorites={() => {}} />);
  const ceroDataTest = screen.getByText("No hay obras disponibles");
  expect(ceroDataTest).toBeInTheDocument();
});

//4
test("testear el resultado: cuando hay datos, el componente renderiza una obra aleatoria correctamente.", () => {
  const mockData = [
    {
      slug: "orange-red-and-green",
      artist: "Steve Johnson",
      name: "Orange Red and Green Abstract Painting",
      imageSource:
        "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
      year: "2018",
      genre: "Abstract Painting",
    },
  ];
  useSWR.mockReturnValue({
    data: mockData,
    error: null,
    isLoading: false,
  });
  render(<SpotlightPage favorites={[]} setFavorites={() => {}} />);
  // Verifica que se renderice la imagen
  const imageTest = screen.getByAltText(
    //"texto alternativo" (alt text) y se usa por accesibilidad, para describir imágenes
    "Orange Red and Green Abstract Painting"
  );
  expect(imageTest).toBeInTheDocument();
  expect(imageTest).toHaveAttribute(
    "src",
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
  ); //Esto verifica que un elemento tenga un atributo específico.

  // Verifica el título y artista
  expect(
    screen.getByText("Orange Red and Green Abstract Painting") //para verificar que tmb aparece el nombre no solo la imagen
  ).toBeInTheDocument();
  expect(screen.getByText("Steve Johnson")).toBeInTheDocument();
});
