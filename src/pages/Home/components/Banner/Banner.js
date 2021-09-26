import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import BannerGif from 'assets/home/banner.webm'
import BannerPoster from 'assets/home/bg.png'
import { onMoveAnimation } from 'services/useDevelopUI'

import 'react-html5video/dist/styles.css'
import './Banner.css'

export const Banner = () => {
	React.useEffect(() => {
		setTimeout(() => onMoveAnimation('pre-loading', 'moveOutOpacity'), 20000)
	}, [])
	return (
		<div className='banner-home section'>
			<video
				autoPlay={true}
				loop={true}
				controls={false}
				playsInline
				muted
				poster={BannerPoster}
				onLoadedData={() => {
					onMoveAnimation('pre-loading', 'moveOutOpacity')
				}}
				preload='none'
			>
				<source type='video/webm' src={BannerGif} />
				Sorry, your browser doesn't support embedded videos.
			</video>
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
