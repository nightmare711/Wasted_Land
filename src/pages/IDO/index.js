import React from 'react'
import { Banner, Axe } from 'assets/ido'
import { onMoveAnimation } from 'services/useDevelopUI'
import './IDO.css'

export const IDOPage = () => {
	return (
		<div className='ido-page'>
			<img
				onLoad={() => onMoveAnimation('pre-loading', 'moveOutOpacity')}
				className='banner'
				src={Banner}
				alt='Banner'
			/>
			<div className='flex items-center justify-center ido-bottom'>
				<div className='flex items-center justify-center w-full max-w-screen-xl'>
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
					</div>
				</div>
			</div>
		</div>
	)
}

export default IDOPage
