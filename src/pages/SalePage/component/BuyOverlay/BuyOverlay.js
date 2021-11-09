import React from 'react'
import './BuyOverlay.css'
import { Remove as MinusIcon, Add as PlusIcon } from '@mui/icons-material'

import { useClaimHero, useGetLatestPool } from 'queries/useGetSale'

export const BuyOverlay = ({ type, price, image, onClose, rarityPackage }) => {
	const [quantity, setQuantity] = React.useState(1)
	const claimHero = useClaimHero()
	const { data: latestPool } = useGetLatestPool()
	return (
		<div id='buy-overlay' className='buy-overlay'>
			<div onClick={onClose} className='overlay'></div>
			<div className='buy-form'>
				<div className='title'>
					<span>Confirm Purchase</span>
				</div>
				<div className='flex flex-row items-center justify-between package__info'>
					<img src={image} alt='Package' />
					<div className='flex flex-col ml-4 info__main'>
						<span className='package__name'>{type}</span>
						<span className='my-4 price'>{parseFloat(price * quantity).toFixed(2)} BNB</span>
						<div className='flex flex-row quantity'>
							<span className='quantity__number'>Quantity</span>
							<div className='flex flex-row amount'>
								<div
									onClick={() => {
										if (quantity > 1) {
											setQuantity(quantity - 1)
										}
									}}
									className='container-icon'
								>
									<MinusIcon className='icon' />
								</div>
								<span className='mx-2'>{quantity}</span>
								<div
									onClick={() => {
										if (quantity < 5) {
											setQuantity(quantity + 1)
										}
									}}
									className='container-icon'
								>
									<PlusIcon className='icon' />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-row justify-center'>
					<div
						onClick={() => {
							claimHero(
								latestPool ? latestPool : 1,
								quantity,
								rarityPackage,
								parseFloat(price * quantity).toFixed(2)
							)
						}}
						className='mr-4 cursor-pointer btn btn-primary'
					>
						Purchase
					</div>
					<div onClick={onClose} className='cursor-pointer btn btn-secondary'>
						Cancel
					</div>
				</div>
			</div>
		</div>
	)
}
