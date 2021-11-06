import React from 'react'
import './PlateSlot.css'

/**
 * @author
 * @function PlateSlot
 **/

export const PlateSlot = (props) => {
	return (
		<div className='mission-plate-slot flex relative'>
			<div className='mission-character absolute -top-4 -right-1'></div>
			<div className='mission-icon'></div>
			<div className='mission-level text-white absolute bottom-3 left-0 right-0  text-center'>
				LV.23
			</div>
		</div>
	)
}
export default PlateSlot
