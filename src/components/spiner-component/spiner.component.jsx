import React from "react";
import "./spiner.styles.scss";

const Spiner = (WrapedComponenet) => {
	const ss = ({ isLoading, otherProps }) => {
		return isLoading ? (
			<div className='spiner-overly'>
				<div className='spiner-container'></div>
			</div>
		) : (
			<WrapedComponenet {...otherProps} />
		);
	};
	return ss;
};

export default Spiner;
