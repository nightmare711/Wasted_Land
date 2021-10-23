import React from 'react'
import { getWeb3 } from './utils/getWeb3'

const web3 = getWeb3()

export const useGetBalance = () => {
	const [balance, setBalance] = React.useState(0)
	React.useEffect(() => {
		if (window.ethereum?.selectedAddress) {
			web3.eth.getBalance(window.ethereum.selectedAddress, (err, balance) => {
				setBalance(web3.utils.fromWei(web3.utils.toBN(parseInt(balance))))
			})
		}
	})
	return balance
}
