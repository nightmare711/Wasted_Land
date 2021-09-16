import React from 'react'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import CheckIcon from '@material-ui/icons/Check'
import './Message.css'

export const Message = ({ status, title, content }) => {
	return (
		<div className='relative flex flex-row text-white rounded-md message-container z-60 '>
			<div
				style={{ backgroundColor: `${status === 1 ? 'green' : status === 0 ? 'red' : 'orange'}` }}
				className='flex items-center justify-center h-full px-1 color-container'
			>
				{status === 1 ? <CheckIcon /> : <ErrorOutlineIcon />}
			</div>
			<div className='p-2 message-content'>
				<span className='font-semibold uppercase title'>{title}</span>
				<div className='content'>{content}</div>
			</div>
		</div>
	)
}
