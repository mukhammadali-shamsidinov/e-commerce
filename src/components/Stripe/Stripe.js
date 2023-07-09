import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

function StripeConnect() {
  const [stripe, setStripe] = useState(null);

  const handleClick = async () => {
    // Create a new Stripe account link
    const response = await fetch('/create-account-link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        account_id: 'pk_test_51NRqf1EZJaFAAiIHt9U6Vnh6ioxy2B5Y3sgKvPcTpWeIv9v7SPgxs7UYC8DH8sEvYrHCQtg4Q42MWbFzaZgfjwjJ00QWJtTBh3'
      })
    });
    const data = await response.json();

    // Redirect to the Stripe account link
    const { error } = await stripe.redirectToCheckout({
      sessionId: data.id
    });

    if (error) {
      console.error(error);
    }
  };

  // Load Stripe when the component mounts
  React.useEffect(() => {
    stripePromise.then(setStripe);
  }, []);

  return (
    <div>
      <button onClick={handleClick} className='btn btn-dark text-light w-100 my-3'>To'lov qilish</button>
    </div>
  );
}

export default StripeConnect;