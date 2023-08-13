import { ICON } from 'presentation/assets';

import { Container, Width, Box, Navbar, Login } from './TopbarStyles';

export const Topbar = () => {
  return (
    <Container>
      <Width>
        <Box>
          <Navbar>
            <li>Início</li>
            <li>Carros</li>
            <li>Sobre</li>
          </Navbar>
          <Login>
            <div>
              <span>
                <ICON.FiArrowRightCircle />
              </span>
              <h4>Login</h4>
            </div>
            <div>
              <span>
                <ICON.MdOutlinePerson />
              </span>
              <h4>Register</h4>
            </div>
          </Login>
        </Box>
      </Width>
    </Container>
  );
};
