import React from 'react'
import { Link } from 'react-router-dom'
import { onTriggerMenu } from 'services/useDevelopUI'
import './MenuList.css'

export const MenuList = () => {
	return (
		<div onClick={() => onTriggerMenu()} id={'menu'} className='menu-list'>
			<div className='list'>
				<Link to='/buy-wal'>
					<div className='item'>Buy WAL</div>
				</Link>
				<Link to='/summon-warriors'>
					<div className='item'>Summon Warriors</div>
				</Link>
				<a
					href='https://docs.google.com/presentation/d/e/2PACX-1vSUuyoSKy5ZBxqEJ4OHaD1Ao1-a_8kPVyYTSw4mzFsio6EvTF8UUFCfJu-1rjJv2Q/pub?start=false&loop=false&delayms=3000&slide=id.p1'
					target='_blank'
					rel='noreferrer'
				>
					<div className='item'>White paper</div>
				</a>
				<Link to='/about-us'>
					<div className='item'>About Us</div>
				</Link>
			</div>
		</div>
	)
}
