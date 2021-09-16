import {
	PUSH_SUCCESS_MESSAGE,
	PUSH_ERROR_MESSAGE,
	PUSH_INFO_MESSAGE,
	POP_MESSAGE,
} from 'constants/actions'

export const requestSuccessMessage = (title, content) => {
	return {
		type: PUSH_SUCCESS_MESSAGE,
		payload: {
			title: title,
			content: content,
		},
	}
}
export const requestErrorMessage = (title, content) => {
	return {
		type: PUSH_ERROR_MESSAGE,
		payload: {
			title: title,
			content: content,
		},
	}
}
export const requestInfoMessage = (title, content) => {
	return {
		type: PUSH_INFO_MESSAGE,
		payload: {
			title: title,
			content: content,
		},
	}
}
export const requestPopMessage = () => {
	return {
		type: POP_MESSAGE,
	}
}
