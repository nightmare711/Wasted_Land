import React, { useState } from 'react'
import './Mission.css'
import { onMoveAnimation } from 'services/useDevelopUI'
import ConfirmModal from 'pages/Minigame/components/ConfirmModal'
import PlateSlot from 'pages/Minigame/components/PlateSlot'
import { useGetPlayerData } from 'queries/useMinigame.query'
import { useMutation } from 'react-query'

/**
 * @author
 * @function MissionScreen
 **/

export const MissionScreen = (props) => {
	const [rerollCount, setRerollCount] = useState(0)
	const objToString = (obj) => {
		for (const [key, value] of Object.entries(obj)) {
			return <span>{`${value} ${key}`}</span>
		}
	}
	React.useEffect(() => {
		refetchPlayerData()
	}, [rerollCount])
	const mutation = useMutation((address) => {
		console.log('heeloo')
		return fetch(`https://test.thewastedlands.io/api/v1/minigame/reroll?address=${address}`)
			.then((res) => res.json())
			.then((result) => {
				return result.data
			})
	})

	const { minigameData, setActiveSlot, arrSlot, playeraddress } = props
	const { data: playerdata, refetch: refetchPlayerData } = useGetPlayerData(playeraddress)
	return (
		<div className='mission-screen flex flex-col items-center'>
			<ConfirmModal
				modal_id='overlay-reroll'
				todoYes={() => {
					mutation.mutate(playeraddress)
					setRerollCount(rerollCount + 1)
				}}
			>
				PAY 50 WLP TO REROLL THE MISSION
			</ConfirmModal>
			<div
				className='btn-primary-minigame fixed top-5 left-5 btn-prev'
				onClick={() => {
					setActiveSlot(1)
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
									.map((mis, key) => {
										return (
											<div
												key={key}
												className='mission-card flex flex-col items-center justify-between'
											>
												<div className={`mission-pannel relative mission-level-${mis.level}`}>
													<div className='mission-name'>{mis.mission_type}</div>
													<div className='mission-req flex flex-col '>
														<span>REQUIREMENTS</span>
														{objToString(mis.requirements)}
													</div>
													<div className='mission-rate'></div>
												</div>
												<div className='flex'>
													{arrSlot.slice(key * 3, key * 3 + 3).map((sl, keysl) => {
														return (
															<div className='mission-plate-slot flex relative'>
																<div
																	className={`btn-primary-minigame ${sl.type} absolute -top-4 -right-1`}
																	onClick={() => {
																		setActiveSlot(key * 3 + keysl)
																		onMoveAnimation('overlay-selectcharscreen', 'moveInOpacity')
																	}}
																></div>
																<div className='mission-icon'></div>
																<div className='mission-level text-white absolute bottom-3 left-0 right-0  text-center'>
																	{sl.level}
																</div>
															</div>
														)
													})}
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
