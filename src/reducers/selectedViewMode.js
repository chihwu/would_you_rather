import { SET_SELECTED_VIEW_MODE } from '../actions/selectedViewMode'

export default function selectedViewMode(state = null, action) {
	switch(action.type) {
		case SET_SELECTED_VIEW_MODE:
			return action.mode
		default: 
			return state
	}
}