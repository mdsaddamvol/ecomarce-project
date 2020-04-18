import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import "./header.component.scss";
import { auth } from "../../firebase/firebase-config";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = ({ currentUser, hidden }) => {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>

			<div className='options'>
				<Link className='option' to='/shop'>
					<h2>SHOP</h2>
				</Link>
				<Link className='option' to='/shop'>
					<h2>CONTACT</h2>
				</Link>
				{currentUser ? (
					<Link className='option' to='/signin'>
						<h2 onClick={() => auth.signOut()}>SIGN OUT </h2>
					</Link>
				) : (
					<Link className='option' to='/signin'>
						<h2>SIGN IN</h2>
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectHidden,
});
export default connect(mapStateToProps)(Header);
