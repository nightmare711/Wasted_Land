import React from 'react'
import './start.css'
import { onMoveAnimation } from 'services/useDevelopUI'

/**
 * @author
 * @function StartScreen
 **/

export const StartScreen = (props) => {
	return (
		<div>
			<div className='flex flex-col items-center start'>
				<div className='fixed btn-primary-minigame top-5 left-5 btn-prev'></div>
				<div className='w-full h-full max-w-screen-xl'>
					<div className='flex items-center justify-between h-full px-40 '>
						<div className='start-card'>
							<div className='mb-3 market-icon'></div>
							<div className='btn-primary-minigame btn-market'></div>
						</div>
						<div className='flex flex-col start-card'>
							<div className='mb-3 mission-icon'></div>
							<div
								className='btn-primary-minigame btn-mission'
								onClick={() => {
									onMoveAnimation('overlay-missionscreen', 'moveInOpacity')
								}}
							></div>
						</div>
						<div className='start-card'>
							<div className='mb-3 warrior-icon'></div>
							<div className='btn-primary-minigame btn-warrior'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default StartScreen
