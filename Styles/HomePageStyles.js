import styled from "styled-components";

export const StyledLink = styled.a`
  text-decoration: none; /* Esto quita el subrayado */
  color: inherit; /* Esto mantiene el color original del texto */
`;

export const ArtPieceContainer = styled.div`
  display: flex; /* Usar Flexbox */
  flex-wrap: wrap; /* Permite que los elementos se muevan al siguiente renglón cuando no hay suficiente espacio */
  gap: 20px; /* Espacio entre los elementos */
  justify-content: center; /* Alineación centrada de los elementos */
`;

export const ArtPieceCard = styled.div`
  width: 100%;
  max-width: 300px;
  text-align: center;
  border: 4px solid #ddd;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 1rem auto;
  position: relative;
  box-sizing: border-box;

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto 12px;
    border-radius: 8px;
  }
  &:hover {
    transform: scale(1.05); /* Agranda la tarjeta al pasar el mouse */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Aumenta la sombra para el efecto de hover */
  }
`;

export const StyledTitle = styled.h1`
  text-align: center;
  text-decoration: underline;
  border-bottom: 3px solid #e30b5d;
  padding-bottom: 10px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  font-family: "Impact", fantasy;
  color: #4b0012;
  background-color: #f5f5f5;
  border-radius: 50%;
`;

export const ButtonStyled = styled.button`
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-top: 20px;

  padding: 10px 20px;
  font-size: 16px;
  font-family: "Impact", fantasy;

  background-color: #ffddee;
  color: #4b0012;
  text-decoration: none; /* quita el subrayado */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #e30b5d;
    color: white;
  }
`;
export const CommentsBox = styled.div`
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #ccc;
  text-align: left;
  word-wrap: break-word; // 💥 Esto es lo más importante
  overflow-wrap: break-word; // Alternativa para compatibilidad
  max-width: 100%; // Asegura que se ajuste al contenedor padre
  white-space: pre-wrap; // Mantiene saltos de línea y respeta espacios

  textarea {
    width: 100%;
    border-radius: 5px;
    padding: 6px;
    resize: none;
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  li {
    margin-top: 10px;
    background-color: #f3f3f3;
    padding: 8px;
    border-radius: 5px;
  }

  h3 {
    margin-bottom: 10px;
  }

  strong {
    color: #e30b5d;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-family: "Impact", fantasy;

  background-color: #ffddee;
  color: #4b0012;
  text-decoration: none; /* quita el subrayado */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #e30b5d;
    color: white;
  }
`;
export const BackgroundGradient = styled.div`
  position: fixed;
  inset: -150px;
  background: ${({ colors }) =>
    `linear-gradient(170deg, ${colors.join(", ")})`};
  z-index: -2;
  filter: blur(100px);
  pointer-events: none; // importante para que no interfiera con clics
`;
