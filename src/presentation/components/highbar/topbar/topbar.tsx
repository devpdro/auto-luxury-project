import { ICON } from 'presentation/assets';

import { Container, Width, Box, Navbar, Login } from './TopbarStyles';

export const Topbar = () => {
  return (
    <Container>
      <Width>
        <Box>
          <Navbar>
            <li>Home</li>
            <li>Localização</li>
            <li>Contato</li>
          </Navbar>
          <Login>
            <div>
              <span>
                <ICON.FiArrowRightCircle />
              </span>
              <h4>Conectar</h4>
            </div>
            <div>
              <span>
                <ICON.MdOutlinePerson />
              </span>
              <h4>Cadastrar</h4>
            </div>
          </Login>
        </Box>
      </Width>
    </Container>
  );
};
