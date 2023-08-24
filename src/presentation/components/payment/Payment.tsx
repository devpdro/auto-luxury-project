import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { Container } from './PaymentStyles';

interface MessageProps {
  message: string;
}

const ProductDisplay = () => <Container></Container>;

// eslint-disable-next-line react/prop-types
const Message = ({ message }: MessageProps) => (
  <section>
    <p>{message}</p>
  </section>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default function Payment() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setMessage('Encomenda realizada! Você receberá um email de confirmação.');
    }

    if (query.get('canceled')) {
      setMessage(
        'Pedido cancelado – continue comprando e finalizando a compra quando estiver pronto.',
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}
