import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { onMoveAnimation } from 'services/useDevelopUI'
import './HeaderText.css'

export const HeaderText = () => {
	return (
		<div id='header-text' className='header-text'>
			<CloseIcon
				onClick={() => onMoveAnimation('header-text', 'moveOutOpacity')}
				style={{ position: 'absolute', top: '10px', right: '20px', cursor: 'pointer' }}
			/>
			<span className='title'>Official $WAL contract address: Coming soon.</span>
			<span className='subtitle'>
				Official Telegram:{' '}
				<a href='https://t.me/TheWastedLands' target='_blank' rel='noreferrer'>
					@TheWastedLands
				</a>{' '}
				&{' '}
				<a href='https://t.me/TheWastedLandsNews' target='_blank' rel='noreferrer'>
					@TheWastedLandsNews
				</a>
				, Official Twitter:{' '}
				<a href='https://twitter.com/thewastedlands' target='_blank' rel='noreferrer'>
					@thewastedlands
				</a>
				, Official Discord:{' '}
				<a href='https://discord.gg/thewastedlands' target='_blank' rel='noreferrer'>
					thewastedlands
				</a>
			</span>
		</div>
	)
}
