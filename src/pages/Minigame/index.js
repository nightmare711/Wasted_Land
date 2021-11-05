import React from 'react'
import MissionScreen from './screens/mission'
import StartScreen from './screens/start'

import './Minigame.css'
import SelectChar from './screens/selectchar'
import SelectMap from './screens/selectmap'
import { useGetMinigameData } from 'queries/useMinigame.query'
import SelectFight from './screens/selectfight'

/**
 * @author
 * @function MiniGame
 **/

export const MiniGame = (props) => {
	const { data: minigameData } = useGetMinigameData()
	return (
		<div className='minigame w-full h-full'>
			<div className=''>
				<StartScreen />
			</div>
			<div id='overlay-missionscreen' className='overlay'>
				<MissionScreen minigameData={minigameData} />
			</div>
			<div id='overlay-selectcharscreen' className='overlay'>
				<SelectChar />
			</div>
			<div id='overlay-selectmapscreen' className='overlay'>
				<SelectMap minigameData={minigameData} />
			</div>
			<div id='overlay-selectfightscreen' className='overlay'>
				<SelectFight />
			</div>
		</div>
	)
}
export default MiniGame
