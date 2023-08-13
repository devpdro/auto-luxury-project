import { IMAGES } from 'presentation/assets';

import {
  Container,
  Width,
  Box,
  Text,
  Input,
  Details,
  Reserve,
  Img,
} from './header-styled';

export const Header = () => {
  return (
    <Container>
      <Width>
        <Box>
          <Text>
            <h4>Reservar agora</h4>
            <h1>Porsche 911</h1>
          </Text>
          <Input>
            <Details type="submit" value="Exibir detalhes" />
            <Reserve type="submit" value="Reservar agora" />
          </Input>
          <Img>
            <img src={IMAGES.POPULAR5} alt="Porsche" />
          </Img>
        </Box>
      </Width>
    </Container>
  );
};
