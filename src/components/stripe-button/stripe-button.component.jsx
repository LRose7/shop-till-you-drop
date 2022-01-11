import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KGq3eLCtXXEP4vWUrSyBnmG1AsH5XRKq3eLmhKsSkR5snQecqqwWADhlI5568YTdjWZBbfIn1mT4ZyZQtb3OnG300meVyMyUv';

   const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name='Shop Till You Drop'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;