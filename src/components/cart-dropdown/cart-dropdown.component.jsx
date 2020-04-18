import React from "react";
import Button from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItem } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { cartToggle } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cart_items, history, dispatch }) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{cart_items.length ? (
				cart_items.map((cart_item) => (
					<CartItem key={cart_item.id} item={cart_item} />
				))
			) : (
				<span className='empty-massage'>Your cart is empty.</span>
			)}
		</div>
		<Button
			onClick={() => {
				history.push("/checkout");
				dispatch(cartToggle());
			}}
		>
			Cheak Out Cart
		</Button>
	</div>
);
const mapStateToProps = createStructuredSelector({
	cart_items: selectCartItem,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
