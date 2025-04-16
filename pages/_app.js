import { useState, useEffect } from "react";
import GlobalStyle from "../styles";
import { PageContainer } from "@/Styles/HomePageStyles";

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useState([]); // Estado para guardar los favoritos
  const [artPieces, setArtPieces] = useState([]); // Estado para guardar la lista de todas las obras de arte que obtendrás desde una API.

  useEffect(() => {
    //Objetivo: Obtener los favoritos previamente guardados para que el usuario vea su lista de favoritos cuando recarga la página.
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []; //para guardar y mantener los favs, []Si no hay nada en el localStorage, para evitar errores.
    setFavorites(storedFavorites);
  }, []); //se ejecuta una sola vez cuando el componente App se monta

  useEffect(() => {
    //Objetivo: Asegurarse de que los cambios en los favoritos (añadir o eliminar) se reflejen y se persistan en localStorage.
    if (favorites.length > 0) {
      //si el array favorites tiene elementos o no.
      localStorage.setItem("favorites", JSON.stringify(favorites)); //convierte el array de favoritos a una cadena de texto .. guarda el array favorites en localStorage.
    }
  }, [favorites]);

  useEffect(() => {
    //para guardar en favoritos
    async function fetchArtPieces() {
      try {
        const response = await fetch("https://example-apis.vercel.app/api/art");
        const data = await response.json();
        setArtPieces(data);
      } catch (error) {
        console.error("Error fetching art pieces:", error);
      }
    }

    fetchArtPieces();
  }, []);

  return (
    <PageContainer>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={artPieces} //Pasa artPieces a todas las páginas
        favorites={favorites} // Pasa favorites a todas las páginas
        setFavorites={setFavorites} // Pasa setFavorites para modificar los favoritos
      />
    </PageContainer>
  );
}
