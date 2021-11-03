import React from 'react'
import { MissionCard } from './MissionCard'
import './start.css'

/**
 * @author
 * @function StartScreen
 **/

export const StartScreen = (props) => {
	return (
		<div className='start-screen flex flex-col items-center'>
			<div className='btn-primary fixed top-5 left-5 btn-prev'></div>
			<div className='w-full max-w-screen-2xl h-full'>
				<div className='start-screen__container flex flex-col items-center justify-between h-full'>
					<div className='tiltle mt-5'></div>
					<div className='mission-list flex w-full justify-between'>
						<div className='mission-card flex items-center justify-between'>
							<div className='mission-pannel relative'>
								<div className='mission-name'></div>
								<div className='mission-req '></div>
								<div className='mission-rate'></div>
							</div>
							<div></div>
							<div></div>
						</div>
						<div className='mission-card flex items-center justify-between'>
							<div className='mission-pannel relative'>
								<div className='mission-name'></div>
								<div className='mission-req '></div>
								<div className='mission-rate'></div>
							</div>
							<div></div>
							<div></div>
						</div>
						<div className='mission-card flex items-center justify-between'>
							<div className='mission-pannel relative'>
								<div className='mission-name'></div>
								<div className='mission-req  '></div>
								<div className='mission-rate '></div>
							</div>
							<div></div>
							<div></div>
						</div>
					</div>
					<div className='start-screen__reroll flex flex-col items-center mb-4'>
						<div className='btn-reroll'></div>
						<div className='reroll-cost mb-5 mt-5'></div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default StartScreen
