import styled from "styled-components"; // Importa styled-components para poder usar estilos en JS

export const Container = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledLink = styled.a`
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
