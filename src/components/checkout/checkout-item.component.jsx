import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
	clearItemFromCart,
	addToCart,
	removeItemFromCart,
} from "../../redux/cart/cart.actions";

const CheckOutItem = ({
	item,
	clearItemFromCart,
	addToCart,
	removeItemFromCart,
}) => {
	const { name, imageUrl, price, quantity } = item;
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='product' />
			</div>
			<div className='name'>{name}</div>
			<div className='quantity'>
				<div onClick={() => removeItemFromCart(item)} className='left-arrow'>
					&#10096;
				</div>
				<span className='value'>{quantity}</span>
				<div onClick={() => addToCart(item)} className='right-arrow'>
					&#10095;
				</div>
			</div>
			<div className='price'>{price} </div>
			<div onClick={() => clearItemFromCart(item)} className='remove-button'>
				&#10005;
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		clearItemFromCart: (item) => {
			dispatch(clearItemFromCart(item));
		},
		addToCart: (item) => {
			dispatch(addToCart(item));
		},
		removeItemFromCart: (item) => {
			dispatch(removeItemFromCart(item));
		},
	};
};
export default connect(null, mapDispatchToProps)(CheckOutItem);
