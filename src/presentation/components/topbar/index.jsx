import { ICON } from 'presentation/assets';

import { Container } from './topbarStyled';

export const Topbar = () => {
  return (
    <Container>
      <div>
        <h4>
          Precisa de ajuda? <ICON.BsTelephoneInboundFill />
        </h4>
      </div>
    </Container>
  );
};
