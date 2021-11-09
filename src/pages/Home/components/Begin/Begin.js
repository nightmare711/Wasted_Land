import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import CharacterStrip from 'assets/home/character_strip.png'
import './Begin.css'

export const Begin = () => {
	return (
		<div className='flex flex-col items-center justify-center begin-section'>
			<AnimationOnScroll animateOnce={true} animateIn='animate__fadeInLeftBig'>
				<span className='sub-title'>It's time to</span>
			</AnimationOnScroll>
			<AnimationOnScroll animateOnce={true} animateIn='animate__fadeInRightBig'>
				<div className='title'>BUILD YOUR TEAM</div>
			</AnimationOnScroll>
			<span className='text-center title-secondary'>
				<AnimationOnScroll animateOnce={true} animateIn='animate__fadeInLeftBig'>
					Collect Your <span className='text-center'>NFT warriors</span>
				</AnimationOnScroll>
			</span>
			<div className='character__strip'>
				<img src={CharacterStrip} alt='Strip' />
			</div>
		</div>
	)
}
