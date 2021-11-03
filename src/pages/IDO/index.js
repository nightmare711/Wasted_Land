import React from 'react'
import { Banner, Axe, BannerPoster, Bg_Bottom } from 'assets/ido'
import { OBJModel, DirectionLight } from 'react-3d-viewer'
import { onMoveAnimation } from 'services/useDevelopUI'
import Obj from 'assets/ido/WLCoin.obj'
import './IDO.css'

export const IDOPage = () => {
	return (
		<div className='ido-page'>
			{window.innerWidth > 850 ? (
				<video
					className='banner'
					onLoadedData={() => onMoveAnimation('pre-loading', 'moveOutOpacity')}
					loop
					muted
					autoPlay
					playsInline
					type='video/mp4'
					src={Banner}
					poster={BannerPoster}
				/>
			) : (
				<img
					className='banner'
					onLoad={() => onMoveAnimation('pre-loading', 'moveOutOpacity')}
					src={BannerPoster}
					alt='Banner'
				/>
			)}
			<OBJModel
				width='1000'
				height='1000'
				position={{ x: 0, y: 0, z: 0 }}
				src={Obj}
				onLoad={() => {
					console.log('Loading')
				}}
				onProgress={(xhr) => {
					console.log('Loaded')
				}}
			>
				<DirectionLight color={0xffffff} />
				<DirectionLight position={{ x: 180, y: 100, z: 100 }} color={0xffffff} />
			</OBJModel>
			<div className='flex items-center justify-center ido-bottom'>
				<img className='bg-bottom' src={Bg_Bottom} alt='Background' />
				<div className='flex items-center justify-center w-full max-w-screen-xl ido-container'>
					<div className='w-full ido-content'>
						<img className='ido-axe' src={Axe} alt='Axe' />
						<span className='title'>IDO Page</span>
						<span className='content'>
							It is a long established fact that a reader will be distracted by the readable content
							of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
							more-or-less normal distribution of letters, as opposed to using 'Content here,
							content here', making it look like readable English. Many desktop publishing packages
							and web page editors now use Lorem Ipsum as their default model text, and a search for
							'lorem ipsum' will uncover many web sites still in their infancy. Various versions
							have evolved over the years, sometimes by accident, sometimes on purpose (injected
							humour and the like).It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The point of using Lorem
							Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
							using 'Content here, content here', making it look like readable English. Many desktop
							publishing packages and web page editors now use Lorem Ipsum as their default model
							text, and a search for 'lorem ipsum' will uncover many web sites still in their
							infancy. Various versions have evolved over the years, sometimes by accident,
							sometimes on purpose (injected humour and the like). It is a long established fact
							that a reader will be distracted by the readable content of a page when looking at its
							layout. The point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using 'Content here, content here', making it
							look like readable English. Many desktop publishing packages and web page editors now
							use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
							uncover many web sites still in their infancy. Various versions have evolved over the
							years, sometimes by accident, sometimes on purpose (injected humour and the like).
						</span>
						<div className='flex flex-row mt-8 btn-container'>
							<div className='mr-4 btn-primary'>Join Us</div>
							<div className='btn-secondary'>Join Airdrop</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default IDOPage
