/* eslint-disable default-case */
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import IconProgress from 'assets/home/Active.png'
import Btn_Hover from 'assets/home/btn-primary-hover.png'
import BtnArrow from 'assets/home/btn-arrow.png'
import BgVideo2 from 'assets/home/thumbnail_bg.png'
import Diamond from 'assets/logo192.png'
import GameplayIllustration from 'assets/gameplay-illustration.png'
import FeatureIllustration from 'assets/gameplay-illustration2.png'
import BorderAbove from 'assets/home/border-grow-up.png'
import { AnimationWithoutMobile } from 'components'
import { useDispatch } from 'react-redux'
import { requestLoading, requestUnload } from 'services/redux/loading/actions'
import Intro from 'assets/trailer.webm'
import {
	Faction__1,
	Faction__2,
	Faction__3,
	Crabman,
	Octopus,
	Sharkman,
	Bearman,
	Officer,
	Wolfman,
	Worffman_M,
	Eagleman,
	Inter,
	Colonel,
	Master,
	Trainee,
	Trainee_M,
	Assistant,
	Professor,
	Elite,
	Elite_M,
	Veteran,
	Gameplay__1,
	Gameplay__2,
	Gameplay__3,
	Gameplay__4,
	Gameplay__5,
	Gameplay__6,
} from 'assets'

import './Characters.css'

