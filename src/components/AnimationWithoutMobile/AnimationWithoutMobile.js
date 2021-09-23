import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export const AnimationWithoutMobile = ({ children, animateIn, animateOut, delay = 0 }) => {
	if (window.innerWidth >= 1280) {
		return (
			<AnimationOnScroll animateOnce={true} animateIn={animateIn} delay={delay}>
				{children}
			</AnimationOnScroll>
		)
	}
	return children
}
