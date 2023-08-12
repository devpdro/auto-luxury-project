import { ICON } from 'presentation/assets';

import {
  Container,
  Width,
  Box,
  Reserve,
  Location,
  Time,
} from './information-styled';

export const Information = () => {
  return (
    <Container>
      <Width>
        <Box>
          <Reserve>
            <span>
              <ICON.IoCarSportSharp />
            </span>
            <div>
              <h2>Aluguel de Carros</h2>
              <p>200$ - 8300$</p>
            </div>
          </Reserve>
          <Location>
            <span>
              <ICON.GiWorld />
            </span>
            <div>
              <h2>Brazil</h2>
              <p>São Paulo, SP</p>
            </div>
          </Location>
          <Time>
            <span>
              <ICON.BiTimeFive />
            </span>
            <div>
              <h2>Terça-Feira</h2>
              <p>8h - 18h</p>
            </div>
          </Time>
        </Box>
      </Width>
    </Container>
  );
};
