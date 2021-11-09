import React from 'react'
import { YoutubeEmbed } from '../YoutubeEmbed/YoutubeEmbed'
import './VideoContainer.css'

export const VideoContainer = ({ embedId, onClose }) => {
	return (
		<div id='video-embed' className='video-embed'>
			<div
				onClick={() => {
					onClose()
				}}
				className='overlay'
			></div>
			<div className='embed'>
				<YoutubeEmbed embedId={embedId} />
			</div>
		</div>
	)
}
