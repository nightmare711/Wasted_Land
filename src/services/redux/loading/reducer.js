import { REQUEST_LOADING, REQUEST_UNLOAD } from 'constants/actions'

const initialState = {
	loading: false,
}
export const loadingReducer = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_LOADING:
			return {
				...state,
				loading: true,
			}
		case REQUEST_UNLOAD:
			return {
				...state,
				loading: false,
			}
		default:
			return state
	}
}
