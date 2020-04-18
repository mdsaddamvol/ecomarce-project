export const addItemToState = (cartItems, itemToAdd) => {
	const itemExists = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);

	if (itemExists) {
		return cartItems.map((cartItem) =>
			cartItem.id === itemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
export const removeItemFromState = (cartItems, itemToRemove) => {
	const itemExists = cartItems.find(
		(cartItem) => cartItem.id === itemToRemove.id
	);
	if (itemExists && itemToRemove.quantity === 0) {
		return cartItems;
	}
	if (itemExists) {
		return cartItems.map((cartItem) =>
			cartItem.id === itemToRemove.id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
		);
	}
};
