import React from 'react'
import LoadingGif from 'assets/loading.gif'

export const Loading = () => {
	return (
		<div
			style={{ zIndex: 10000000 }}
			id='loading'
			className='fixed inset-0 flex items-center justify-center invisible w-screen h-screen text-white opacity-0 '
		>
			<div className='overlay'></div>
			<div
				style={{ backgroundColor: '#161519', fontFamily: 'Montserrat' }}
				className='flex flex-col items-center justify-center p-8 font-semibold text-center rounded-md'
			>
				<img style={{ width: '100px' }} src={LoadingGif} alt='loading' />
				Now Loading...
			</div>
		</div>
	)
}
