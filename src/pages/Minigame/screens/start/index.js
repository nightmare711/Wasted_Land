import React from 'react'
import './Start.css'
import { onMoveAnimation } from 'services/useDevelopUI'
import img1 from '../../../../assets/minigame/popuprerollmission/pop-up_panel.png'

/**
 * @author
 * @function StartScreen
 **/

export const StartScreen = (props) => {
	return (
		<div>
			<div className='start flex flex-col items-center'>
				<div className='btn-primary-minigame fixed top-5 left-5 btn-prev'></div>
				<div className='w-full max-w-screen-xl h-full'>
					<div className=' flex  items-center justify-between h-full px-40'>
						<div className='start-card flex flex-col'>
							<div className='mission-icon mb-3'></div>
							<div
								className='btn-primary-minigame btn-mission'
								onClick={() => {
									onMoveAnimation('overlay-missionscreen', 'moveInOpacity')
								}}
							></div>
						</div>
						<div className='start-card'>
							<div className='market-icon mb-3'></div>
							<div className='btn-primary-minigame btn-market'></div>
						</div>
						<div className='start-card'>
							<div className='warrior-icon mb-3'></div>
							<div className='btn-primary-minigame btn-warrior'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default StartScreen
