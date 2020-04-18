import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../collection-item/item.component";
import "./collection.styles.scss";

const Collection = ({ collection }) => {
	const { title, items } = collection;

	return (
		<div className='collection-page'>
			<div className='title'>{title} </div>
			<div className='items'>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
