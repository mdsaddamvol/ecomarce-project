import React from "react";
import "./custom-button.scss";
const Button = ({ children, inverted, isSignedIn, ...otherprops }) => (
	<button
		className={` ${inverted ? "inverted" : " "} ${
			isSignedIn ? "google-sign-in" : " "
		} custom-button `}
		{...otherprops}
	>
		{children}
	</button>
);
export default Button;
