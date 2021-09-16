/* eslint-disable default-case */
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import IconProgress from 'assets/home/Active.png'
import Btn_Hover from 'assets/home/btn-primary-hover.png'
import BtnArrow from 'assets/home/btn-arrow.png'
import BgVideo1 from 'assets/home/bg-video.png'
import BgVideo2 from 'assets/home/bg-video2.png'
import Diamond from 'assets/home/diamond.png'
import GameplayIllustration from 'assets/gameplay-illustration.png'
import FeatureIllustration from 'assets/gameplay-illustration2.png'
import BorderAbove from 'assets/home/border-grow-up.png'
import { YoutubeEmbed } from 'components'
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

export const Characters = () => {
	return (
		<div className='section'>
			<div className='flex flex-col items-center justify-center w-full section-2__container'>
				<img src={BorderAbove} alt='Border Above' className='border-image' />
				<div className='w-full max-w-screen-xl overflow-hidden'>
					<div className='flex items-center justify-center w-full h-full character-section'>
						<div className='flex flex-col justify-center w-full h-full max-w-screen-xl overflow-hidden '>
							<span className='title'>NFT Characters</span>
							<div className='flex flex-row items-start justify-start character__content mt-14 '>
								<div className='left-side__text'>
									<span className='block mb-6'>Choose Faction</span>
									<div className='faction-container'>
										<img src='https://picsum.photos/200' alt='Faction' />
										<img src='https://picsum.photos/200' alt='Faction' />
										<img src='https://picsum.photos/200' alt='Faction' />
									</div>
									<span className='mt-6 faction__name'>HyBrid</span>
									<span className='mt-2 faction__description'>
										Sheer might is everything to the Orc. Every Orc is born with a muscular body
										coupled with seemingly never ending strength. On any battlefield, their physical
										attributes alone terrorize anyone facing them.
									</span>
									<div className='mt-2 faction__droprate'>
										Droprate: <span>24.5%</span>
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
										<div className='character-container'>
											<img src='https://picsum.photos/200' alt='Character' />
											<div className='character__info'>
												<img src={IconProgress} alt='Icon' />
												<span className='character__name'>Assistant</span>
												<span className='character__major'>Scientist</span>
												<div className='btn-tertiary'>Buy Character</div>
											</div>
										</div>
										<div className='character-container'>
											<img src='https://picsum.photos/200' alt='Character' />
											<div className='character__info'>
												<img src={IconProgress} alt='Icon' />
												<span className='character__name'>Assistant</span>
												<span className='character__major'>Scientist</span>
												<div className='btn-tertiary'>Buy Character</div>
											</div>
										</div>
										<div className='character-container'>
											<img src='https://picsum.photos/200' alt='Character' />
											<div className='character__info'>
												<img src={IconProgress} alt='Icon' />
												<span className='character__name'>Assistant</span>
												<span className='character__major'>Scientist</span>
												<div className='btn-tertiary'>Buy Character</div>
											</div>
										</div>
										<div className='character-container'>
											<img src='https://picsum.photos/200' alt='Character' />
											<div className='character__info'>
												<img src={IconProgress} alt='Icon' />
												<span className='character__name'>Assistant</span>
												<span className='character__major'>Scientist</span>
												<div className='btn-tertiary'>Buy Character</div>
											</div>
										</div>
										<div className='character-container'>
											<img src='https://picsum.photos/200' alt='Character' />
											<div className='character__info'>
												<img src={IconProgress} alt='Icon' />
												<span className='character__name'>Assistant</span>
												<span className='character__major'>Scientist</span>
												<div className='btn-tertiary'>Buy Character</div>
											</div>
										</div>
										<div className='character-container'>
											<img src='https://picsum.photos/200' alt='Character' />
											<div className='character__info'>
												<img src={IconProgress} alt='Icon' />
												<span className='character__name'>Assistant</span>
												<span className='character__major'>Scientist</span>
												<div className='btn-tertiary'>Buy Character</div>
											</div>
										</div>
									</Slider>
									<div className='self-center btn-primary'>Marketplace</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center descript-video'>
						<span className='title'>NFT PLAY TO EARN GAME</span>
						<span className='description-extend'>
							Wasted coin is a new type of game, partially owned and operated by its players. Earn
							WAC tokens by playing and use them to decide the future of the game!
						</span>
						<div className='video-container'>
							<img src={BgVideo2} alt='bg-video' />
							<img src={BgVideo1} alt='bg-video' />
							<div className='absolute inset-0 video'>
								<YoutubeEmbed embedId={'bc4q5elBEBE'} />
							</div>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-center utilities-section'>
					<div className='flex flex-col justify-center w-full h-full max-w-screen-xl'>
						<div className='flex flex-row items-center justify-between header-container'>
							<div className='flex flex-col'>
								<span className='title'>OUR TOKEN UTILITIES</span>
								<div className='max-w-sm title__expand'>
									The main token in The Wasted Land Ecosystem is <b>TWL</b>. <b>TWL</b> Token can be
									used in many different ways
								</div>
							</div>
							<img src={Diamond} alt='diamond' />
						</div>
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
					</div>
				</div>
				<div className='flex items-center justify-center gameplay'>
					<div className='w-full max-w-screen-xl '>
						<div className='front-side'>
							<div className='illustration__container'>
								<img className='illustration' src={GameplayIllustration} alt='Illustration' />
							</div>
							<div className='title__container'>
								<span className='title__text'>GamePlay</span>
								<span className='title__expand'>
									All the distinctive gaming features revolving around our ecosystem
								</span>
							</div>
						</div>
						<div className='back-side'>
							<div className='brief-content'>
								<img src='https://picsum.photos/200' alt='Brife' />
								<span className='brief__title'>PvP Mode</span>
								<span className='brief__content'>
									Gather your crew, take on an adventure and discover the secret of the apocalypse.
								</span>
							</div>
							<div className='brief-content'>
								<img src='https://picsum.photos/200' alt='Brife' />
								<span className='brief__title'>PvE Mode</span>
								<span className='brief__content'>
									Push your team to higher levels in Tournaments. Compete with real players and earn
									tokens.
								</span>
							</div>
							<div className='brief-content'>
								<img src='https://picsum.photos/200' alt='Brife' />
								<span className='brief__title'>Mating</span>
								<span className='brief__content'>
									The world first game that allows LGBT to have children. Mating easily with 2
									heroes, regardless of their gender.
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-center gameplay feature-section'>
					<div className='w-full max-w-screen-xl '>
						<div className='front-side'>
							<div className='illustration__container'>
								<img className='illustration' src={FeatureIllustration} alt='Illustration' />
							</div>
							<div className='title__container'>
								<span className='title__text'>Feature</span>
								<span className='title__expand'>
									All the distinctive gaming features revolving around our ecosystem
								</span>
							</div>
						</div>
						<div className='back-side'>
							<div className='brief-content'>
								<img src='https://picsum.photos/200' alt='Brife' />
								<span className='brief__title'>Marketplace</span>
								<span className='brief__content'>
									By joining the game, you can choose to become either a conqueror or a wealthy
									merchant. Marketplace will be a place to connect you with millions buyers/sellers.
								</span>
							</div>
							<div className='brief-content'>
								<img src='https://picsum.photos/200' alt='Brife' />
								<span className='brief__title'>Build your team</span>
								<span className='brief__content'>
									Build your ultimate team and conquer your enemies. Understanding character’s
									strengths and weaknesses, as well as billions of possible genetic combinations,
									the number of strategy you could use is limitless.
								</span>
							</div>
							<div className='brief-content'>
								<img src='https://picsum.photos/200' alt='Brife' />
								<span className='brief__title'>Expand your shelter</span>
								<span className='brief__content'>
									In near future, there will be a place where you could call the second home.
									Combining with your characters, there will be new gameplay and new surprise
									rewards for you.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
