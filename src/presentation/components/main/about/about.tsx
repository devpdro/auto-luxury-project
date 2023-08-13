import { IMAGES } from 'presentation/assets';

import { Container, Width, Box, Text, Information, Img } from './about-styled';

export const About = () => {
  return (
    <Container>
      <Width>
        <Box>
          <Text>
            <h4>About</h4>
            <h1>Bem vindo a loja de carros</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              id repellat aliquid accusamus sapiente labore, quidem tenetur
              quis, atque laudantium nesciunt recusandae sit quia nobis. Saepe
              autem non voluptates dolorem!
            </p>
            <Information>
              <div>texto</div>
              <div>aa</div>
              <div>saddad</div>
              <div>adada</div>
            </Information>
          </Text>
          <Img>
            <img src={IMAGES.POPULAR5} alt="" />
          </Img>
        </Box>
      </Width>
    </Container>
  );
};
