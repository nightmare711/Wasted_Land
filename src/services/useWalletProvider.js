/* eslint-disable react-hooks/exhaustive-deps */
import { useWallet } from '@binance-chain/bsc-use-wallet'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { getNodeUrl } from 'services/utils/getRpcUrl'
import { METAMASK, WALLETCONNECT } from 'constants/wallet'
import { useDispatch } from 'react-redux'
import { requestLoading, requestUnload } from 'services/redux/loading/actions'
import { requestSuccessMessage, requestErrorMessage } from 'services/redux/alert/action'
import React from 'react'

const POLLING_INTERVAL = 12000
const rpcUrl = getNodeUrl()
const chainId = parseInt(97, 10)

export const provider = new WalletConnectProvider({
	rpc: { [chainId]: rpcUrl },
	qrcode: true,
	bridge: 'https://pancakeswap.bridge.walletconnect.org/',
	mobileLinks: ['rainbow', 'metamask', 'argent', 'trust', 'imtoken', 'pillar'],
	pollingInterval: POLLING_INTERVAL,
	chainId: chainId,
})

export const connector = provider.connector

export const onConnectTrust = async () => {
	if (!connector.connected) {
		try {
			await provider.enable()
			await connector.createSession()
		} catch (err) {}
	}
}

export const onDisconnectWallet = () => {
	if (connector.connected) {
		provider.disconnect()
		connector.killSession()
	}
}
export const useDisconnectWallet = () => {
	const wallet = useWallet()
	const dispatch = useDispatch()
	return async () => {
		if (wallet.status === 'connected') {
			wallet.reset()
		}
		if (connector.connected) {
			await provider.disconnect()
			await connector.killSession()
		}
		dispatch(requestSuccessMessage('Disconnected', 'Disconnect wallet successfully.'))
	}
}

export const useConnectWallet = () => {
	const wallet = useWallet()
	const dispatch = useDispatch()
	return async (active, onClose) => {
		dispatch(requestLoading())
		switch (active) {
			case METAMASK: {
				if (window.ethereum) {
					if (parseInt(window.ethereum.networkVersion) === 97) {
						if (wallet.status !== 'connected') {
							try {
								await wallet.connect()
								if (window.ethereum.selectedAddress) {
									dispatch(
										requestSuccessMessage('Connect Wallet', 'Connect Metamask successfully.')
									)
									onClose()
								} else {
									dispatch(requestErrorMessage('Connect Wallet', 'User rejected the request.'))
								}
							} catch (err) {
								dispatch(requestErrorMessage('Connect Wallet', 'Something went wrong.'))
							}
						} else {
							dispatch(requestErrorMessage('Connect Wallet', 'Wallet connected! Do not try again!'))
						}
					} else {
						dispatch(
							requestErrorMessage(
								'Connect Wallet',
								'Your network is not compatible, please change your network first.'
							)
						)
					}
				} else {
					dispatch(requestErrorMessage('Connect Wallet', 'Please install metamask!'))
				}
				break
			}
			case WALLETCONNECT: {
				await onConnectTrust()
				if (connector.connected) {
					dispatch(requestSuccessMessage('Connect Wallet', 'Connect Wallet successfully.'))
					onClose()
				} else {
					dispatch(requestErrorMessage('Connect Wallet', 'User rejected the request.'))
				}
				break
			}
			default: {
				dispatch(requestUnload())
				return
			}
		}
		dispatch(requestUnload())
	}
}

export const useCheckAccountActive = () => {
	const [account, setAccount] = React.useState('')
	const wallet = useWallet()
	React.useEffect(() => {
		if (wallet.status === 'connected') {
			setAccount(window.ethereum.selectedAddress)
		} else if (connector.connected) {
			setAccount(connector.accounts[0])
		} else {
			setAccount('')
		}
	}, [wallet.status, connector.connected])
	return account
}
export const useCheckConnected = () => {
	const [isConnected, setIsConnected] = React.useState(false)
	const wallet = useWallet()
	React.useEffect(() => {
		if (wallet.status === 'connected' || wallet.status === 'error') {
			setIsConnected(true)
		} else if (connector.connected) {
			setIsConnected(true)
		} else {
			setIsConnected(false)
		}
	}, [wallet.status, connector.connected])
	return isConnected
}
export const useCheckWalletType = () => {
	const wallet = useWallet()
	return () => {
		if (wallet.status === 'connected' || wallet.status === 'error') {
			return METAMASK
		} else if (connector.connected) {
			return WALLETCONNECT
		} else {
			return ''
		}
	}
}
