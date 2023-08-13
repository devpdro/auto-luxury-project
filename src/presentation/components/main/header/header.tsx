import { IMAGES } from 'presentation/assets';

import {
  Container,
  Width,
  Box,
  Text,
  Input,
  Details,
  Reserve,
} from './HeaderStyles';

export const Header = () => {
  return (
    <Container>
      <Width>
        <Box>
          <Text>
            <h1>Porsche 911 Carrera</h1>
            <h4>Reserve agora e sinta a emoção</h4>
          </Text>
          <Input>
            <Details type="submit" value="Exibir detalhes" />
            <Reserve type="submit" value="Reservar agora" />
          </Input>
          <div>
            <img src={IMAGES.POPULAR5} alt="Porsche" />
          </div>
        </Box>
      </Width>
    </Container>
  );
};
