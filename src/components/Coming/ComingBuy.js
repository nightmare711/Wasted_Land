import React from 'react'
import { onMoveAnimation } from 'services/useDevelopUI'

export const ComingBuy = () => {
	React.useEffect(() => {
		onMoveAnimation('pre-loading', 'moveOutOpacity')
	}, [])
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
export default ComingBuy
