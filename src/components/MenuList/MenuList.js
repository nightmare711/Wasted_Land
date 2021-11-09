import React from 'react'
import { Link } from 'react-router-dom'
import { onTriggerMenu } from 'services/useDevelopUI'
import CloseIcon from '@mui/icons-material/Close'
import './MenuList.css'

export const MenuList = () => {
	return (
		<div onClick={() => onTriggerMenu()} id={'menu'} className='menu-list'>
			<CloseIcon style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 100 }} />
			<div className='list'>
				<Link to='/buy-wal'>
					<div className='item'>Buy WAL</div>
				</Link>
				<Link to='/summon-warriors'>
					<div className='item'>Summon Warriors</div>
				</Link>
				<Link to='/gallery'>
					<div className='item'>Gallery</div>
				</Link>
				<Link to='/gallery'>
					<div className='item'>White Paper</div>
				</Link>
				<a
					href='https://the-wasted-lands.gitbook.io/the-wasted-lands/'
					target='_blank'
					rel='noreferrer'
				>
					<div className='item'>Gitbook</div>
				</a>
				<Link to='/about-us'>
					<div className='item'>About Us</div>
				</Link>
			</div>
		</div>
	)
}
