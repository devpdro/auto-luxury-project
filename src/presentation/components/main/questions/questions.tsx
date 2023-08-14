import { useState } from 'react';

import { Container, Width, Box, Title, Answer, Line } from './questions-styled';

interface QUESTIONSItem {
  question: string;
  answer: string;
}

export const Questions: React.FC = () => {
  const [showText, setShowText] = useState<{ [index: number]: boolean }>({});

  const toggleText = (index: number) => {
    setShowText((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const questions: QUESTIONSItem[] = [
    {
      question:
        'Qual é a faixa de preços para alugar um carro de luxo por um dia?',
      answer:
        'Os preços podem variar de $500 a $2000 ou mais, dependendo do modelo.',
    },
    {
      question: 'É possível alugar um veículo de luxo com motorista?',
      answer: 'Sim, oferecemos opções de aluguel com motorista particular.',
    },
    {
      question:
        'É necessário ter um seguro especial para alugar um veículo de luxo?',
      answer: 'Sim, exigimos um seguro específico para cobrir danos.',
    },
    {
      question: 'A locadora oferece assistência 24 horas em caso de problemas?',
      answer:
        'Sim, a locadora fornece assistência 24h por dia em caso de problemas.',
    },
    {
      question:
        'Qual é a política de combustível? O veículo deve ser devolvido com tanque cheio?',
      answer:
        'Sim, o veículo deve ser devolvido com o tanque de combustível cheio, como na retirada.',
    },
  ];

  return (
    <Container>
      <Width>
        <Title>
          <h4>Tirando dúvidas</h4>
          <h1>Perguntas frequentes feitas pelos clientes</h1>
        </Title>
        <Box>
          {questions.map((questions, index) => (
            <div key={index}>
              <h1 onClick={() => toggleText(index)}>{questions.question}</h1>
              {showText[index] && <Answer>{questions.answer}</Answer>}
              <Line />
            </div>
          ))}
        </Box>
      </Width>
    </Container>
  );
};
