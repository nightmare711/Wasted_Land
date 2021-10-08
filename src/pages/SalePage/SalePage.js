import React from 'react'
import { BoxGold, HeaderImg, BoxRare, BoxEpic } from 'assets/sale'
import { onMoveAnimation } from 'services/useDevelopUI'
import { Male as MaleIcon } from '@mui/icons-material'
import BorderIcon from 'assets/home/Active.png'
import Character from 'assets/sale/character__temp.png'
import Slider from 'react-slick'
import './SalePage.css'

const characterInfo = [
	{
		title: 'Wind Runner',
		subtitle: 'Eagle man',
		image: Character,
		stats: {
			common: 1,
			rare: 2,
			epic: 3,
			mystic: 4,
		},
	},
	{
		title: 'Wind Runner',
		subtitle: 'Eagle man',
		image: Character,
		stats: {
			common: 1,
			rare: 2,
			epic: 3,
			mystic: 4,
		},
	},
	{
		title: 'Wind Runner',
		subtitle: 'Eagle man',
		image: Character,
		stats: {
			common: 1,
			rare: 2,
			epic: 3,
			mystic: 4,
		},
	},
	{
		title: 'Wind Runner',
		subtitle: 'Eagle man',
		image: Character,
		stats: {
			common: 1,
			rare: 2,
			epic: 3,
			mystic: 4,
		},
	},
	{
		title: 'Wind Runner',
		subtitle: 'Eagle man',
		image: Character,
		stats: {
			common: 1,
			rare: 2,
			epic: 3,
			mystic: 4,
		},
	},
	{
		title: 'Wind Runner',
		subtitle: 'Eagle man',
		image: Character,
		stats: {
			common: 1,
			rare: 2,
			epic: 3,
			mystic: 4,
		},
	},
	{
		title: 'Wind Runner',
		subtitle: 'Eagle man',
		image: Character,
		stats: {
			common: 1,
			rare: 2,
			epic: 3,
			mystic: 4,
		},
	},
	{
		title: 'Wind Runner',
		subtitle: 'Eagle man',
		image: Character,
		stats: {
			common: 1,
			rare: 2,
			epic: 3,
			mystic: 4,
		},
	},
]

const boxInfo = [
	{
		title: 'Plastic Package',
		boxImage: BoxRare,
		price: 0.15,
	},
	{
		title: 'Steel Package',
		boxImage: BoxEpic,
		price: 0.2,
	},
	{
		title: 'Gold Package',
		boxImage: BoxGold,
		price: 0.3,
	},
	{
		title: 'Diamond Package',
		boxImage: BoxEpic,
		price: 0.4,
	},
	{
		title: 'Diamond Package',
		boxImage: BoxEpic,
		price: 0.4,
	},
]

const settings = {
	dots: true,
	infinite: true,
	speed: 800,
	slidesToShow: 4,
	slidesToScroll: 1,
	swipeToSlide: true,
}

export const SalePage = () => {
	const [activeBox, setActiveBox] = React.useState(0)
	return (
		<div className='flex flex-col items-center justify-between salepage'>
			<div className='salepage__header'>
				<img
					onLoad={() => onMoveAnimation('pre-loading', 'moveOutOpacity')}
					src={HeaderImg}
					alt='Header'
				/>
				<div className='header__title'>
					<span>Get Characters</span>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center sale'>
				<div className='flex flex-col max-w-screen-xl'>
					<div className='sale__title'>PURCHASE PACKAGE</div>
					<div className='flex flex-row sale__side'>
						<div className='sale__left'>
							<div className='flex flex-row sale__box'>
								<Slider {...settings}>
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
								</Slider>
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
								<div className='btn-secondary'>Refresh</div>
								<div className='characters'>
									{characterInfo.map((info) => (
										<div className='character'>
											<div className='character__sex male'>
												<MaleIcon />
											</div>
											<div className='flex items-center justify-center'>
												<img src={info.image} alt='character' className='character__img' />
											</div>
											<div className='character__stats'>
												<div className='stat__common'>
													Common <span>{info.stats.common}</span>
												</div>
												<div className='stat__rare'>
													Rare <span>{info.stats.rare}</span>
												</div>
												<div className='stat__epic'>
													Epic <span>{info.stats.epic}</span>
												</div>
												<div className='stat__mystic'>
													Mystic <span>{info.stats.mystic}</span>
												</div>
											</div>
											<div className='character__description'>
												<img src={BorderIcon} alt='Active' />
												<span className='description__title'>{info.title}</span>
												<span className='description__subtitle'>{info.subtitle}</span>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className='flex flex-col items-center justify-center sale__right'>
							<img src={boxInfo[activeBox].boxImage} alt='Box Epic' />
							<div className='btn-primary'>Buy this package</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
