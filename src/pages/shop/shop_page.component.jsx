import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../../components/collection/collection.component";
import { Route } from "react-router-dom";

const Shop_page = ({ match }) => (
	<div className='shop-page'>
		<Route exact path={`${match.path}`} component={CollectionOverview} />
		<Route path={`${match.path}/:collectionId`} component={Collection} />
	</div>
);

export default Shop_page;