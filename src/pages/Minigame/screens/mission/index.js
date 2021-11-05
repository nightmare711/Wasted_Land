import React from 'react'
import './Mission.css'
import { onMoveAnimation } from 'services/useDevelopUI'
import ConfirmModal from 'pages/Minigame/components/ConfirmModal'
import PlateSlot from 'pages/Minigame/components/PlateSlot'
import {
	useGetPlayerData,
	useGetMinigameData,
	useGetRerollMission,
} from 'queries/useMinigame.query'
import { ConstructionOutlined, HelpOutline } from '@mui/icons-material'

/**
 * @author
 * @function MissionScreen
 **/

export const MissionScreen = (props) => {
	const { minigameData } = props
	const playeraddress = '0xfffff90a30f83c5ca60b3c088213ad6a9b0bc4ec'
	const { data: playerdata } = useGetPlayerData(playeraddress)
	return (
		<div className='mission-screen flex flex-col items-center'>
			<ConfirmModal modal_id='overlay-reroll'>PAY 50 WLP TO REROLL THE MISSION</ConfirmModal>
			<div
				className='btn-primary-minigame fixed top-5 left-5 btn-prev'
				onClick={() => {
					onMoveAnimation('overlay-missionscreen', 'moveOutOpacity')
				}}
			></div>
			<div className='fixed right-5 top-5 mission-txt'>
				<span className='text-white mr-2'>MISSION:</span>
				<span className='text-yellow-300 '>0/3</span>
			</div>
			<div className='w-full max-w-screen-2xl h-full'>
				<div className='mission-screen__container flex flex-col items-center justify-between h-full'>
					<div className='tiltle mt-5'>
						<span>MISSION</span>
					</div>
					<div className='mission-list flex w-full justify-between'>
						{minigameData && playerdata
							? minigameData.mini_missions
									.filter((miss) => playerdata.mission_data.missions.indexOf(miss.id) > -1)
									.map((mis) => {
										console.log(mis)
										return (
											<div className='mission-card flex flex-col items-center justify-between'>
												<div className={`mission-pannel relative mission-level-${mis.level}`}>
													<div className='mission-name'>{mis.mission_type}</div>
													<div className='mission-req '>{JSON.stringify(mis.requirements)}</div>
													<div className='mission-rate'></div>
												</div>
												<div className='flex'>
													<div className='mission-plate-slot flex relative'>
														<div className='mission-character'></div>
														<div className='mission-icon'></div>
														<div className='mission-level'></div>
													</div>
													<div className='mission-plate-slot flex relative'>
														<div
															className='btn-primary-minigame mission-add-char'
															onClick={() => {
																onMoveAnimation('overlay-missionscreen', 'moveOutOpacity')
																onMoveAnimation('overlay-selectcharscreen', 'moveInOpacity')
															}}
														></div>
														<div className='mission-icon'></div>
														<div className='mission-level'></div>
													</div>
													<div className='mission-plate-slot flex relative'>
														<div className='mission-character'></div>
														<div className='mission-icon'></div>
														<div className='mission-level'></div>
													</div>
												</div>
												<div
													className='btn-primary-minigame mission-btn-go'
													onClick={() => {
														onMoveAnimation('overlay-selectmapscreen', 'moveInOpacity')
													}}
												></div>
											</div>
										)
									})
							: null}
					</div>
					<div className='mission-screen__reroll flex flex-col items-center mb-4'>
						<div
							className='btn-primary-minigame btn-reroll'
							onClick={() => {
								onMoveAnimation('overlay-reroll', 'moveInOpacity')
							}}
						></div>
						<div className='reroll-cost mb-5 mt-5'></div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default MissionScreen
