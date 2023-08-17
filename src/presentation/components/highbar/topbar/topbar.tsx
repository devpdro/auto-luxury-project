import { Link } from 'react-router-dom';

import { ICON } from 'presentation/assets';

import { Container, Width, Box, Navbar, Login } from './TopbarStyles';

export const Topbar = () => {
  return (
    <Container>
      <Width>
        <Box>
          <Navbar>
            <Link to="/">
              <li>Início</li>
            </Link>
            <Link to="/reservas">
              <li>Reservas</li>
            </Link>
            <Link to="/localizacao">
              <li>Localização</li>
            </Link>
            <Link to="/contato">
              <li>Contato</li>
            </Link>
          </Navbar>
          <Login>
            <Link to="/conectar">
              <div>
                <span>
                  <ICON.FiArrowRightCircle />
                </span>
                <h4>Entrar</h4>
              </div>
            </Link>
          </Login>
        </Box>
      </Width>
    </Container>
  );
};
