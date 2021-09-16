import React from 'react'

export const YoutubeEmbed = ({ embedId }) => (
	<div className='w-full h-full video-responsive'>
		<iframe
			src={`https://www.youtube.com/embed/${embedId}`}
			frameBorder='0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			allowFullScreen
			title='Embedded youtube'
			className='w-full h-full'
		/>
	</div>
)
