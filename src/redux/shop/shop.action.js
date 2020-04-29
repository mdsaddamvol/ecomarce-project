import { setCollection } from "./shop.types";

export const setcollectionState = (collection) => ({
	type: setCollection,
	payload: collection,
});
