/*import { useState } from "react";

// El Input Gestiona el texto que se ingresa y lo envía cuando se hace clic en el botón "Enviar"
export default function CommentInput({ addComment }) {
  const [commentText, setCommentText] = useState(""); // Almacena el comentario y los cambios de estado

  // Función que maneja el cambio en el campo de texto
  const handleChange = (event) => {
    setCommentText(event.target.value); // Actualiza el texto del comentario
  };

  // Función que maneja el envío del comentario
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    if (commentText.trim() !== "") {
      addComment(commentText); // Llama a la función para agregar el comentario
      setCommentText(""); // Limpia el campo de texto después de enviar
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={commentText}
        onChange={handleChange}
        placeholder="Escribe tu comentario..."
        rows="4"
        cols="50"
        required // Se asegura de que el textarea no esté vacío
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
*/
