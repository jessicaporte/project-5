import FavoriteButton from "@/components/FavoriteButton";
import {
  ArtPieceContainer,
  ArtPieceCard,
  StyledTitle,
} from "@/Styles/HomePageStyles";
import { NavButtons } from "@/components/NavButtons";

export default function FavoritesPage({ artPieces, favorites, setFavorites }) {
  const favoriteArtPieces = artPieces.filter(
    (
      piece // Filtro asi  las obras que están en favoritos
    ) => favorites.includes(piece.slug)
  );

  return (
    <>
      <div>
        <StyledTitle> 🎨 My Favorite Art Pieces</StyledTitle>
        <ArtPieceContainer>
          {favoriteArtPieces.map((piece) => (
            <ArtPieceCard key={piece.slug}>
              <FavoriteButton
                slug={piece.slug}
                favorites={favorites}
                setFavorites={setFavorites}
              />
              <img src={piece.imageSource} alt={piece.name} width={200} />
              <h2>{piece.name}</h2>
              <p>{piece.artist}</p>
            </ArtPieceCard>
          ))}
        </ArtPieceContainer>
        <NavButtons />
      </div>
    </>
  );
}
