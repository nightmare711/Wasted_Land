import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import BannerGif from 'assets/home/banner.webm'
import BannerPoster from 'assets/home/bg.png'
import { DefaultPlayer as Video } from 'react-html5video'
import { onMoveAnimation } from 'services/useDevelopUI'

import 'react-html5video/dist/styles.css'
import './Banner.css'

export const Banner = () => {
	return (
		<div className='banner-home section'>
			<Video
				autoplay='autoplay'
				loop='loop'
				muted
				defaultMuted
				playsinline
				oncontextmenu='return false;'
				preload='auto'
				controls={false}
				poster={BannerPoster}
				onLoadedData={() => {
					onMoveAnimation('pre-loading', 'moveOutOpacity')
				}}
			>
				<source src={BannerGif} type='video/webm' />
			</Video>
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
