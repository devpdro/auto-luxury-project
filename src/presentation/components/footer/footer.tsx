import { ICON } from 'presentation/assets';

import {
  Container,
  Width,
  Box,
  Text,
  Links,
  Quicklinks,
  Contact,
} from './footer-styled';

export const Footer = () => {
  return (
    <Container>
      <Width>
        <Box>
          <Text>
            <h1>
              <span>
                <ICON.IoCarSportSharp />
              </span>
              Auto Luxury
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem dolor quae adipisci quo a, cumque laudantium ex
              obcaecati nostrum natus quisquam accusantium, corporis
              exercitationem tempora nobis temporibus neque. Dignissimos,
              magnam?
            </p>
          </Text>
          <Links>
            <Quicklinks>
              <h1>Links rápidos</h1>
              <ul>
                <li>asdadsad</li>
                <li>asdadsad</li>
                <li>asdadsad</li>
                <li>asdadsad</li>
                <li>asdadsad</li>
              </ul>
            </Quicklinks>
            <Contact>
              <h1>Contato</h1>
              <ul>
                <li>asdadsad</li>
                <li>asdadsad</li>
                <li>asdadsad</li>
                <li>asdadsad</li>
                <li>asdadsad</li>
              </ul>
            </Contact>
          </Links>
        </Box>
      </Width>
    </Container>
  );
};
