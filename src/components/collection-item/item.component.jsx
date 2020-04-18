import React from "react";
import "./collection-item.scss";
import Button from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addToCart }) => {
	const { name, imageUrl, price } = item;
	return (
		<div className='collection-item'>
			<div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-footer'>
				<div className='name'>{name}</div>
				<div className='price'>{price} </div>
			</div>
			<div className='add-to-cart-button'>
				<Button onClick={() => addToCart(item)} inverted>
					Add To Cart
				</Button>
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addToCart: (item) => {
			dispatch(addToCart(item));
		},
	};
};
export default connect(null, mapDispatchToProps)(CollectionItem);
