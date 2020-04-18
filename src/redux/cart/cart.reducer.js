import cart_dropdown_type from "./cart.types";
import { addItemToState, removeItemFromState } from "./cart.utils";

const INITIAL_STATE = {
	hidden: true,
	cart_items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cart_dropdown_type.cart_dropdown_toggle:
			return {
				...state,
				hidden: !state.hidden,
			};
		case cart_dropdown_type.add_item:
			return {
				...state,
				cart_items: addItemToState(state.cart_items, action.payload),
			};
		case cart_dropdown_type.remove_item:
			return {
				...state,
				cart_items: removeItemFromState(state.cart_items, action.payload),
			};
		case cart_dropdown_type.clearItemFromCart:
			return {
				...state,
				cart_items: state.cart_items.filter(
					(cart_item) => cart_item.id !== action.payload.id
				),
			};

		default:
			return state;
	}
};

export default cartReducer;
