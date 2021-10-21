import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import BannerGif from 'assets/home/banner.mp4'
import BannerPoster from 'assets/home/bg.png'
import { onMoveAnimation } from 'services/useDevelopUI'
import 'video-react/dist/video-react.css'

import './Banner.css'

export const Banner = () => {
	React.useEffect(() => {
		const root = document.querySelector('.banner-home video')
		if (root) {
			root.addEventListener('loadeddata', () => {
				root.play()
				onMoveAnimation('pre-loading', 'moveOutOpacity')
			})
		}
		setTimeout(() => onMoveAnimation('pre-loading', 'moveOutOpacity'), 20000)
	}, [])
	return (
		<div className='banner-home section'>
			<div
				dangerouslySetInnerHTML={{
					__html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${BannerGif}"
          poster="${BannerPoster}"
        />,
      `,
				}}
			></div>

			<div className='banner-content'>
				<AnimationOnScroll animateIn='animate__fadeInUp'>
					<h1>WASTED LANDS</h1>
				</AnimationOnScroll>
				<AnimationOnScroll delay={600} animateIn='animate__fadeInUp'>
					<span>Team up and rule the new world.</span>
				</AnimationOnScroll>
				<AnimationOnScroll delay={1000} animateIn='animate__fadeInUp'>
					<div className='flex flex-row mt-4 cursor-pointer btn-container'>
						<div
							onClick={() => window.open('https://discord.gg/YrmJgFY8gK', '_blank')}
							className='mr-4 btn-primary'
						>
							Join Discord
						</div>
						<div
							onClick={() =>
								window.open(
									'https://gleam.io/oqFVi/the-wasted-lands-community-airdrop-of-20000',
									'_blank'
								)
							}
							className='ml-4 cursor-pointer btn-secondary'
						>
							Join Airdrop
						</div>
					</div>
				</AnimationOnScroll>
			</div>
		</div>
	)
}
