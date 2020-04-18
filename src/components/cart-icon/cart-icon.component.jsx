import React from "react";
import { ReactComponent as CartSvg } from "../../assets/cart-icon.svg";
import "./cart-icon.styles.scss";
import { cartToggle } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTottalQuantity } from "../../redux/cart/cart.selectors";

const CartIcon = ({ cartToggle, quantity }) => (
	<div className='cart-icon' onClick={cartToggle}>
		<CartSvg className='shopping-icon' />
		<span className='item-count'>{quantity}</span>
	</div>
);
const mapStateToProps = createStructuredSelector({
	quantity: selectTottalQuantity,
});

const mapDispatchToProps = (dispatch) => ({
	cartToggle: () => dispatch(cartToggle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
