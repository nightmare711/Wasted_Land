import React from 'react'
import './Selectchar.css'
import { onMoveAnimation } from 'services/useDevelopUI'
/**
 * @author
 * @function SelectChar
 **/

export const SelectChar = (props) => {
	const arr = [
		'Charrac1',
		'Charrac2',
		'Charrac3',
		'Charrac3',
		'Charrac3',
		'Charrac2',
		'Charrac3',
		'Charrac3',
		'Charrac3',
	]
	return (
		<div className='selectchar-screen  justify-center items-center'>
			<div className='selectchar-container grid'>
				<div
					className='btn-primary-minigame fixed top-5 left-5 btn-prev'
					onClick={() => {
						onMoveAnimation('overlay-selectcharscreen', 'moveOutOpacity')
					}}
				></div>
				{arr.map((slot) => {
					return (
						<div className='selectchar-plate relative'>
							<div className='iconleft absolute'></div>
							<div>
								<div></div>
							</div>
							<div className='btn-primary-minigame btn-pick-char absolute' onClick={() => {}}></div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
export default SelectChar
