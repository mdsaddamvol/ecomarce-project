import React from "react";
import "./cheakout-page.styles.scss";
import { createStructuredSelector } from "reselect";
import {
	selectCartItem,
	selectTottalPrice,
} from "../../redux/cart/cart.selectors";
import CheckOutItem from "../../components/checkout/checkout-item.component";
import { connect } from "react-redux";

const CheckOutPage = ({ cart_items, total }) => (
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>product</span>
			</div>
			<div className='header-block'>
				<span>discription</span>
			</div>
			<div className='header-block'>
				<span>quantity</span>
			</div>
			<div className='header-block'>
				<span>price</span>
			</div>
			<div className='header-block'>
				<span>remove</span>
			</div>
		</div>
		{cart_items.map((item) => (
			<CheckOutItem key={item.id} item={item} />
		))}
		<div className='total'>Total ${total}</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cart_items: selectCartItem,
	total: selectTottalPrice,
});
export default connect(mapStateToProps)(CheckOutPage);
