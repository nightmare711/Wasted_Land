import React from 'react'
import { TokenomicsImage } from 'assets/roadmap'
import { onMoveAnimation } from 'services/useDevelopUI'
import BorderIcon from 'assets/home/Active.png'
import './Roadmap.css'

const roadmapInfo = [
	{
		time: 'Dec 2021',
		info: [
			'Integration of game on blockchain.',
			'HeroFi token sale.',
			'HeroFi test net release for 1000 testers.',
			'Marketplace release.',
		],
	},
	{
		time: 'Dec 2021',
		info: [
			'Integration of game on blockchain.',
			'HeroFi token sale.',
			'HeroFi test net release for 1000 testers.',
			'Marketplace release.',
		],
	},
	{
		time: 'Dec 2021',
		info: [
			'Integration of game on blockchain.',
			'HeroFi token sale.',
			'HeroFi test net release for 1000 testers.',
			'Marketplace release.',
		],
	},
	{
		time: 'Dec 2021',
		info: [
			'Integration of game on blockchain.',
			'HeroFi token sale.',
			'HeroFi test net release for 1000 testers.',
			'Marketplace release.',
		],
	},
	{
		time: 'Dec 2021',
		info: [
			'Integration of game on blockchain.',
			'HeroFi token sale.',
			'HeroFi test net release for 1000 testers.',
			'Marketplace release.',
		],
	},
]
export const Roadmap = () => {
	return (
		<div className='roadmap-container'>
			<div className='flex flex-col items-center justify-center max-w-screen-xl tokenomics'>
				<div className='title'>TOKENOMICS DISTRIBUTION</div>
				<span className='max-w-md subtitle'>
					At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
					voluptatum deleniti.
				</span>
				<img
					onLoad={() => onMoveAnimation('pre-loading', 'moveOutOpacity')}
					src={TokenomicsImage}
					alt='tokenomics'
				/>
			</div>
			<div className='flex flex-col items-center justify-center w-full roadmap'>
				<div className='title'>Roadmap</div>
				<div className='flex items-center justify-center w-full roadmap__content'>
					<div className='flex flex-row w-full max-w-screen-xl'>
						{roadmapInfo.map((roadmap, index) => (
							<div key={index} className='content'>
								<span className='time'>{roadmap.time}</span>
								<img src={BorderIcon} alt='BorderIcon' />
								<ul>
									{roadmap.info.map((info, key) => (
										<li key={key}>{info}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
