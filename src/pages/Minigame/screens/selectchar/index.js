import React from 'react'
import './Selectchar.css'
import { onMoveAnimation } from 'services/useDevelopUI'
import { useGetPlayerHero } from 'queries/useMinigame.query'
/**
 * @author
 * @function SelectChar
 **/

export const SelectChar = (props) => {
	const { activeSlot, setArrSlot, arrSlot, playeraddress } = props
	const { data: playerHero, isSuccess: getHeroSuccess } = useGetPlayerHero(
		'0x320CA81698b298A4Fb25192d57F967395462FCb8'
	)
	console.log('hero', playerHero)
	return (
		<div className='selectchar-screen flex  justify-center items-center'>
			<div className='selectchar-container grid'>
				<div
					className='btn-primary-minigame fixed top-5 left-5 btn-prev'
					onClick={() => {
						onMoveAnimation('overlay-selectcharscreen', 'moveOutOpacity')
					}}
				></div>
				{getHeroSuccess
					? playerHero.heroes.map((slot) => {
							let heroId = slot.id
							return (
								<div className='selectchar-plate relative'>
									<div className='iconleft absolute'></div>
									<div>
										<div></div>
									</div>
									<div
										className='btn-primary-minigame btn-pick-char absolute'
										onClick={() => {
											let newArr = [...arrSlot]
											newArr[activeSlot] = {
												type: 'mission-character',
												level: 'LV.23',
												id: { heroId },
											}
											setArrSlot(newArr)
											onMoveAnimation('overlay-selectcharscreen', 'moveOutOpacity')
										}}
									></div>
								</div>
							)
					  })
					: null}
			</div>
		</div>
	)
}
export default SelectChar
