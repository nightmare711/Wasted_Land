import React from 'react'
import previcon from '../../../assets/minigame/fightslot/icon_prev.png'
import prevendicon from '../../../assets/minigame/fightslot/icon_prevend.png'
import nexticon from '../../../assets/minigame/fightslot/icon_next.png'
import nextendicon from '../../../assets/minigame/fightslot/icon_nextend.png'

/**
 * @author
 * @function Pagination
 **/

export const Pagination = (props) => {
	return (
		<div className='w-full h-52 flex items-center justify-center'>
			<div className='left-redirect flex'>
				<img src={prevendicon} alt=''></img>
				<img src={previcon} alt=''></img>
			</div>
			<div className='pagination-page'></div>
			<div className='right-redirect flex '>
				<img src={prevendicon} alt=''></img>
				<img src={nexticon} alt=''></img>
			</div>
		</div>
	)
}
