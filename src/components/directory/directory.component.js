import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSecsions } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => (
	<div className='directory-menu'>
		{sections.map(({ title, imageUrl, id, linkUrl, size }) => (
			<MenuItem
				key={id}
				title={title}
				linkUrl={linkUrl}
				imageUrl={imageUrl}
				size={size}
			/>
		))}
	</div>
);
const mapStateToProps = createStructuredSelector({
	sections: selectSecsions,
});

export default connect(mapStateToProps)(Directory);
