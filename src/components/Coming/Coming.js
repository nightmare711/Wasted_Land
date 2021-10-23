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
					onClick={() =>
						window.open(
							'https://gleam.io/oqFVi/the-wasted-lands-community-airdrop-of-20000',
							'_blank'
						)
					}
					className='cursor-pointer btn-secondary'
				>
					Join Airdrop
				</div>
			</div>
			{/* <span className='back'>
				Or you can check out our awesome artworks <Link to='/'>right here</Link>
			</span> */}
		</div>
	)
}
export default Coming
