import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

interface Motorcycle {
  name: string;
  price: number;
  // Add any other properties from your Motorcycle model here
}

interface MotorcyclePaymentProps {
  motorcycle: Motorcycle;
}

const MotorcyclePayment: React.FC<MotorcyclePaymentProps> = ({ motorcycle }) => {
  const handleToken = async (token: any) => {
    const response = await fetch('/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
        amount: motorcycle.price, // Use motorcycle price or calculate based on rental days
      }),
    });

    const data = await response.json();
    if (data.success) {
      alert('Payment Successful');
    } else {
      alert('Payment Failed');
    }
  };

  return (
    <div>
      <h3>{motorcycle.name}</h3>
      <p>Price: ₹{motorcycle.price}</p>
      <StripeCheckout
        stripeKey="pk_test_51OHKCJSGOaGxSSoOF98BxPLeqr77C2jIyObVqKJHa6amsPsAWvRnoGU1dCQXmvhG9SlSe0Afkhgf8JwnwiloGdVZ00JGaFDZ5K" // Replace with your Stripe publishable key
        token={handleToken}
        amount={motorcycle.price * 100} // amount in paise (cents)
        name="Motorcycle Payment"
        currency="INR"
        description={`Renting ${motorcycle.name}`}
      />
    </div>
  );
};

export default MotorcyclePayment;
