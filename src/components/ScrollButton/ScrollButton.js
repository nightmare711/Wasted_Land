import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { onScrollTop } from 'services/useDevelopUI'
import './ScrollButton.css'

export const ScrollButton = () => {
	return (
		<div id='btn-scroll' onClick={onScrollTop} className='cursor-pointer scroll-btn'>
			<ArrowUpwardIcon />
		</div>
	)
}
