import React from 'react'
import './SelectFight.css'
import { onMoveAnimation } from 'services/useDevelopUI'
import PlateSlot from 'pages/Minigame/components/PlateSlot'

/**
 * @author
 * @function SelectFight
 **/

export const SelectFight = (props) => {
	const arr = ['Charrac1', 'Charrac2', 'Charrac3', 'Charrac3', 'Charrac3']
	return (
		<div className='selectfight-screen  justify-center items-center'>
			<div className='selectfight-container grid'>
				<div
					className='btn-primary-minigame fixed top-5 left-5 btn-prev'
					onClick={() => {
						onMoveAnimation('overlay-selectfightscreen', 'moveOutOpacity')
					}}
				></div>
				{arr.map((slot) => {
					return (
						<div className='selectfight-plate relative flex flex-col items-center'>
							<div className='plate-top flex justify-around w-full p-5 h-3/4'>
								<div className=' flex flex-col justify-between'>
									<div className='selectfight-iconslot'>
										<div className='flex flex-col items-center justify-center h-full'>
											<span className='selectfight-slottiltle text-yellow-100'>SLOT</span>
											<span className='selectfight-slot text-white'>9850</span>
										</div>
									</div>
									<div className='btn-primary-minigame btn-fight'></div>
								</div>
								<div className='flex justify-between h-full'>
									<PlateSlot />
									<PlateSlot />
									<PlateSlot />
								</div>
							</div>
							<div className='plate-bottom flex justify-between items-center text-white'>
								<div className=''>PROTECTED:88H88M</div>
								<div className=''>USER ADDRESS: 123213213213...1232132132</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
export default SelectFight
