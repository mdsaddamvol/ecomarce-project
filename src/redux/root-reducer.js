import { combineReducers } from "redux";
import userRedecer from "./user/user-reduser";
import cartReducer from "./cart/cart.reducer";
import directoryReducers from "./directory/directory.reducers";
import shopReducers from "./shop/shop.reducers";

export default combineReducers({
	user: userRedecer,
	cart: cartReducer,
	directory: directoryReducers,
	shop: shopReducers,
});
