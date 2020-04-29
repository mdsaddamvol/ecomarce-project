import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../../components/collection/collection.component";
import { Route } from "react-router-dom";
import { firestore, convertSnapshot } from "../../firebase/firebase-config";
import { setcollectionState } from "../../redux/shop/shop.action";
import { connect } from "react-redux";
import Spiner from "../../components/spiner-component/spiner.component";

const WithSpinerCollectionOverview = Spiner(CollectionOverview);
const WithSpinerCollection = Spiner(Collection);
class Shop_page extends React.Component {
	state = {
		isLoading: true,
	};
	unsubscribeFromCollection = null;
	componentDidMount() {
		const CollectionRef = firestore.collection("collections");
		CollectionRef.onSnapshot(async (snapshot) => {
			const shopdata = convertSnapshot(snapshot);
			this.props.setcollectionState(shopdata);
			this.setState({ isLoading: false });
		});
	}

	render() {
		const { match } = this.props;
		const { isLoading } = this.state;
		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<WithSpinerCollectionOverview
							isLoading={isLoading}
							otherProps={props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<WithSpinerCollection isLoading={isLoading} otherProps={props} />
					)}
				/>
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setcollectionState: (snapshot) => {
			dispatch(setcollectionState(snapshot));
		},
	};
};
export default connect(null, mapDispatchToProps)(Shop_page);
