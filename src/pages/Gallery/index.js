import React from 'react'
import { Art1, Art2, Art3 } from 'assets/gallery'
import { onMoveAnimation } from 'services/useDevelopUI'
import './Gallery.css'

const GalleryImage = [Art1, Art2, Art3, Art1]

export const Gallery = () => {
	const [activeImage, setActiveImage] = React.useState(1)
	console.log('active', activeImage)
	return (
		<div
			onWheel={(e) => {
				if (e.deltaY < 0) {
					if (activeImage === 0) {
						setActiveImage(GalleryImage.length - 1)
					} else {
						setActiveImage(activeImage - 1)
					}
				} else {
					if (activeImage === GalleryImage.length - 1) {
						setActiveImage(0)
					} else {
						setActiveImage(activeImage + 1)
					}
				}
			}}
			className='flex items-center justify-center gallery-container'
		>
			<div className='flex flex-row w-full max-w-screen-xl gallery'>
				<div className='gallery__left'>
					<span className='title'>Gallery</span>
					<ul>
						<li>Enviroments</li>
						<li>Characters</li>
						<li>3D Assets</li>
					</ul>
				</div>
				<div className='gallery__right'>
					{GalleryImage.map((src, index) => (
						<img
							className={`${
								activeImage === index
									? 'active'
									: activeImage - 1 === index
									? 'pre-active'
									: activeImage + 1 === index
									? 'next-active'
									: ''
							}`}
							onLoad={() => onMoveAnimation('pre-loading', 'moveOutOpacity')}
							src={src}
							alt='gallery'
							key={index}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Gallery
