import React from 'react'
import './Minigame.css'
/**
 * @author
 * @function MiniGame
 **/

export const MiniGame = (props) => {
	return (
		<div>
			<div className='minigame flex flex-col items-center'>
				<div className='btn-primary fixed top-5 left-5 btn-prev'></div>
				<div className='w-full max-w-screen-xl h-full'>
					<div className=' flex  items-center justify-between h-full px-40'>
						<div className='minigame-card flex flex-col'>
							<div className='mission-icon mb-3'></div>
							<div className='btn-primary btn-mission'></div>
						</div>
						<div className='minigame-card'>
							<div className='market-icon mb-3'></div>
							<div className='btn-primary btn-market'></div>
						</div>
						<div className='minigame-card'>
							<div className='warrior-icon mb-3'></div>
							<div className='btn-primary btn-warrior'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default MiniGame
