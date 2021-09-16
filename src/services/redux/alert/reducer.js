import {
	PUSH_ERROR_MESSAGE,
	PUSH_SUCCESS_MESSAGE,
	PUSH_INFO_MESSAGE,
	POP_MESSAGE,
} from 'constants/actions'

const initialState = {
	message: [],
	count: 0,
}
export const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case PUSH_ERROR_MESSAGE: {
			const temp = state.message
			temp.push({
				status: 0,
				title: action.payload.title,
				content: action.payload.content,
			})
			return {
				...state,
				count: state.count + 1,
				message: temp,
			}
		}

		case PUSH_SUCCESS_MESSAGE: {
			const temp = state.message
			temp.push({
				status: 1,
				title: action.payload.title,
				content: action.payload.content,
			})
			return {
				...state,
				count: state.count + 1,
				message: temp,
			}
		}
		case PUSH_INFO_MESSAGE: {
			const temp = state.message
			temp.push({
				status: -1,
				title: action.payload.title,
				content: action.payload.content,
			})
			return {
				...state,
				count: state.count + 1,
				message: temp,
			}
		}
		case POP_MESSAGE: {
			const temp = state.message
			temp.shift()
			return {
				...state,
				message: temp,
			}
		}

		default:
			return state
	}
}
