/* eslint-disable default-case */
import React from 'react'
import {
	BoxNormal,
	BoxEpic,
	BoxMystic,
	BoxRare,
	HeaderImg,
	StaticNormal,
	StaticRare,
	StaticEpic,
	StaticMystic,
	BoxFoot,
	Border,
} from 'assets/sale'
import { onMoveAnimation } from 'services/useDevelopUI'
import { Male as MaleIcon, Female as FemaleIcon } from '@mui/icons-material'
// import BorderIcon from 'assets/home/Active.png'
import { BuyOverlay, SuccessOverlay } from './component'
// import Dice from 'assets/dice.png'
import { useGetPossibilities } from 'queries/useGetSale'
// import { DataContext } from 'contexts/DataContext'
import { useCheckConnected } from 'services/useWalletProvider'
import { requestLoading, requestUnload } from 'services/redux/loading/actions'
import { useDispatch } from 'react-redux'
import './SalePage.css'

const boxInfo = [
	{
		title: 'Plastic Package',
		boxImage: BoxNormal,
		static: StaticNormal,
		price: 0.1,
	},
	{
		title: 'Steel Package',
		boxImage: BoxRare,
		static: StaticRare,
		price: 0.15,
	},
	{
		title: 'Gold Package',
		boxImage: BoxEpic,
		static: StaticEpic,
		price: 0.2,
	},
	{
		title: 'Diamond Package',
		boxImage: BoxMystic,
		static: StaticMystic,
		price: 0.3,
	},
]

export const SalePage = () => {
	const [activeBox, setActiveBox] = React.useState(0)
	const possibilities = useGetPossibilities(activeBox + 1)
	const isConnected = useCheckConnected()
	// const context = React.useContext(DataContext)
	const dispatch = useDispatch()
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
			<SuccessOverlay
				onClose={() => onMoveAnimation('success-overlay', 'moveOutOpacity')}
				image={boxInfo[activeBox].boxImage}
			/>
			<div className='salepage__header'>
				<img
					className='banner'
					onLoadStart={() => dispatch(requestLoading())}
					onLoad={() => {
						dispatch(requestUnload())
						onMoveAnimation('pre-loading', 'moveOutOpacity')
					}}
					src={HeaderImg}
					alt='Header'
				/>
				<img className='border-img' src={Border} alt='Border' />
			</div>
			<div className='flex flex-col items-center justify-center w-full sale'>
				<div className='flex flex-col items-center max-w-screen-xl'>
					<div className='sale__title'>PURCHASE PACKAGE</div>
					<div className='sale__package'>
						{boxInfo.map((box, index) => (
							<div
								onClick={() => setActiveBox(index)}
								key={index}
								className={`package__name ${activeBox === index ? 'active' : ''}`}
							>
								<span>{box.title}</span>
							</div>
						))}
					</div>
					<div className='package__info'>
						<div className='package-image'>
							<img className='package' src={boxInfo[activeBox].boxImage} alt='Box' />
							<img className='foot' src={BoxFoot} alt='Dice' />
							<span className='price'>{boxInfo[activeBox].price} BNB</span>
						</div>
						{possibilities ? (
							<div className='peek-inside'>
								<span className='title-warrior'>Warrior Preview</span>
								<div className='warrior-preview'>
									<div className='sexual'>
										{possibilities.gender ? (
											<MaleIcon style={{ color: '#78aec8' }} />
										) : (
											<FemaleIcon style={{ color: '#f28598' }} />
										)}
									</div>
									<div className='container-image'>
										<div className='left'>
											<div className='left-info'>
												<span className='label'>Head</span>
												<span className={`rarity-${possibilities[0]?.parts.head_id.rarity}`}>
													{possibilities[0]?.parts.head_id.name}
												</span>
											</div>
											<div className='left-info'>
												<span className='label'>Right Arm</span>
												<span className={`rarity-${possibilities[0]?.parts.right_arm.rarity}`}>
													{possibilities[0]?.parts.right_arm.name}
												</span>
											</div>
											<div className='left-info'>
												<span className='label'>Right Leg</span>
												<span className={`rarity-${possibilities[0]?.parts.right_leg.rarity}`}>
													{possibilities[0]?.parts.right_leg.name}
												</span>
											</div>
										</div>
										<img src={possibilities[0]?.image} alt='Warrior' />
										<div className='right'>
											<div className='left-info'>
												<span className='label'>Body</span>
												<span className={`rarity-${possibilities[0]?.parts.body_id.rarity}`}>
													{possibilities[0]?.parts.body_id.name}
												</span>
											</div>
											<div className='left-info'>
												<span className='label'>Left Arm</span>
												<span className={`rarity-${possibilities[0]?.parts.left_arm.rarity}`}>
													{possibilities[0]?.parts.left_arm.name}
												</span>
											</div>
											<div className='left-info'>
												<span className='label'>Left Leg</span>
												<span className={`rarity-${possibilities[0]?.parts.left_leg.rarity}`}>
													{possibilities[0]?.parts.left_leg.name}
												</span>
											</div>
										</div>
									</div>
									<div className='addition-info'>
										<span>Drop rate</span>
										<span className='rarity-1'>Common: 80%</span>
										<span className='rarity-2'>Rare: 15%</span>
										<span className='rarity-3'>Epic: 4%</span>
										<span className='rarity-4'>Mystic: 1%</span>
									</div>
								</div>
							</div>
						) : null}
					</div>
					{isConnected ? (
						<div
							onClick={() => onMoveAnimation('buy-overlay', 'moveInOpacity')}
							className='cursor-pointer btn-primary'
						>
							Buy Package
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
			<div className='github-container'>
				<span className='max-w-screen-xl mx-4 title'>RANDOM ALGORITHM</span>
				<span className='max-w-xl subtitle'>
					As for random mechanism, we always want to treat fair for all user. Each packge has the
					equal droping with their price, the more you spend the better you get. For more clarity,
					you can explore it here.
				</span>
				<div
					onClick={() =>
						window.open('https://github.com/thewastedlandsdev/wl-nft-random', '_blank')
					}
					className='cursor-pointer btn-primary'
				>
					Our Github
				</div>
			</div>
		</div>
	)
}
export default SalePage
