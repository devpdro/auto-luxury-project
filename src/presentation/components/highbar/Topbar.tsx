import { Link } from 'react-router-dom';

import { Container, Width, Box, Navbar } from './TopbarStyles';

export const Topbar = () => {
  return (
    <Container>
      <Width>
        <Box>
          <Navbar>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/reservas">
              <li>Reservas</li>
            </Link>
            <Link to="/location">
              <li>Localização</li>
            </Link>
            <Link to="/contato">
              <li>Contato</li>
            </Link>
          </Navbar>
        </Box>
      </Width>
    </Container>
  );
};
