import React from 'react'
import PreLoadingGif from 'assets/pre-loading.gif'
import './PrelLoading.css'

export const PreLoading = () => {
	return (
		<div id='pre-loading' className='pre-loading'>
			<img src={PreLoadingGif} alt='Pre-Loading' />
		</div>
	)
}
