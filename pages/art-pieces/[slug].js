import { useRouter } from "next/router"; // Uso useRouter para acceder a la URL
import useSWR from "swr"; // Uso SWR para hacer el fetching de datos
import {
  StyledLink,
  ArtPieceContainer,
  ArtPieceCard,
  StyledTitle,
  ButtonStyled,
} from "@/Styles/HomePageStyles";
import FavoriteButton from "@/components/FavoriteButton";

// Función fetcher para obtener datos de la API
const fetcher = (url) => fetch(url).then((res) => res.json());

const ArtPieceDetails = ({ favorites, setFavorites }) => {
  const router = useRouter();
  const { slug } = router.query; // Obtengo el slug de la URL para identificar la obra

  console.log("Slug desde la URL:", slug);

  //  SWR para obtener los detalles de la obra
  const { data, error, isLoading } = useSWR(
    slug ? `https://example-apis.vercel.app/api/art` : null,
    fetcher
  );

  if (isLoading) return <p>Loading...</p>; // Si está cargando
  if (error) return <p>Error loading art piece details: {error.message}</p>; // Si hubo un error

  if (!data) {
    return <p>No information about the artwork was found</p>;
  }
  // Busca la obra de arte que coincide con el slug
  const artPiece = data.find((piece) => piece.slug === slug);

  if (!artPiece) {
    return <p>Obra de arte no encontrada.</p>;
  }

  return (
    <div>
      {/* aca detalles de la obra de arte */}

      <StyledTitle>{artPiece.name}</StyledTitle>
      <ArtPieceContainer>
        <ArtPieceCard style={{ position: "relative" }}>
          <FavoriteButton
            slug={artPiece.slug}
            favorites={favorites} // Se pasa el estado global
            setFavorites={setFavorites} //se pasa a la funcion global
          />
          <img src={artPiece.imageSource} alt={artPiece.name} width={400} />
          <p>
            <strong>Artist:</strong> {artPiece.artist}
          </p>
          <p>
            <strong>Year:</strong> {artPiece.year}
          </p>
          <p>
            <strong>Genre:</strong> {artPiece.genre}
          </p>
          <ButtonStyled onClick={() => router.push("/art-pieces")}>
            Back
          </ButtonStyled>{" "}
        </ArtPieceCard>
      </ArtPieceContainer>
    </div>
  );
};

export default ArtPieceDetails;
