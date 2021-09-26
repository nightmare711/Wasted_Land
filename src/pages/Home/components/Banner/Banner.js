import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import BannerGif from 'assets/home/banner.webm'
import BannerPoster from 'assets/home/bg.png'
import { onMoveAnimation } from 'services/useDevelopUI'
import { Player, ControlBar, VolumeMenuButton } from 'video-react'
import 'video-react/dist/video-react.css'

import './Banner.css'

export const Banner = () => {
	React.useEffect(() => {
		const root = document.querySelector('.banner-home video')
		if (root) {
			root.addEventListener('loadeddata', () => {
				onMoveAnimation('pre-loading', 'moveOutOpacity')
			})
		}
		setTimeout(() => onMoveAnimation('pre-loading', 'moveOutOpacity'), 20000)
	}, [])
	return (
		<div className='banner-home section'>
			<Player playsInline loop muted autoPlay src={BannerGif} poster={BannerPoster}>
				<ControlBar autoHide={true} disableDefaultControls>
					<VolumeMenuButton />
					<VolumeMenuButton vertical />
				</ControlBar>
			</Player>
			<div className='banner-content'>
				<AnimationOnScroll animateIn='animate__fadeInUp'>
					<h1>WASTED LANDS</h1>
				</AnimationOnScroll>
				<AnimationOnScroll delay={600} animateIn='animate__fadeInUp'>
					<span>NFT Post Appocalypse Game</span>
				</AnimationOnScroll>
				<AnimationOnScroll delay={1000} animateIn='animate__fadeInUp'>
					<div className='flex flex-row mt-4 btn-container'>
						<div className='mr-4 btn-primary'>Buy Character</div>
						<div className='ml-4 btn-secondary'>Buy Character</div>
					</div>
				</AnimationOnScroll>
			</div>
		</div>
	)
}
