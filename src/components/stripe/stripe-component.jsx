import React from "react";

import StripeCheckout from "react-stripe-checkout";

const Stripebutton = ({ price }) => {
	const stripePrice = price * 100;
	const key = "pk_test_9QpMdnkmqFEBQBv2ZKBerS6O00X6CKYZDE";

	const ontoken = (token) => {
		console.log(token);
		alert("payment success!");
	};
	return (
		<StripeCheckout
			label='Pay Now'
			name='hire-lie'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/Cuz.svg'
			discription={`Your total is $${price}`}
			amount={stripePrice}
			panelLebel='Pay Now'
			token={ontoken}
			stripeKey={key}
		/>
	);
};

export default Stripebutton;
