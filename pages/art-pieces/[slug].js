import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Uso useRouter para acceder a la URL
import useSWR from "swr"; // Uso SWR para hacer el fetching de datos
import {
  ArtPieceContainer,
  ArtPieceCard,
  StyledTitle,
  ButtonStyled,
} from "@/Styles/HomePageStyles";
import FavoriteButton from "@/components/FavoriteButton";
import ColorPalette from "@/components/PaletteColors";
import CommentInput from "@/components/CommentInput";
import { CommentsBox } from "@/Styles/HomePageStyles";

// Función fetcher para obtener datos de la API
const fetcher = (url) => fetch(url).then((res) => res.json());

const ArtPieceDetails = ({ favorites, setFavorites }) => {
  const router = useRouter();
  const { slug } = router.query; // Obtengo el slug de la URL para identificar la obra

  console.log("Slug desde la URL:", slug);

  const [comments, setComments] = useState([]); // 👈 PARA LOS COMENTSRIOS

  // 🚀 Recuperar comentarios del localStorage cuando el componente carga
  useEffect(() => {
    if (!slug) return;

    const storedComments = localStorage.getItem(`comments-${slug}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [slug]);

  // 📝 Agregar nuevo comentario y guardarlo
  const addComment = (text) => {
    const newComment = {
      text,
      date: new Date().toLocaleString(), // fecha y hora
    };
    const updatedComments = [...comments, newComment]; //COMMENTS contiene todos los comentarios que se han agregado hasta el momento.
    //newComment: Es el nuevo comentario que el usuario acaba de agregar.CON FECHAY HORA
    //[...]: Aquí estamos utilizando el operador spread (...)
    // para crear una copia del arreglo comments y agregarle el newComment al final.
    setComments(updatedComments); //updatedComments contiene los comentarios anteriores más el nuevo comentario.
    localStorage.setItem(`comments-${slug}`, JSON.stringify(updatedComments));
  }; //'comments-${slug}' asegurar los comentarios se guarden con una clave única por obra de arte.
  //JSON.stringify(updatedComments): localStorage solo puede almacenar cadenas de texto.
  // JSON.stringify() CONVIERTE el arreglo de comentarios ( objeto en JS) en una cadena de texto que puede ser almacenada.

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
          <p>
            <strong>Color:</strong>
          </p>
          <ColorPalette colors={artPiece.colors} />
          <ButtonStyled onClick={() => router.push("/art-pieces")}>
            Back
          </ButtonStyled>{" "}
          {/* 💬 Sección de comentarios */}
          <div style={{ marginTop: "2rem" }}>
            <CommentsBox>
              <h3>Comment</h3>
              <CommentInput addComment={addComment} />
              <ul>
                {comments.map((comment, index) => (
                  <li key={index}>
                    <strong>{comment.date}</strong>: {comment.text}
                  </li>
                ))}
              </ul>
            </CommentsBox>
          </div>
        </ArtPieceCard>
      </ArtPieceContainer>
    </div>
  );
};

export default ArtPieceDetails;
