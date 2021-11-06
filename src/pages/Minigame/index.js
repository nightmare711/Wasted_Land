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
	const playeraddress = '0x320CA81698b298A4Fb25192d57F967395462FCb8'
	const [activeSlot, setActiveSlot] = React.useState(0)
	const [arrSlot, setArrSlot] = React.useState([
		{ type: 'mission-add-char', level: '', icon: '', id: '' },
		{ type: 'mission-add-char', level: '', icon: '', id: '' },
		{ type: 'mission-add-char', level: '', icon: '', id: '' },
		{ type: 'mission-add-char', level: '', icon: '', id: '' },
		{ type: 'mission-add-char', level: '', icon: '', id: '' },
		{ type: 'mission-add-char', level: '', icon: '', id: '' },
		{ type: 'mission-add-char', level: '', icon: '', id: '' },
		{ type: 'mission-add-char', level: '', icon: '', id: '' },
		{ type: 'mission-add-char', level: '', icon: '', id: '' },
	])
	const [activeCity, setActiveCity] = React.useState('3')
	const { data: minigameData } = useGetMinigameData()
	return (
		<div className='minigame w-full h-full'>
			<div className=''>
				<StartScreen />
			</div>
			<div id='overlay-missionscreen' className='overlay'>
				<MissionScreen
					minigameData={minigameData}
					setActiveSlot={setActiveSlot}
					arrSlot={arrSlot}
					playeraddress={playeraddress}
				/>
			</div>
			<div id='overlay-selectcharscreen' className='overlay'>
				<SelectChar
					activeSlot={activeSlot}
					setArrSlot={setArrSlot}
					arrSlot={arrSlot}
					playeraddress='0x320CA81698b298A4Fb25192d57F967395462FCb8'
				/>
			</div>
			<div id='overlay-selectmapscreen' className='overlay'>
				<SelectMap minigameData={minigameData} setActiveCity={setActiveCity} />
			</div>
			<div id='overlay-selectfightscreen' className='overlay'>
				<SelectFight activeCity={activeCity} />
			</div>
		</div>
	)
}
export default MiniGame
