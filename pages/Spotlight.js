import useSWR from "swr";
import { NavButtons } from "@/components/NavButtons";
import {
  ArtPieceContainer,
  ArtPieceCard,
  StyledTitle,
  PageContainer,
} from "@/Styles/HomePageStyles";
import FavoriteButton from "@/components/FavoriteButton";

//es la primer pagina donde solo se ve un cuadro aleatorio, vuelvo a usar el API, para descargar todos los cuadros y
// lueggo funcion de eleccion aleatoria

const URL = `https://example-apis.vercel.app/api/art`;

const fetcher = (URL) =>
  fetch(URL).then((response) => {
    //cargando el api
    if (!response.ok) {
      throw new Error("error!");
    }
    return response.json();
  });

function getRandom(dataLength) {
  //// Define la función `getRandom`, que toma como parámetro `dataLength`
  // (el número de elementos en el array) y retorna un índice aleatorio dentro de ese rango
  return Math.floor(Math.random() * dataLength); // Devuelve un número aleatorio entero entre 0 y `dataLength - 1`,
  // con esto me garantiz que el índice generado sea válido dentro del rango
}

export default function SpotlightPage({ favorites, setFavorites }) {
  //asi los llamo desde favoritebutton z lo uso aca tmb
  const { data, error, isLoading } = useSWR(URL, fetcher); // Usa el hook `useSWR` para obtener los datos de la API

  if (isLoading) return <p> Loading... </p>;
  if (error) return <p>error</p>;

  if (!data || data.length === 0) return <p>No hay obras disponibles</p>;

  // Elegir una obra aleatoria
  const randomIndex = getRandom(data.length); //llamo a la funcion de arriba getrandom donde ya multiplique, el length devuelve el número total de elementos osea obras de arte
  const randomArtPiece = data[randomIndex]; //accediendo al elemento en el índice randomIndex del arreglo data. el random este es la formula de arriba, y aca se almacena esa obra random

  if (!randomArtPiece) return <p>No hay obra para mostrar</p>;

  return (
    <div>
      {" "}
      <PageContainer>
        <StyledTitle>🎨ART GALLERY</StyledTitle>
        <ArtPieceContainer>
          <ArtPieceCard
            key={randomArtPiece.slug}
            style={{ position: "relative" }}
          >
            {/* El botón de favoritos ahora está dentro del contenedor de la obra de arte */}
            <FavoriteButton
              slug={randomArtPiece.slug} // El identificador único de la obra
              favorites={favorites} // Lista de favoritos
              setFavorites={setFavorites} // Función para actualizar los favoritos
            />
            <img
              src={randomArtPiece.imageSource}
              alt={randomArtPiece.name}
              width={200}
            />
            <h2>{randomArtPiece.name}</h2>
            <p>{randomArtPiece.artist}</p>
          </ArtPieceCard>
        </ArtPieceContainer>

        <NavButtons />
      </PageContainer>{" "}
    </div>
  );
}
