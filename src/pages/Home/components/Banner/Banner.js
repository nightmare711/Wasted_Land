import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import BannerGif from 'assets/home/banner.mp4'
import BannerPoster from 'assets/home/bg.jpeg'
import { onMoveAnimation } from 'services/useDevelopUI'
import BannerGradient from 'assets/home/banner__gradient.png'
import './Banner.css'

export const Banner = () => {
	return (
		<div className='banner-home section'>
			<div className='banner__container'>
				{window.innerWidth > 450 ? (
					<video
						onLoadedData={() => onMoveAnimation('pre-loading', 'moveOutOpacity')}
						loop
						muted
						autoPlay
						playsInline
						type='video/mp4'
						src={BannerGif}
					/>
				) : (
					<img
						onLoad={() => onMoveAnimation('pre-loading', 'moveOutOpacity')}
						src={BannerPoster}
						alt='Banner'
					/>
				)}
				<img className='banner__gradient' src={BannerGradient} alt='Gradient' />
			</div>

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
							onClick={() => window.open('https://discord.gg/thewastedlands', '_blank')}
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