const settings = {
	dots: false,
	infinite: true,
	speed: 800,
	slidesToShow: 3,
	slidesToScroll: 1,
	swipeToSlide: true,
}
const onClickNext = (action) => {
	switch (action) {
		case 'prev': {
			const root = document.querySelector('.character-section .right-side__img .slick-prev')
			root.click()
			break
		}
		case 'next': {
			const root = document.querySelector('.character-section .right-side__img .slick-next')
			root.click()
			break
		}
	}
}
const factionDescription = [
	{
		type: 'Hybrid',
		description:
			'Sheer might is everything to the Orc. Every Orc is born with a muscular body coupled with seemingly never ending strength. On any battlefield, their physical attributes alone terrorize anyone facing them.',
		dropRate: 24.5,
		characters: [
			{
				name: 'Crabman',
				type: 'OceanWalker',
				image: Crabman,
			},
			{
				name: 'Octopus',
				type: 'OceanWalker',
				image: Octopus,
			},
			{
				name: 'Sharkman',
				type: 'OceanWalker',
				image: Sharkman,
			},
			{
				name: 'Bearman',
				type: 'Preytracker',
				image: Bearman,
			},
			{
				name: 'Wolfman',
				type: 'Preytracker',
				image: Wolfman,
			},
			{
				name: 'Wolfman',
				type: 'Preytracker',
				image: Worffman_M,
			},
			{
				name: 'Eagleman',
				type: 'Windrunner',
				image: Eagleman,
			},
		],
	},
	{
		type: 'SUVIVOR',
		description:
			'Shadya had only been dead a few weeks, and already Akshan could feel all traces of her slipping away. That was the hardest facet of his grief—the hoarding of mementos, the scrambling to scrape together whatever remained of his beloved mentor.',
		dropRate: 72.5,
		characters: [
			{
				name: 'Inter',
				type: 'Doctor',
				image: Inter,
			},
			{
				name: 'Colonel',
				type: 'ExSoldier',
				image: Colonel,
			},
			{
				name: 'Master',
				type: 'Farmer',
				image: Master,
			},
			{
				name: 'Trainee',
				type: 'Farmer',
				image: Trainee,
			},
			{
				name: 'Trainee',
				type: 'Farmer',
				image: Trainee_M,
			},
		],
	},
	{
		type: 'EX-COMPANY',
		description:
			'He is highly skilled in the art of stealth combat, able to evade the eyes of his enemies and reappear when they least expect him. With a keen sense of justice and a legendary death-reversing weapon.',
		dropRate: 5.0,
		characters: [
			{
				name: 'Assistant',
				type: 'Scientist',
				image: Assistant,
			},
			{
				name: 'Professor',
				type: 'Scientist',
				image: Professor,
			},
			{
				name: 'Elite',
				type: 'Security',
				image: Elite,
			},
			{
				name: 'Elite',
				type: 'Security',
				image: Elite_M,
			},
			{
				name: 'Officer',
				type: 'Security',
				image: Officer,
			},
			{
				name: 'Veteran',
				type: 'Security',
				image: Veteran,
			},
		],
	},
]
export const Characters = () => {
	const [activeFaction, setActiveFaction] = React.useState(0)
	const dispatch = useDispatch()
	return (
		<div className='section'>
			<div className='flex flex-col items-center justify-center w-full section-2__container'>
				<img src={BorderAbove} alt='Border Above' className='border-image' />
				<div className='w-full max-w-screen-xl overflow-hidden'>
					<div className='flex items-center justify-center w-full h-full character-section'>
						<div className='flex flex-col justify-center w-full h-full max-w-screen-xl overflow-hidden '>
							<AnimationWithoutMobile
								animateIn='animate__fadeInLeft'
								animateOut='animate__fadeOutLeft'
							>
								<span className='title'>NFT Characters</span>
							</AnimationWithoutMobile>
							<div className='flex flex-row items-start justify-start character__content mt-14 '>
								<AnimationWithoutMobile
									animateIn='animate__fadeInLeft'
									animateOut='animate__fadeOutLeft'
								>
									<div className='left-side__text'>
										<span className='block mb-6'>Choose Faction</span>
										<div className='faction-container'>
											<img
												onClick={() => {
													setActiveFaction(0)
												}}
												className={activeFaction === 0 ? 'active__faction' : ''}
												src={Faction__1}
												alt='Faction'
											/>
											<img
												onClick={() => {
													setActiveFaction(1)
												}}
												className={activeFaction === 1 ? 'active__faction' : ''}
												src={Faction__3}
												alt='Faction'
											/>
											<img
												onClick={() => {
													setActiveFaction(2)
												}}
												className={activeFaction === 2 ? 'active__faction' : ''}
												src={Faction__2}
												alt='Faction'
											/>
										</div>
										<span className='mt-6 faction__name'>
											{factionDescription[activeFaction].type}
										</span>
										<span className='mt-2 faction__description'>
											{factionDescription[activeFaction].description}
										</span>
										<div className='mt-2 faction__droprate'>
											Droprate:{' '}
											<span>{factionDescription[activeFaction].dropRate.toString() + '%'}</span>
										</div>
										<div className='mt-14 btn-primary'>
											<a href='/marketplace'>
												<div className='btn-primary_hover'>
													<img src={Btn_Hover} alt='Shadow' />
												</div>
												Go to Marketplace
											</a>
										</div>
									</div>
								</AnimationWithoutMobile>

								<AnimationWithoutMobile
									animateIn='animate__fadeInRight'
									animateOut='animate__fadeOutRight'
								>
									<div className='ml-10 right-side__img'>
										<img
											src={BtnArrow}
											onClick={() => onClickNext('prev')}
											className='btn-arrow'
											id='btn-prev'
											alt='Btn Arrow'
										/>
										<img
											onClick={() => onClickNext('next')}
											src={BtnArrow}
											className='btn-arrow'
											id='btn-next'
											alt='Btn Arrow'
										/>
										<Slider {...settings}>
											{factionDescription[activeFaction].characters.map((character, index) => (
												<div key={index} className='character-container'>
													<video
														loop
														muted
														autoPlay
														playsInline
														onLoadStart={() => dispatch(requestLoading())}
														onLoadedData={() => (index === 3 ? dispatch(requestUnload()) : null)}
														src={character.image}
													/>

													<div className='character__info'>
														<img src={IconProgress} alt='Icon' />
														<span className='character__name'>{character.name}</span>
														<span className='character__major'>{character.type}</span>
														<div className='btn-tertiary'>Buy Character</div>
													</div>
												</div>
											))}
										</Slider>
										<div className='self-center btn-primary'>Marketplace</div>
									</div>
								</AnimationWithoutMobile>
							</div>
						</div>
					</div>
					<AnimationWithoutMobile animateIn='animate__fadeIn' animateOut='animate__fadeOut'>
						<div className='flex flex-col items-center justify-center descript-video'>
							<span className='title'>NFT PLAY TO EARN GAME</span>
							<span className='description-extend'>
								Wasted coin is a new type of game, partially owned and operated by its players. Earn
								WAC tokens by playing and use them to decide the future of the game!
							</span>
							<div className='video-container'>
								<img src={BgVideo2} alt='bg-video' />
								<div className='absolute inset-0 video'>
									<video controls>
										<source src={Intro} type='video/webm' />
										Your browser does not support HTML video.
									</video>
								</div>
							</div>
						</div>
					</AnimationWithoutMobile>
				</div>
				<div className='flex items-center justify-center utilities-section'>
					<div className='flex flex-col justify-center w-full h-full max-w-screen-xl'>
						<div className='flex flex-row items-center justify-between header-container'>
							<div className='flex flex-col'>
								<AnimationWithoutMobile animateIn='animate__fadeInLeft'>
									<span className='title'>OUR TOKEN UTILITIES</span>
									<div className='max-w-sm title__expand'>
										The main token in The Wasted Land Ecosystem is <b>TWL</b>. <b>TWL</b> Token can
										be used in many different ways
									</div>
								</AnimationWithoutMobile>
							</div>
							<img src={Diamond} alt='diamond' />
						</div>
						<AnimationWithoutMobile delay={300} animateIn='animate__fadeIn'>
							<div className='mt-20 grid-utilities'>
								<div className='utilities'>
									<span className='utilities__title'>Exchange</span>
									<span className='utilities__content'>
										Exchange for resources or in-game equipments or land upgrades.
									</span>
								</div>
								<div className='utilities'>
									<span className='utilities__title'>Speed up</span>
									<span className='utilities__content'>Speed up time-gated content.</span>
								</div>
								<div className='utilities'>
									<span className='utilities__title'>TRADING</span>
									<span className='utilities__content'>Mint NFT from in-game heroes/items.</span>
								</div>
								<div className='empty-grid'></div>
								<div className='utilities'>
									<span className='utilities__title'>BREEDING</span>
									<span className='utilities__content'>
										Use to born(mint) next generation hero NFTs
									</span>
								</div>

								<div className='utilities'>
									<span className='utilities__title'>PVP BATTLE</span>
									<span className='utilities__content'>Wage on PvP battles.</span>
								</div>
							</div>
						</AnimationWithoutMobile>
					</div>
				</div>
				<div className='flex items-center justify-center gameplay'>
					<div className='w-full max-w-screen-xl '>
						<div className='front-side'>
							<div className='illustration__container'>
								<AnimationWithoutMobile animateIn='animate__fadeIn' animateOut='animate__fadeOut'>
									<img className='illustration' src={GameplayIllustration} alt='Illustration' />
								</AnimationWithoutMobile>
							</div>

							<div className='title__container'>
								<AnimationWithoutMobile delay={400} animateIn='animate__fadeIn'>
									<span className='title__text'>GamePlay</span>
									<span className='title__expand'>
										All the distinctive gaming features revolving around our ecosystem
									</span>
								</AnimationWithoutMobile>
							</div>
						</div>
						<div className='back-side'>
							<div className='brief-content'>
								<AnimationWithoutMobile delay={400} animateIn='animate__fadeInUp'>
									<div className='flex flex-col items-center justify-start'>
										<img src={Gameplay__3} alt='Brife' />
										<span className='brief__title'>PvP Mode</span>
										<span className='brief__content'>
											Gather your crew, take on an adventure and discover the secret of the
											apocalypse.
										</span>
									</div>
								</AnimationWithoutMobile>
							</div>

							<div className='brief-content'>
								<AnimationWithoutMobile delay={600} animateIn='animate__fadeInUp'>
									<div className='flex flex-col items-center justify-start'>
										<img src={Gameplay__2} alt='Brife' />
										<span className='brief__title'>PvE Mode</span>
										<span className='brief__content'>
											Push your team to higher levels in Tournaments. Compete with real players and
											earn tokens.
										</span>
									</div>
								</AnimationWithoutMobile>
							</div>
							<div className='brief-content'>
								<AnimationWithoutMobile delay={800} animateIn='animate__fadeInUp'>
									<div className='flex flex-col items-center justify-start'>
										<img src={Gameplay__1} alt='Brife' />
										<span className='brief__title'>Mating</span>
										<span className='brief__content'>
											The world first game that allows LGBT to have children. Mating easily with 2
											heroes, regardless of their gender.
										</span>
									</div>
								</AnimationWithoutMobile>
							</div>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-center gameplay feature-section'>
					<div className='w-full max-w-screen-xl '>
						<div className='front-side'>
							<div className='illustration__container'>
								<AnimationWithoutMobile animateIn='animate__fadeIn' animateOut='animate__fadeOut'>
									<img className='illustration' src={FeatureIllustration} alt='Illustration' />
								</AnimationWithoutMobile>
							</div>
							<div className='title__container'>
								<AnimationWithoutMobile animateIn='animate__fadeIn' delay={400}>
									<span className='title__text'>Feature</span>
									<span className='title__expand'>
										All the distinctive gaming features revolving around our ecosystem
									</span>
								</AnimationWithoutMobile>
							</div>
						</div>
						<div className='back-side'>
							<div className='brief-content'>
								<AnimationWithoutMobile delay={400} animateIn='animate__fadeInUp'>
									<div className='flex flex-col items-center justify-start'>
										<img src={Gameplay__4} alt='Brife' />
										<span className='brief__title'>Marketplace</span>
										<span className='brief__content'>
											By joining the game, you can choose to become either a conqueror or a wealthy
											merchant. Marketplace will be a place to connect you with millions
											buyers/sellers.
										</span>
									</div>
								</AnimationWithoutMobile>
							</div>
							<div className='brief-content'>
								<AnimationWithoutMobile delay={600} animateIn='animate__fadeInUp'>
									<div className='flex flex-col items-center justify-start'>
										<img src={Gameplay__5} alt='Brife' />
										<span className='brief__title'>Build your team</span>
										<span className='brief__content'>
											Build your ultimate team and conquer your enemies. Understanding character’s
											strengths and weaknesses, as well as billions of possible genetic
											combinations, the number of strategy you could use is limitless.
										</span>
									</div>
								</AnimationWithoutMobile>
							</div>
							<div className='brief-content'>
								<AnimationWithoutMobile delay={600} animateIn='animate__fadeInUp'>
									<div className='flex flex-col items-center justify-start'>
										<img src={Gameplay__6} alt='Brife' />
										<span className='brief__title'>Expand your shelter</span>
										<span className='brief__content'>
											In near future, there will be a place where you could call the second home.
											Combining with your characters, there will be new gameplay and new surprise
											rewards for you.
										</span>
									</div>
								</AnimationWithoutMobile>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
