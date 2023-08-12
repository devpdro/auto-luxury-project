import { ICON } from 'presentation/assets';

import { Container, Width, Box, Help, Login } from './Topbar-Styled';

export const Topbar = () => {
  return (
    <Container>
      <Width>
        <Box>
          <Help>
            <h4>Precisa de ajuda?</h4>
            <span>
              <ICON.BsTelephoneInboundFill />
            </span>
          </Help>
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
