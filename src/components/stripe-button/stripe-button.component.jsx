import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

const  StripeCheckoutButton = ({ price })=>{
    const priceForStripe = price*100;
    const publishablekey= 'pk_test_n13Wdw21W2mUTqUxQA2pZQxi';
    return (
        <StripeCheckout 
        label='Pay Now'
        name='Infinty Clothing'
        billingAddress
        shippingAddress
        description ={`Your total is $${price}`}
        amount ={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;