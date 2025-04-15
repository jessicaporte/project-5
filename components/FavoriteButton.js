const FavoriteButton = ({ slug, favorites = [], setFavorites }) => {
  // Función para agregar o quitar el arte de favoritos

  const toggleFavorite = (slug) => {
    // Si ya está en favoritos, lo eliminamos; si no, lo agregamos
    setFavorites(
      (
        prevFavorites //recibo el valor actual de la lista prev para decidir cómo lo vamos a modificar.
      ) =>
        prevFavorites.includes(slug) //revisamos slug osea identificador único si ya está en la lista de favoritos.
          ? prevFavorites.filter((fav) => fav !== slug) //crea una nueva lista con todos los elementos menos el que tiene ese slug.
          : // "Si esa obra ya está marcada como favorita, la saco de la lista usando .filter() para crear una nueva lista que no la incluya."
            [...prevFavorites, slug] //"Si no está en favoritos, entonces la agrego, usando [...prevFavorites, slug], que copia todo lo que ya había y le suma la nueva obra."
    );
  };
  return (
    <button
      onClick={() => toggleFavorite(slug)}
      //za va directo el toggle sin usar el slug, porque este es un prop ahora (antes era (artPiece.slug))
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "none",
        border: "none",
        cursor: "pointer",

        fontSize: "24px",
        zIndex: 1,
      }}
    >
      {favorites.includes(slug) ? ( //el estado creado useState([])  lista de slugs (identificadores únicos)
        //artPiece.slug  Es el id  único de la obra- "¿La lista de favoritos contiene este slug (esta obra)?" (si):(no)

        // Corazón lleno
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="#4b0012"
          stroke="#ffddee"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ) : (
        // Corazón vacío
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="#ffddee"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      )}
    </button>
  );
};

export default FavoriteButton;
