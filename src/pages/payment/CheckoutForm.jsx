import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = () => {
  const [error, setError] = useState(null)

  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement)
    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      console.log('payment error', error) 
      setError(error.message)
    } else {
      console.log('payment method', paymentMethod)
      setError(null)
   }
    ;

    

  }

  return (
    <div>
      <form
        className='mx-4 border-2 border-green-lantern px-4 py-12 rounded-lg border-dotted'
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
        {!error ? (
          ''
        ) : (
          <p className='mt-12 text-red-600 font-semibold'>{error}</p>
        )}
        <button
          className='mt-12 px-16 py-2  bg-green-lantern text-white rounded-md hover:rounded-full hover:bg-deep-ocean'
          type='submit'
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </div>
  );
}
export default CheckoutForm