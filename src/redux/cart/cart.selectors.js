import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItem = createSelector(
	[selectCart],
	(cart) => cart.cart_items
);

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectTottalQuantity = createSelector(
	[selectCartItem],
	(cart_items) =>
		cart_items.reduce(
			(aqumulatedQuantity, cart_item) =>
				aqumulatedQuantity + cart_item.quantity,
			0
		)
);
export const selectTottalPrice = createSelector(
	[selectCartItem],
	(cart_items) =>
		cart_items.reduce(
			(aqumulatedQuantity, cart_item) =>
				aqumulatedQuantity + cart_item.quantity * cart_item.price,
			0
		)
);
