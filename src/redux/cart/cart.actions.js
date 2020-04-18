import cart_dropdown_type from "./cart.types";
export const cartToggle = () => ({
	type: cart_dropdown_type.cart_dropdown_toggle,
});

export const addToCart = (item) => ({
	type: cart_dropdown_type.add_item,
	payload: item,
});

export const removeItemFromCart = (item) => ({
	type: cart_dropdown_type.remove_item,
	payload: item,
});
export const clearItemFromCart = (item) => ({
	type: cart_dropdown_type.clearItemFromCart,
	payload: item,
});
