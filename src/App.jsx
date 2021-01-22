import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component.jsx";
import Shop_page from "./pages/shop/shop_page.component.jsx";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up-page";
import { createUserindatabase, auth } from "./firebase/firebase-config";
import { connect } from "react-redux";
import { setUserState } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import CheckOutPage from "./pages/cheakout-page/cheakOut-page.component";

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setUserState } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userauth) => {
			if (userauth) {
				const userRef = await createUserindatabase(userauth);

				userRef.onSnapshot((snapshot) => {
					setUserState({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			}
			setUserState(userauth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={Shop_page} />
					<Route exact path='/checkout' component={CheckOutPage} />
					<Route
						exact
						path='/signin'
						render={() =>
							this.props.currentUser ? <Redirect to='/' /> : <SignInSignUp />
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setUserState: (user) => dispatch(setUserState(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
