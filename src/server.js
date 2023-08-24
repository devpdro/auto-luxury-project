// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripePackage = require('stripe');

const stripe = stripePackage(
  'sk_test_51NgZy8J584lMZAd6t0cgg1ZLyQz0bXuZt7DWVQ3exksO0lbk1FmCmouBM2mUmFvWVZaaWWYjJZq8V2yZiph8NxKY00OEbTwQ4X',
);

const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: 'price_1NhLovJ584lMZAd6rsF1KRxM',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/inicio?success=true`,
      cancel_url: `${YOUR_DOMAIN}/reservas?canceled=true`,
    });

    res.redirect(303, session.url);
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send('Error creating checkout session');
  }
});

app.listen(4242, () => {
  console.log('Running on port 4242');
});
