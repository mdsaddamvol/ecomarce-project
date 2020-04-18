import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selector";
import ShopItem from "../shopItem-priview/shopItem-priview.component";
import "./collection-overview.styles.scss";
const CollectionOverview = ({ collections }) => (
	<div className='shop-page'>
		{collections.map(({ id, ...otherCollectionProps }) => (
			<ShopItem key={id} {...otherCollectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
