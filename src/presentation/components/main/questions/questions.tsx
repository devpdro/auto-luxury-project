import React, { useState } from 'react';

import { Container, Width, Box, Title } from './questions-styled';

export const Questions = () => {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };
  return (
    <Container>
      <Width>
        <Title>
          <h4>Tirando dúvidas</h4>
          <h1>Perguntas frequentes feitas pelos clientes</h1>
        </Title>
        <Box>
          <h1 onClick={toggleText}>Quais são as formas de pagamento</h1>
          {showText && (
            <p>
              Aqui está a resposta para a pergunta frequente sobre formas de
              pagamento.
            </p>
          )}
        </Box>
      </Width>
    </Container>
  );
};
