/* eslint-disable default-case */
import React from 'react'
import { BoxGold, HeaderImg, BoxRare, BoxEpic, BoxFoot } from 'assets/sale'
import { onMoveAnimation } from 'services/useDevelopUI'
import { Male as MaleIcon, Female as FemaleIcon } from '@mui/icons-material'
import BorderIcon from 'assets/home/Active.png'
import Slider from 'react-slick'
import { BuyOverlay } from './component'
import { useGetPossibilities } from 'queries/useGetSale'
import { DataContext } from 'contexts/DataContext'
import { useCheckConnected } from 'services/useWalletProvider'
import BtnArrow from 'assets/home/btn-arrow.png'
import './SalePage.css'

const boxInfo = [
	{
		title: 'Plastic Package',
		boxImage: BoxRare,
		price: 0.1,
	},
	{
		title: 'Steel Package',
		boxImage: BoxEpic,
		price: 0.15,
	},
	{
		title: 'Gold Package',
		boxImage: BoxGold,
		price: 0.2,
	},
	{
		title: 'Diamond Package',
		boxImage: BoxEpic,
		price: 0.3,
	},
]

export const SalePage = () => {
	const [activeBox, setActiveBox] = React.useState(0)
	const possibilities = useGetPossibilities()
	const isConnected = useCheckConnected()
	const context = React.useContext(DataContext)
	return (
		<div className='flex flex-col items-center justify-between salepage'>
			<BuyOverlay
				onClose={() => {
					onMoveAnimation('buy-overlay', 'moveOutOpacity')
				}}
				type={boxInfo[activeBox].title}
				image={boxInfo[activeBox].boxImage}
				price={boxInfo[activeBox].price}
				rarityPackage={activeBox + 1}
			/>
			<div className='salepage__header'>
				<img
					onLoad={() => onMoveAnimation('pre-loading', 'moveOutOpacity')}
					src={HeaderImg}
					alt='Header'
				/>
				<div className='header__title'></div>
			</div>
			<div className='flex flex-col items-center justify-center sale'>
				<div className='flex flex-col max-w-screen-xl'>
					<div className='sale__title'>PURCHASE PACKAGE</div>
					<div className='flex flex-row justify-between sale__side'>
						<div className='sale__left'>
							<div className='flex flex-row sale__box'>
								{boxInfo.map((box, key) => (
									<div
										key={key}
										onClick={() => setActiveBox(key)}
										className={`box box-${key} ${key === activeBox ? 'active__box' : ''}`}
									>
										<span className='box__title'>{box.title}</span>
										<div className='flex items-center justify-center w-full'>
											<img src={box.boxImage} alt={box.title} />
										</div>
										<div className='box__number'>
											<span>{box.price}</span> BNB
										</div>
									</div>
								))}
							</div>
							<div className=' sale__info'>
								<div className='info'>
									<span className='info__title'>About this package</span>
									<span className='info__content'>
										This is a good package for your journey. Suitable for people just want to have
										some fun, experience the game. And don’t expect too much babe!
									</span>
								</div>
								<div className='info'>
									<span className='info__title'>Drop Rate</span>
									<span className='info__content'>
										<b>50%</b> Rare characters: Human/Hybrid
									</span>
									<span className='info__content'>
										<b>50%</b> Rare characters: Human/Hybrid
									</span>
									<span className='info__content'>
										<b>50%</b> Rare characters: Human/Hybrid
									</span>
								</div>
								<div className='info'>
									<span className='info__title'>NFT</span>
									<span className='info__content'>1 NFT</span>
								</div>
							</div>
							<div className='package__inside'>
								<span className='block title'>Peek Inside</span>
								<span className='subtitle'>
									When buying this package, you may recieve one of these characters below. You can
									refresh to see other possibilities.
								</span>
								<div
									onClick={() => context.setCount(context.count + 1)}
									className='cursor-pointer btn-secondary'
								>
									Refresh
								</div>
								<div className='characters'>
									{possibilities.map((info, key) => (
										<div key={key} className='character'>
											<div className='character__sex male'>
												{info.gender === 0 ? <MaleIcon /> : <FemaleIcon />}
											</div>
											<div className='flex items-center justify-center'>
												<img src={info.image} alt='character' className='character__img' />
											</div>
											<div className='character__stats'>
												<div className='stat__common'>
													Common <span>{info.parts.body_id.rarity}</span>
												</div>
												<div className='stat__rare'>
													Rare <span>{info.parts.head_id.rarity}</span>
												</div>
												<div className='stat__epic'>
													Epic <span>{info.parts.left_arm.rarity}</span>
												</div>
												<div className='stat__mystic'>
													Mystic <span>{info.parts.right_arm.rarity}</span>
												</div>
											</div>
											<div className='character__description'>
												<img src={BorderIcon} alt='Active' />
												<span className='description__title'>{info.character}</span>
												<span className='description__subtitle'>Eagle Man</span>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className='flex flex-col items-center justify-center sale__right'>
							<div className='box__container'>
								<div className='z-10'>
									<img src={BoxFoot} alt='Box' className='box__foot' />
								</div>
								<img src={boxInfo[activeBox].boxImage} alt='Box Epic' />
							</div>
							{isConnected ? (
								<div
									onClick={() => {
										onMoveAnimation('buy-overlay', 'moveInOpacity')
									}}
									className='cursor-pointer btn-primary'
								>
									Buy this package
								</div>
							) : (
								<div
									onClick={() => onMoveAnimation('connect-modal', 'moveInOpacity')}
									className='cursor-pointer btn-primary'
								>
									Connect Wallet
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
