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
          <Login>
            <Link to="/login">
              <div>
                <span>
                  <ICON.FiArrowRightCircle />
                </span>
                <h4>Login</h4>
              </div>
            </Link>
          </Login>
        </Box>
      </Width>
    </Container>
  );
};
