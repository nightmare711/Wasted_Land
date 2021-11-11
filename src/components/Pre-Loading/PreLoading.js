import React from 'react'
import PreLoadingGif from 'assets/pre-loading.webm'
import './PrelLoading.css'

export const PreLoading = () => {
	return (
		<div id='pre-loading' className='pre-loading'>
			<video loop muted autoPlay playsInline type='video/webm' src={PreLoadingGif} />
		</div>
	)
}
