import React from 'react'
import './SuccessOverlay.css'

export const SuccessOverlay = ({ image, onClose }) => {
	return (
		<div id='success-overlay' className='flex items-center justify-center success-overlay'>
			<div onClick={() => onClose()} className='overlay'></div>
			<div className='flex flex-col items-center justify-center'>
				<img src={image} alt='Box' />
				<div className='mt-2 cursor-pointer btn-primary'>Inventory</div>
			</div>
		</div>
	)
}
