import { Container, Width, Box } from './navigationbar-styled';

export const NavigationBar = () => {
  return (
    <Container>
      <Width>
        <Box>
          <li>Início</li>
          <li>Carros</li>
        </Box>
      </Width>
    </Container>
  );
};
