import Link from "next/link";
import { Container, StyledLink } from "@/Styles/StyledNavButtons";

export function NavButtons() {
  return (
    <Container>
      <StyledLink href="/Spotlight">Spotlight</StyledLink>
      <StyledLink href="/art-pieces">Art pieces</StyledLink>
      <StyledLink href="/favorites">Favorites </StyledLink>
    </Container>
  );
}

// Exporta el componente para poder usarlo en otras páginas
