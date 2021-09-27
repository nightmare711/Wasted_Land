import React from 'react'
import { Link } from 'react-router-dom'
import { onTriggerMenu } from 'services/useDevelopUI'
import './MenuList.css'

export const MenuList = () => {
	return (
		<div onClick={() => onTriggerMenu()} id={'menu'} className='menu-list'>
			<div className='list'>
				<div className='item'>Marketing</div>
				<div className='item'>Staking</div>
				<div className='item'>Wallet</div>
				<Link to='/about'>
					<div className='item'>About</div>
				</Link>
			</div>
		</div>
	)
}
