import React from 'react'
import { useQuery } from 'react-query'
import { TEST_API } from 'constants/api'
import { useCheckWalletType } from 'services/useWalletProvider'
import { METAMASK } from 'constants/wallet'
import { onMoveAnimation } from 'services/useDevelopUI'
import { useDispatch } from 'react-redux'
import { requestLoading, requestUnload } from 'services/redux/loading/actions'
import { requestSuccessMessage, requestErrorMessage } from 'services/redux/alert/action'
import { getContract, getWeb3 } from 'services/utils/getWeb3'
import WAHABI from 'constants/WAH.json'
import { DataContext } from 'contexts/DataContext'
import { BSC_TESTNET } from 'constants/addresses'
import { onCheckStatusOfTransaction } from 'services/utils/checkStatus'

export const useGetPossibilities = () => {
	const [possibilities, setPossibilities] = React.useState([])
	const data = React.useContext(DataContext)
	React.useEffect(() => {
		fetch(TEST_API + '/api/v1/package/1/peek?size=8')
			.then((res) => res.json())
			.then((result) => setPossibilities(result.data.heros))
			.catch((err) => console.log(err))
	}, [data.count])
	return possibilities
}
export const useClaimHero = () => {
	const onCheckType = useCheckWalletType()
	const dispatch = useDispatch()
	return (poolId, amount, rarityPackage, price) => {
		dispatch(requestLoading())
		const _type = onCheckType()
		const web3 = getWeb3()
		const wahContract = getContract(WAHABI, BSC_TESTNET)
		const contractData = wahContract.methods.createHero(poolId, amount, rarityPackage).encodeABI()
		if (_type === METAMASK) {
			const params = [
				{
					from: window.ethereum?.selectedAddress,
					to: BSC_TESTNET,
					data: contractData,
					value: web3.utils.numberToHex(price * 1e18),
				},
			]
			window.ethereum
				?.request({
					method: 'eth_sendTransaction',
					params: params,
				})
				.then(async (res) => {
					if (res) {
						dispatch(requestSuccessMessage('Ordered', 'Transaction submitted'))
						const status = await onCheckStatusOfTransaction(res)
						if (status) {
							dispatch(requestSuccessMessage('Successful', 'Claim wasted hero successfully'))
							onMoveAnimation('success-overlay', 'moveInOpacity')
						} else {
							dispatch(requestErrorMessage('Failed', 'Something went wrong'))
						}
						onMoveAnimation('buy-overlay', 'moveOutOpacity')
					} else {
						dispatch(requestErrorMessage('Order', 'Something went wrong'))
					}
					dispatch(requestUnload())
				})
				.catch((err) => {
					dispatch(requestErrorMessage('Order', 'Something went wrong'))
					dispatch(requestUnload())
				})
		}
	}
}
export const useGetLatestPool = () => {
	return useQuery(['useGetLatestPool.name'], async () => {
		const wahContract = getContract(WAHABI, BSC_TESTNET)
		const _latestPool = await wahContract.methods.getLatestPool().call()
		return _latestPool
	})
}
