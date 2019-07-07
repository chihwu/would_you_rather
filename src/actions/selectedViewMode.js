export const SET_SELECTED_VIEW_MODE = 'SET_SELECTED_VIEW_MODE'

export function setSelectedViewMode(mode) {
	return {
		type: SET_SELECTED_VIEW_MODE,
		mode
	}
}