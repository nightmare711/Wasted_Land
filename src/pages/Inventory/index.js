import React from 'react'
import './Inventory.css'

/**
 * @author
 * @function Inventory
 **/

export const Inventory = (props) => {
	return (
		<div className='inventory flex flex-col items-center w-full'>
			<div className='inventory-banner h-16 bg-red-400 w-full'></div>
			<div className='max-w-screen-xl bg-red-50'>
				<div className='inventory-tiltle'>This is tiltle</div>
				<div className='inventory-tabbar sticky top-16'> This is tabbar</div>
				<div className='inventory-container h-screen'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit soluta omnis!
					Illum temporibus itaque minima corrupti dolor, vero optio quidem provident, sed eligendi
					deserunt cumque voluptas nulla nemo? Pariatur! Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Quia, culpa. Fugiat velit, perferendis ipsa numquam tenetur nulla
					molestias pariatur deserunt iste architecto eaque sed magnam consectetur quibusdam minus
					amet beatae!
				</div>
			</div>
		</div>
	)
}
export default Inventory
