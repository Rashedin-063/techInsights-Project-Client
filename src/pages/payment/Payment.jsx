import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import PageTitle from './../../components/PageTitle';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
  const location = useLocation();

  const price = location.state?.price;
  console.log(price);

  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

  return (
    <div className='text-center mx-2'>
      <PageTitle title={`Buy premium membership`} />
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} />
        </Elements>
      </div>
    </div>
  );
};
export default Payment;
