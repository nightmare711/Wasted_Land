import React from 'react'
import './Selectmap.css'
import { onMoveAnimation } from 'services/useDevelopUI'
import city1 from '../../../../assets/minigame/worldmap/city_1.png'
import city2 from '../../../../assets/minigame/worldmap/city_2.png'
import city3 from '../../../../assets/minigame/worldmap/city_3.png'
import ConfirmModal from 'pages/Minigame/components/ConfirmModal'

/**
 * @author
 * @function SelectMap
 **/

export const SelectMap = (props) => {
	const { minigameData, setActiveCity } = props
	return (
		<div className='selectmap-screen relative'>
			<ConfirmModal
				modal_id='overlay-confirm-map'
				todoYes={() => {
					onMoveAnimation('overlay-selectfightscreen', 'moveInOpacity')
				}}
			>
				GO TO CENTRAL CITY FOR MISSION?
			</ConfirmModal>
			<div
				className='btn-primary-minigame fixed top-5 left-5 btn-prev'
				onClick={() => {
					onMoveAnimation('overlay-selectmapscreen', 'moveOutOpacity')
					onMoveAnimation('overlay-missionscreen', 'moveInOpacity')
				}}
			></div>
			{minigameData
				? minigameData.cities.map((city) => {
						let cit = city1
						switch (city.name_code) {
							case 'A':
								cit = city1
								break
							case 'B':
								cit = city2
								break
							case 'C':
								cit = city3
								break

							default:
								cit = city1
								break
						}
						return (
							<div
								className={`worldmap btn-primary-minigame map-${city.cityId} absolute flex flex-col items-center`}
								onClick={() => {
									setActiveCity(city.cityId)
									onMoveAnimation('overlay-confirm-map', 'moveInOpacity')
								}}
							>
								<img src={cit} alt={city.name} />
								<span className='-mt-9'>{city.name}</span>
							</div>
						)
				  })
				: null}
		</div>
	)
}
export default SelectMap
