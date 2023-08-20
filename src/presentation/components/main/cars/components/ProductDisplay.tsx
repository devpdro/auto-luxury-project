import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

interface MessageProps {
  message: string;
}

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">Checkout</button>
    </form>
  </section>
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
