import React from 'react'
import { Banner, Border, CardHeader } from 'assets/quests'
import { onMoveAnimation } from 'services/useDevelopUI'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Logo from 'assets/logo192.png'
import './Quests.css'

export const Quests = () => {
	return (
		<div className='flex flex-col items-center quests'>
			<div className='banner-container'>
				<img
					onLoad={() => onMoveAnimation('pre-loading', 'moveOutOpacity')}
					src={Banner}
					alt='Banner'
				/>
				<img className='border--img' src={Border} alt='Border' />
			</div>
			<div className='w-full max-w-screen-xl'>
				<div className='flex flex-row header__container'>
					<span className='header__title'>Daily Reward</span>
					<div className='header-info'>
						<div className='flex flex-col info info_1'>
							<span className='info-title'>Synced</span>
							<div className='flex flex-row mt-2 info-number'>
								<img className='info-logo' alt='Logo' src={Logo} />
								<span>0</span>
							</div>
						</div>
						<div className='flex flex-col info info_2'>
							<span className='info-title'>Synced</span>
							<div className='flex flex-row mt-2 info-number'>
								<img alt='Logo' src={Logo} />
								<span>0</span>
							</div>
						</div>
						<div className='flex flex-col info info_3'>
							<div className='btn-primary'>Convert to WAL</div>
						</div>
					</div>
				</div>
				<div className='grid-container'>
					<div className='mission'>
						<div className='mission__header'>
							<img src={CardHeader} alt='Card Header' />
							<div className='sticky-text'>Weekly</div>
						</div>
						<div className='mission__content'>
							<span className='title'>Add {'/'} Remove liquidity</span>
							<span className='extra'>
								Matter kicks off Feedback Friday once a week. A time where your team is encouraged
								to give the gift of feedback.
							</span>
							<div className='flex flex-row justify-between btn-claim'>
								<span>Claim now</span>
								<KeyboardArrowRightIcon />
							</div>
						</div>
					</div>
					<div className='mission'>
						<div className='mission__header'>
							<img src={CardHeader} alt='Card Header' />
							<div className='sticky-text'>Weekly</div>
						</div>
						<div className='mission__content'>
							<div className='flex flex-col content-text'>
								<span className='title'>Play Wasted Lands everyday</span>
								<span className='extra'>Play the game everyday.</span>
							</div>
							<div className='flex flex-row justify-between btn-claim'>
								<span>Claim now</span>
								<KeyboardArrowRightIcon />
							</div>
						</div>
					</div>
					<div className='mission'>
						<div className='mission__header'>
							<img src={CardHeader} alt='Card Header' />
							<div className='sticky-text'>Weekly</div>
						</div>
						<div className='mission__content'>
							<div className='flex flex-col content-text'>
								<span className='title'>Set an avatar.</span>
								<span className='extra'>Set a very cool avatar.</span>
							</div>
							<div className='flex flex-row justify-between btn-claim btn-disabled'>
								<span>Claim now</span>
								<KeyboardArrowRightIcon />
							</div>
						</div>
					</div>
					<div className='mission'>
						<div className='mission__header'>
							<img src={CardHeader} alt='Card Header' />
							<div className='sticky-text'>Weekly</div>
						</div>
						<div className='mission__content'>
							<div className='flex flex-col content-text'>
								<span className='title'>Earn interest.</span>
								<span className='extra'>
									Matter kicks off Feedback Friday once a week. A time where your team is encouraged
									to give the gift of feedback.
								</span>
							</div>
							<div className='flex flex-row justify-between btn-claim'>
								<span>Claim now</span>
								<KeyboardArrowRightIcon />
							</div>
						</div>
					</div>
					<div className='mission'>
						<div className='mission__header'>
							<img src={CardHeader} alt='Card Header' />
							<div className='sticky-text'>Weekly</div>
						</div>
						<div className='mission__content'>
							<div className='flex flex-col content-text'>
								<span className='title'>Exchange.</span>
								<span className='extra'>
									Matter kicks off Feedback Friday once a week. A time where your team is encouraged
									to give the gift of feedback.
								</span>
							</div>
							<div className='flex flex-row justify-between btn-claim btn-disabled'>
								<span>Claim now</span>
								<KeyboardArrowRightIcon />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Quests
