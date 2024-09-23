import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';

import './CheckoutStyle.css';
import { ImSpinner9 } from 'react-icons/im';
import useAxiosSecure from './../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const CheckoutForm = ({ price, validationTime, subscriptionType }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState();
  const [confirmPaymentError, setConfirmPaymentError] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()

  const stripe = useStripe();
  const elements = useElements();
  
  useEffect(() => {
    if (price > 0) {
  sendPaymentInfo(price)
}
  }, [])
 
  // send payment info to backend
  const sendPaymentInfo = async (price) => {
    const { data } = await axiosSecure.post('/create-payment-intent', { price: price });
    
    // console.log(data.clientSecret)

    setClientSecret(data?.clientSecret)  
  }

  // handle submit fn
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.error('payment error', error)
      setError(error.message);
      setLoading(false);
    } else {
      //console.log('payment method', paymentMethod)
      setError('');
    }

    const {paymentIntent, error: confirmPaymentError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous',
        },
      },
    });

    if (confirmPaymentError) {
      setLoading(false)
      console.error(confirmPaymentError)
      setConfirmPaymentError(confirmPaymentError.message)
      setTransactionId('')
    } else {
      // console.log('payment intent', paymentIntent)
      setLoading(false)
      setConfirmPaymentError('')
      setTransactionId(paymentIntent.id)

      if (paymentIntent.status === 'succeeded') {
        const payment = {
          email: user?.email,
          price: price,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date converter (moment.js)
          subscriptionType: subscriptionType,
        };

        const res = await axiosSecure.post('/payments', payment);

        if (res.data?.insertedId) {
          toast.success('Congrats! You are now a premium user');
        }
      }
      
    }

  };

  return (
    <div>
      <form
        className='mx-4 md:w-3/4 md:mx-auto xl:w-1/2 border-2 border-green-lantern px-4 py-12 rounded-lg border-dotted'
        onSubmit={handleSubmit}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '18px',
                color: 'black',
                '::placeholder': {
                  color: '',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        {error && <p className='mt-12 text-red-600 font-semibold'>{error}</p>}
        <button
          className='mt-12 px-16 py-2  bg-green-lantern text-white font-semibold rounded-md hover:rounded-full hover:bg-deep-ocean'
          type='submit'
          disabled={!stripe || !clientSecret}
        >
          {loading ? (
            <ImSpinner9 className='animate-spin m-auto text-deep-ocean' />
          ) : (
            <>
              {' '}
              Pay{' '}
              <span className='text-lg ml-2 text-yellow-100 '>{`$ ${price}`}</span>
            </>
          )}
        </button>

        {/* show error message or transactionId */}
      
        {confirmPaymentError && (
          <p className='mt-12 text-red-600 font-semibold'>
            {confirmPaymentError}
          </p>
        )}
        {transactionId && (
          <p className='mt-12 text-green-600 font-semibold'>
            Your transaction id: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};
export default CheckoutForm;
