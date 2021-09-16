import React from 'react'
import { Message } from './Message'
import { useSelector } from 'react-redux'
import { timerArray } from 'services/useDevelopUI'
import './ListMessage.css'

export const onMouseOver = () => {
	timerArray.map((timer) => timer.pause())
}
export const onMouseOut = () => {
	timerArray.map((timer) => timer.resume())
}
export const ListMessage = () => {
	const selector = useSelector((state) => state.messageReducer)
	console.log(selector)
	return (
		<div onMouseOver={onMouseOver} onMouseOut={onMouseOut} className='fixed list-message'>
			{selector.message.map((message) => (
				<div className='mb-2'>
					<Message title={message.title} status={message.status} content={message.content} />
				</div>
			))}
		</div>
	)
}
