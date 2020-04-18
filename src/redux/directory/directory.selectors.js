import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectSecsions = createSelector(
	[selectDirectory],
	(directory) => directory.sections
);
