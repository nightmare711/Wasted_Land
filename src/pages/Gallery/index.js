import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import {
	Art1,
	Art2,
	Art3,
	Art4,
	Art5,
	Art6,
	Art7,
	Art8,
	Art9,
	Art10,
	Art11,
	Art12,
} from 'assets/gallery'
import ArrowButton from 'assets/home/arrow_button.png'
import { onMoveAnimation } from 'services/useDevelopUI'
import './Gallery.css'

const galleryInfo = [
	{
		mainImage: Art1,
	},
	{
		mainImage: Art2,
	},
	{
		mainImage: Art3,
	},
	{
		mainImage: Art4,
	},
	{
		mainImage: Art5,
	},
	{
		mainImage: Art6,
	},
	{
		mainImage: Art7,
	},
	{
		mainImage: Art8,
	},
	{
		mainImage: Art9,
	},
	{
		mainImage: Art10,
	},
	{
		mainImage: Art11,
	},
	{
		mainImage: Art12,
	},
]

export const Gallery = () => {
	const [activeBox, setActiveBox] = React.useState(0)
	React.useEffect(() => {
		document.querySelector('#overlay-gallery').focus()
	}, [])
	return (
		<div className='flex items-center justify-center gallery'>
			<div
				id='overlay-gallery'
				className='flex flex-col items-center justify-center gallery__detail'
			>
				<div
					onClick={() => onMoveAnimation('overlay-gallery', 'moveOutOpacity')}
					className='btn-close'
				>
					<CloseIcon />
				</div>
				<div className='overlay'></div>
				<img
					onClick={() => {
						if (activeBox >= 1) {
							setActiveBox(activeBox - 1)
						} else {
							setActiveBox(galleryInfo.length - 1)
						}
					}}
					className='btn-arrow'
					src={ArrowButton}
					alt='Arrow Button'
				/>
				<img
					onClick={() => {
						if (activeBox < galleryInfo.length - 1) {
							setActiveBox(activeBox + 1)
						} else {
							setActiveBox(0)
						}
					}}
					className=' btn__right'
					src={ArrowButton}
					alt='Arrow Button'
				/>
				<img className='main__image' src={galleryInfo[activeBox].mainImage} alt='Art1' />
			</div>
			<div className='max-w-screen-xl'>
				<span className='title'>Gallery</span>
				<div className='gallery__images'>
					{galleryInfo.map((info, index) => (
						<img
							onClick={() => {
								setActiveBox(index)
								onMoveAnimation('overlay-gallery', 'moveInOpacity')
							}}
							onLoad={() => onMoveAnimation('pre-loading', 'moveOutOpacity')}
							key={index}
							src={info.mainImage}
							alt='Art 1'
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Gallery
