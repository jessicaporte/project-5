import { useState, useEffect } from "react";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useState([]); //para que favorites z set puedan ser leidos en todas las paginas , asi funcionan los corayon en todas
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []; //para guardar y mantener los favs
    setFavorites(storedFavorites);
  }, []);

  // Guardar favoritos en localStorage cada vez que favorites cambie
  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
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
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={artPieces}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </>
  );
}
