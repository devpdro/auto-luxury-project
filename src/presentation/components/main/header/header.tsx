import { Link } from 'react-router-dom';

import { IMAGES } from 'presentation';

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
    <Container id="home">
      <Width>
        <Box>
          <Text>
            <h1>Porsche 911 Carrera</h1>
            <h4>Reserve agora e sinta a emoção</h4>
          </Text>
          <Input>
            <a href="#cars">
              <Details type="submit" value="Exibir detalhes" />
            </a>
            <Link to="/reservas">
              <Reserve type="submit" value="Reservar agora" />
            </Link>
          </Input>
          <div>
            <img src={IMAGES.POPULAR5} alt="Porsche" />
          </div>
        </Box>
      </Width>
    </Container>
  );
};
