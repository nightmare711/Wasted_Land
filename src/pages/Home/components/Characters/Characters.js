/* eslint-disable default-case */
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import IconProgress from 'assets/home/Active.png'
import Btn_Hover from 'assets/home/btn-primary-hover.png'
import BtnArrow from 'assets/home/btn-arrow.png'
import BgVideo2 from 'assets/home/thumbnail_bg.png'
import { Link } from 'react-router-dom'
import Diamond from 'assets/logo192.png'
import GameplayIllustration from 'assets/gameplay-illustration.png'
import FeatureIllustration from 'assets/gameplay-illustration2.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import BorderAbove from 'assets/home/border-grow-up.png'
import { AnimationWithoutMobile, VideoContainer, YoutubeEmbed } from 'components'
import { onMoveAnimation } from 'services/useDevelopUI'
import { useDispatch } from 'react-redux'
import { requestLoading, requestUnload } from 'services/redux/loading/actions'
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
	CrabmanImage,
	OctopusImage,
	SharkmanImage,
	BearmanImage,
	OfficerImage,
	WolfmanImage,
	Worffman_MImage,
	EaglemanImage,
	InterImage,
	ColonelImage,
	MasterImage,
	TraineeImage,
	Trainee_MImage,
	AssistantImage,
	ProfessorImage,
	EliteImage,
	Elite_MImage,
	VeteranImage,
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
	speed: 400,
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
		type: 'HYBRIDS',
		description:
			'Those who adapted to the virus became mutants. They are much faster, stronger and some extremely dangerous.',
		dropRate: 24.5,
		characters: [
			{
				name: 'Crabman',
				type: 'OceanWalker',
				image: Crabman,
				static: CrabmanImage,
			},
			{
				name: 'Octopus',
				type: 'OceanWalker',
				image: Octopus,
				static: OctopusImage,
			},
			{
				name: 'Sharkman',
				type: 'OceanWalker',
				image: Sharkman,
				static: SharkmanImage,
			},
			{
				name: 'Bearman',
				type: 'Preytracker',
				image: Bearman,
				static: BearmanImage,
			},
			{
				name: 'Wolfman',
				type: 'Preytracker',
				image: Wolfman,
				static: WolfmanImage,
			},
			{
				name: 'Wolfman',
				type: 'Preytracker',
				image: Worffman_M,
				static: Worffman_MImage,
			},
			{
				name: 'Eagleman',
				type: 'Windrunner',
				image: Eagleman,
				static: EaglemanImage,
			},
		],
	},
	{
		type: 'SURVIVORS',
		description:
			'Those who are not infected by the virus know that they must gather in small communities to survive. They’ve learnt to defend themselves.',
		dropRate: 72.5,
		characters: [
			{
				name: 'Inter',
				type: 'Doctor',
				image: Inter,
				static: InterImage,
			},
			{
				name: 'Colonel',
				type: 'ExSoldier',
				image: Colonel,
				static: ColonelImage,
			},
			{
				name: 'Master',
				type: 'Farmer',
				image: Master,
				static: MasterImage,
			},
			{
				name: 'Trainee',
				type: 'Farmer',
				image: Trainee,
				static: TraineeImage,
			},
			{
				name: 'Trainee',
				type: 'Farmer',
				image: Trainee_M,
				static: Trainee_MImage,
			},
		],
	},
	{
		type: 'EX-COMPANY',
		description:
			'Those who escaped from The Company knows the secret of the pandemic and the cure. They hold the key to unveil the truth.',
		dropRate: 5.0,
		characters: [
			{
				name: 'Assistant',
				type: 'Scientist',
				image: Assistant,
				static: AssistantImage,
			},
			{
				name: 'Professor',
				type: 'Scientist',
				image: Professor,
				static: ProfessorImage,
			},
			{
				name: 'Elite',
				type: 'Security',
				image: Elite,
				static: EliteImage,
			},
			{
				name: 'Elite',
				type: 'Security',
				image: Elite_M,
				static: Elite_MImage,
			},
			{
				name: 'Officer',
				type: 'Security',
				image: Officer,
				static: OfficerImage,
			},
			{
				name: 'Veteran',
				type: 'Security',
				image: Veteran,
				static: VeteranImage,
			},
		],
	},
]
export const Characters = () => {
	const [activeFaction, setActiveFaction] = React.useState(0)
	const dispatch = useDispatch()
	const [activeVideo, setActiveVideo] = React.useState('')
	return (
		<div className='section'>
			<div className='flex flex-col items-center justify-center w-full section-2__container'>
				{activeVideo ? (
					<VideoContainer
						embedId={activeVideo}
						onClose={() => {
							onMoveAnimation('video-embed', 'moveOutOpacity')
							setActiveVideo('')
						}}
					/>
				) : null}
				<img src={BorderAbove} alt='Border Above' className='border-image' />
				<div className='w-full max-w-screen-xl overflow-hidden'>
					<div className='flex items-center justify-center w-full h-full character-section'>
						<div className='flex flex-col justify-center w-full h-full max-w-screen-xl overflow-hidden '>
							<AnimationWithoutMobile
								animateIn='animate__fadeInLeft'
								animateOut='animate__fadeOutLeft'
							>
								<span className='title'>NFT Warriors</span>
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
												src={Faction__2}
												alt='Faction'
											/>
											<img
												onClick={() => {
													setActiveFaction(1)
												}}
												className={activeFaction === 1 ? 'active__faction' : ''}
												src={Faction__1}
												alt='Faction'
											/>
											<img
												onClick={() => {
													setActiveFaction(2)
												}}
												className={activeFaction === 2 ? 'active__faction' : ''}
												src={Faction__3}
												alt='Faction'
											/>
										</div>
										<span className='mt-6 faction__name'>
											{factionDescription[activeFaction].type}
										</span>
										<span className='mt-2 faction__description'>
											{factionDescription[activeFaction].description}
										</span>
										<Link to='/summon-warriors'>
											<div className='mt-14 btn-primary'>
												<div className='btn-primary_hover'>
													<img src={Btn_Hover} alt='Shadow' />
												</div>
												Summon Warriors
											</div>
										</Link>
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
													{window.innerWidth > 850 ? (
														<video
															loop
															muted
															autoPlay
															playsInline
															onLoadStart={() => dispatch(requestLoading())}
															onLoadedData={() => (index === 3 ? dispatch(requestUnload()) : null)}
															src={character.image}
														/>
													) : (
														<img
															className='character__image'
															src={character.static}
															alt='Character'
														/>
													)}

													<div className='character__info'>
														<img src={IconProgress} alt='Icon' />
														<span className='character__name'>{character.name}</span>
														<span className='character__major'>{character.type}</span>
														<Link to='/summon-warriors'>
															<div className='btn-tertiary'>Warrior</div>
														</Link>
													</div>
												</div>
											))}
										</Slider>
										<Link to='/summon-warriors'>
											<div className='self-center btn-primary'>Summon Warriors</div>
										</Link>
									</div>
								</AnimationWithoutMobile>
							</div>
						</div>
					</div>
					<AnimationWithoutMobile animateIn='animate__fadeIn' animateOut='animate__fadeOut'>
						<div className='flex flex-col items-center justify-center descript-video'>
							<span className='title'>THE POST-APOCALYPTIC WORLD</span>
							<span className='description-extend'>
								Gather your warriors, explore the new world of fury and disorder, build your
								shelters, communities, equipments and vehicles. All in one game.
							</span>
							<div className='video-container'>
								<img src={BgVideo2} alt='bg-video' />
								<div className='absolute inset-0 video'>
									<YoutubeEmbed embedId='XZr5wZCyxic' />
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
									<div className='max-w-lg title__expand'>
										There will be 2 tokens in Wasted Lands Ecosystem: <b>$WAL & $WAS.</b> <br />{' '}
										<b>$WAL</b> is the main governance token, will be used for capture value of the
										project and <b>$WAS</b> is utilities token will used for game rewards.
									</div>
								</AnimationWithoutMobile>
							</div>
							<img src={Diamond} alt='diamond' />
						</div>
						<AnimationWithoutMobile delay={300} animateIn='animate__fadeIn'>
							<div className='mt-20 grid-utilities'>
								<div className='utilities'>
									<span className='utilities__title'>BUY/RENT</span>
									<span className='utilities__content'>
										Players can use WAL to buy or rent NFT warriors on our marketplace.
									</span>
								</div>
								<div className='utilities'>
									<span className='utilities__title'>STAKING</span>
									<span className='utilities__content'>
										Stake WAL to earn more rewards in WAS or others NFT items in-game.
									</span>
								</div>
								<div className='utilities'>
									<span className='utilities__title'>MERCHANDISE</span>
									<span className='utilities__content'>
										WAL will be used to buy exclusive merchanside & auction for different NFT game
										assets.
									</span>
								</div>
								<div className='utilities'>
									<span className='utilities__title'>FUSE/BREEDING</span>
									<span className='utilities__content'>
										The next generation of NFTs warrior will be minted using WAL token as a main
										fee.
									</span>
								</div>
								<div className='utilities'>
									<span className='utilities__title'>PVP BATTLE</span>
									<span className='utilities__content'>
										Rewards for who win PvP battle and game tournaments.
									</span>
								</div>

								<div className='utilities'>
									<span className='utilities__title'>GOVERNANCE</span>
									<span className='utilities__content'>
										Players can vote for their team to gain the most game benefits.
									</span>
								</div>
							</div>
						</AnimationWithoutMobile>
					</div>
				</div>
				<div className='flex items-center justify-center gameplay'>
					<div className='w-full max-w-screen-xl '>
						<div className='front-side'>
							<div
								onClick={() => {
									setActiveVideo('5u2No7aG0ec')
								}}
								className='cursor-pointer illustration__container'
							>
								<AnimationWithoutMobile animateIn='animate__fadeIn' animateOut='animate__fadeOut'>
									<img className='illustration' src={GameplayIllustration} alt='Illustration' />
									<div className='btn-play'>
										<PlayArrowIcon />
									</div>
								</AnimationWithoutMobile>
							</div>

							<div className='title__container'>
								<AnimationWithoutMobile delay={400} animateIn='animate__fadeIn'>
									<span className='title__text'>GamePlay</span>
									<span className='title__expand'>
										A combination of classic Match-3 and Role-playing.
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
											Push your team to higher levels in Tournaments. Compete with real players and
											earn tokens.
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
											Gather your crew, take on an adventure and discover the secret of the
											apocalypse.
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
									<span className='title__text'>Features</span>
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
