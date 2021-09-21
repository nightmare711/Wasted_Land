import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import './Banner.css'

export const Banner = () => {
	return (
		<div className='banner-home section'>
			<div className='banner-content'>
				<AnimationOnScroll animateOut='animate__fadeOutDown' animateIn='animate__fadeInUp'>
					<h1>WASTED LANDS</h1>
				</AnimationOnScroll>
				<AnimationOnScroll
					animateOut='animate__fadeOutDown'
					delay={600}
					animateIn='animate__fadeInUp'
				>
					<span>NFT Post Appocalypse Game</span>
				</AnimationOnScroll>
				<AnimationOnScroll
					animateOut='animate__fadeOutDown'
					delay={1000}
					animateIn='animate__fadeInUp'
				>
					<div className='flex flex-row mt-4'>
						<div className='mr-4 btn-primary'>Buy Character</div>
						<div className='ml-4 btn-secondary'>Buy Character</div>
					</div>
				</AnimationOnScroll>
			</div>
		</div>
	)
}
