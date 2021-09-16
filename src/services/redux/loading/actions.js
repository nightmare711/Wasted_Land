import { REQUEST_LOADING, REQUEST_UNLOAD } from 'constants/actions'
import { onMoveAnimation } from 'services/useDevelopUI'

export const requestLoading = () => {
	onMoveAnimation('loading', 'moveInOpacity')
	return {
		type: REQUEST_LOADING,
	}
}
export const requestUnload = () => {
	onMoveAnimation('loading', 'moveOutOpacity')
	return {
		type: REQUEST_UNLOAD,
	}
}
