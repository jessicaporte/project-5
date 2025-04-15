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
