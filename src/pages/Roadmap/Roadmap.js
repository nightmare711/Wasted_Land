import React from 'react'
import { TokenomicsImage } from 'assets/roadmap'
import './Roadmap.css'

export const Roadmap = () => {
	return (
		<div className='roadmap-container'>
			<div className='flex flex-col items-center justify-center max-w-screen-xl tokenomics'>
				<div className='title'>TOKENOMICS DISTRIBUTION</div>
				<span className='max-w-md subtitle'>
					At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
					voluptatum deleniti.
				</span>
				<img src={TokenomicsImage} alt='tokenomics' />
			</div>
			<div className='roadmap'>
				<div className='title'>Roadmap</div>
			</div>
		</div>
	)
}
