import transakSDK from '@transak/transak-sdk'
import { useDispatch } from 'react-redux'
import { requestSuccessMessage, requestErrorMessage } from 'services/redux/alert/action'

export const getTransak = (account) => {
	const transak = new transakSDK({
		apiKey: '4fcd6904-706b-4aff-bd9d-77422813bbb7', // Your API Key (Required)
		environment: 'STAGING', // STAGING/PRODUCTION (Required)
		defaultCryptoCurrency: 'BNB',
		walletAddress: account, // Your customer wallet address
		themeColor: '000000', // App theme color in hex
		email: '', // Your customer email address (Optional)
		redirectURL: '',
		hostURL: window.location.origin, // Required field
		widgetHeight: '550px',
		widgetWidth: '450px',
	})
	transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, (orderData) => {
		transak.close()
	})

	// This will trigger when the user marks payment is made.
	transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
		console.log(orderData)
		transak.close()
	})
	return transak
}
export const useCopyToClipBoard = () => {
	const dispatch = useDispatch()
	return (value) => {
		var textArea = document.createElement('textarea')
		textArea.value = value
		textArea.style.top = '0'
		textArea.style.left = '0'
		textArea.style.position = 'fixed'
		textArea.style.width = '2px'
		textArea.style.opacity = 0

		document.body.appendChild(textArea)
		textArea.focus()
		textArea.select()
		const success = document.execCommand('copy')
		if (success) {
			dispatch(requestSuccessMessage('Copied', 'Copy address successful.'))
		} else {
			dispatch(requestErrorMessage('Copy Failed', 'Something went wrong!'))
		}
	}
}
