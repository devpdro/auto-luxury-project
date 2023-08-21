import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { Container, Form, Button } from './PaymentStyles';

interface MessageProps {
  message: string;
}

const ProductDisplay = () => (
  <Container>
    <Form action="/create-checkout-session" method="POST">
      <Button type="submit">Realizar o pagamento</Button>
      <p>
        A confirmação da inclusão do carro na reserva está garantida somente
        após a realização do pagamento.
      </p>
    </Form>
  </Container>
);

// eslint-disable-next-line react/prop-types
const Message = ({ message }: MessageProps) => (
  <section>
    <p>{message}</p>
  </section>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready.",
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}
