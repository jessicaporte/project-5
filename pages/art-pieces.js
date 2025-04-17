import useSWR from "swr";
import { NavButtons } from "@/components/NavButtons";
import FavoriteButton from "@/components/FavoriteButton";
import {
  StyledLink,
  ArtPieceContainer,
  ArtPieceCard,
  StyledTitle,
} from "@/Styles/HomePageStyles";

// Crear un componente de enlace sin subrayado

//en esta se descarga el api y se devuelve la base de la web, imagen nombre de artista y nombre del cuadro en lista
const URL = `https://example-apis.vercel.app/api/art`;

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Fetch error: ${response.status}`);
  }
  return response.json();
};

export default function HomePage({ favorites, setFavorites }) {
  // Recibe favoritos y setFavorites como props no en la funcion, asi es mas global
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading) return <p> Loading... </p>;
  if (error) return <p>error</p>;

  return (
    <div>
      {" "}
      <>
        <StyledTitle> 🎨 ART GALLERY</StyledTitle>
        <ArtPieceContainer data-testid="art-piece-container">
          {data.map((artPiece) => (
            <ArtPieceCard key={artPiece.slug} style={{ position: "relative" }}>
              {/* Botón con corazón funcional EN CADA IMAGEN */}
              {/* ACA LLAMO AL FavoriteButton con sus props */}
              <FavoriteButton
                slug={artPiece.slug}
                favorites={favorites} // Se pasa el estado global
                setFavorites={setFavorites} //se pasa a la funcion global
              />

              {/* con esto envuelvo la imagen y los detalles con un Link que me lleva a la página de detalles de la obra osea artpiecedetails */}
              <StyledLink href={`/art-pieces/${artPiece.slug}`}>
                <img
                  src={artPiece.imageSource}
                  alt={artPiece.name}
                  width={200}
                />
                <h2>{artPiece.name}</h2>
                <p>{artPiece.artist}</p>
              </StyledLink>
            </ArtPieceCard>
          ))}
        </ArtPieceContainer>

        <NavButtons />
      </>
    </div>
  );
}
