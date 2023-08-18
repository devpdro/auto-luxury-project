import { IMAGES } from 'presentation/assets';
import { ICON } from 'presentation/assets';

import {
  Container,
  Width,
  Title,
  Box,
  Text,
  Information,
  Img,
} from './AboutStyles';

export const About = () => {
  return (
    <Container>
      <Width>
        <Title>
          <h4>Sobre nós</h4>
          <h1>Nossos serviços</h1>
        </Title>
        <Box>
          <Text>
            <h1>Bem-vindo ao Auto Luxury</h1>
            <p>
              Deixe-se envolver pela emoção inigualável de estar no controle
              dessas máquinas impressionantes, e faça cada momento ao volante se
              tornar uma lembrança eternamente marcante. Nossos preços
              personalizados proporcionam a harmonia perfeita entre luxo e
              acessibilidade.
            </p>
            <Information>
              <div>
                <span>
                  <ICON.MdOutlineWorkspacePremium />
                </span>
                <h5>Experiência Premium</h5>
              </div>
              <div>
                <span>
                  <ICON.IoCarSportSharp />
                </span>
                <h5>Carro dos Sonhos</h5>
              </div>
              <div>
                <span>
                  <ICON.AiOutlineSchedule />
                </span>
                <h5>Reserva com praticidade</h5>
              </div>
              <div>
                <span>
                  <ICON.MdOutlinePerson />
                </span>
                <h5>Assistência 24/7</h5>
              </div>
            </Information>
          </Text>
          <Img>
            <img src={IMAGES.POPULAR1} alt="Porsche" />
          </Img>
        </Box>
      </Width>
    </Container>
  );
};
