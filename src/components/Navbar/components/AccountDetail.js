import React from 'react'
import { useCheckAccountActive, useDisconnectWallet } from 'services/useWalletProvider'
import { useGetBalance } from 'services/useGetBalance'
import LaunchIcon from '@material-ui/icons/Launch'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import { onMoveAnimation } from 'services/useDevelopUI'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import { useCopyToClipBoard, getTransak } from 'services/utils'
import './Account.css'

export const AccountDetail = () => {
	const account = useCheckAccountActive()
	const balance = useGetBalance()
	const transak = getTransak(account)
	const onCopyToClipBoard = useCopyToClipBoard()
	const onDisconnectWallet = useDisconnectWallet()
	return (
		<div
			id='account-info'
			className='fixed inset-0 z-10 flex items-center justify-center invisible w-screen h-screen text-white opacity-0 account-detail'
		>
			<div
				onClick={() => onMoveAnimation('account-info', 'moveOutOpacity')}
				className='overlay'
			></div>
			<div className='p-8 rounded-xl form-detail'>
				<div className='flex flex-row items-center justify-between'>
					<span className='text-xl font-semibold'>
						{account?.length !== 0
							? account.substr(0, 8) + '...' + account.substr(account.length - 8, account.length)
							: 'No account selected'}
					</span>
					<div className='flex flex-row items-center justify-center'>
						<div className='mr-4 online-icon'></div>
						BSC
					</div>
				</div>
				<div className='flex flex-row justify-between p-4 mt-4 font-semibold text-right rounded-xl balance-info'>
					<div className='flex flex-row text-lg'>
						<img
							className='mr-2 text-sm logo-binance'
							src='https://faraland.io/static/media/bnb.da97f83e.svg'
							alt='Binance Logo'
						/>
						BNB
					</div>
					<div className='flex flex-col text-end'>
						<span className='text-lg'>{parseFloat(balance).toFixed(2)}</span>
						<span className='font-normal'>$23232</span>
					</div>
				</div>
				<div className='flex flex-row mt-8 text-sm'>
					<div
						onClick={() => window.open(`https://bscscan.com/address/${account}`, '_blank')}
						className='flex flex-col items-center justify-center flex-1 py-4 mr-4 transition-all bg-gray-700 cursor-pointer btn-account rounded-xl hover:bg-gray-600'
					>
						<LaunchIcon className='mb-2' />
						View
					</div>
					<div
						onClick={() => onCopyToClipBoard(account)}
						className='flex flex-col items-center justify-center flex-1 py-4 mr-4 transition-all bg-gray-700 cursor-pointer btn-account rounded-xl hover:bg-gray-600'
					>
						<FileCopyIcon className='mb-2' />
						Copy
					</div>
					<div className='flex flex-col items-center justify-center flex-1 py-4 mr-4 transition-all bg-gray-700 cursor-not-allowed btn-account opacity-30 rounded-xl '>
						<SwapHorizIcon className='mb-2' />
						Switch
					</div>
					<div
						onClick={() => {
							onMoveAnimation('account-info', 'moveOutOpacity')
							onDisconnectWallet()
						}}
						style={{ color: 'red', flex: 1.2 }}
						className='flex flex-col items-center justify-center py-4 transition-all bg-gray-700 cursor-pointer flex-2 btn-account rounded-xl hover:bg-gray-600 '
					>
						<PowerSettingsNewIcon className='mb-2' />
						Disconnect
					</div>
				</div>
				<div className='mt-8'>
					<span className='text-lg font-semibold'>Buy Crypto</span>
					<div
						onClick={() => transak.init()}
						className='flex flex-row items-center justify-center w-2/4 py-2 mt-4 text-sm transition-all bg-gray-700 rounded-md cursor-pointer w btn-account hover:bg-gray-600 '
					>
						<SwapHorizIcon className='mr-2' />
						Transak
					</div>
				</div>
			</div>
		</div>
	)
}
