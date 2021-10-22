import React from 'react'
import Logo from '../../assets/coming/logo__opacity.png'
import { onMoveAnimation } from 'services/useDevelopUI'
import './Coming.css'

export const Coming = () => {
	return (
		<div className='coming-page'>
			<img onLoad={() => onMoveAnimation('pre-loading', 'moveOutOpacity')} src={Logo} alt='Logo' />
			<span className='title'>Coming soon</span>
			<span className='subtitle'>
				Our token $WAL will be released soon, make you check out our Discord server and Airdrop
				Campaign below.
			</span>
			<div className='flex flex-row btn-container'>
				<div
					onClick={() => window.open('https://discord.gg/thewastedlands', '_blank')}
					className='mr-4 cursor-pointer btn-primary'
				>
					Join Discord
				</div>
				<div
					onClick={() => window.open('https://t.me/TheWastedLands', '_blank')}
					className='cursor-pointer btn-secondary'
				>
					Join Telegram
				</div>
			</div>
			{/* <span className='back'>
				Or you can check out our awesome artworks <Link to='/'>right here</Link>
			</span> */}
		</div>
	)
}
export const ComingBuy = () => {
	return (
		<div className='coming-page coming-buy'>
			<span className='title'>Coming soon</span>
			<span className='subtitle'>
				Warriors are approaching The Wasted Lands. Stay connected to the headquarter at Discord
				Server for latest news.
			</span>
			<div className='flex flex-row btn-container'>
				<div
					onClick={() => window.open('https://discord.gg/YrmJgFY8gK', '_blank')}
					className='mr-4 cursor-pointer btn-primary'
				>
					Join Discord
				</div>
				<div
					onClick={() => window.open('https://t.me/TheWastedLands', '_blank')}
					className='cursor-pointer btn-secondary'
				>
					Join Telegram
				</div>
			</div>
			{/* <span className='back'>
				Or you can check out our awesome artworks <Link to='/'>right here</Link>
			</span> */}
		</div>
	)
}
