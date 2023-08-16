import { Link } from 'react-router-dom';

import { ICON } from 'presentation/assets';

import {
  Container,
  Width,
  Box,
  Text,
  Links,
  Quicklinks,
  Contact,
} from './FooterStyles';

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
              Website com o propósito de envolvê-lo na emoção singular de estar
              no controle destas máquinas impressionantes e transformar cada
              momento ao volante em uma memória eternamente marcante. Nossos
              preços personalizados oferecem o equilíbrio ideal entre luxo e
              acessibilidade.
            </p>
          </Text>
          <Links>
            <Quicklinks>
              <h1>Links rápidos</h1>
              <ul>
                <Link to="/inicio">
                  <li>Início</li>
                </Link>
                <Link to="/localizacao">
                  <li>Localização</li>
                </Link>
                <Link to="/contato">
                  <li>Contato</li>
                </Link>
                <Link to="/conectar">
                  <li>Conectar</li>
                </Link>
                <Link to="/cadastrar">
                  <li>Cadastrar</li>
                </Link>
              </ul>
            </Quicklinks>
            <Contact>
              <h1>Onde estamos</h1>
              <ul>
                <Link to="/localizacao">
                  <li>
                    <span>
                      <ICON.HiOutlineLocationMarker />
                    </span>
                    Rua Frederico Moura, <br /> Bairro Cidade Nova <br /> CEP:
                    14401150 <br /> Franca/SP
                  </li>
                </Link>
                <a
                  href="https://api.whatsapp.com/send?phone=5519999715982"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <span>
                      <ICON.AiOutlineWhatsApp />
                    </span>
                    (19) 99971-5982
                  </li>
                </a>
              </ul>
            </Contact>
          </Links>
        </Box>
      </Width>
    </Container>
  );
};
