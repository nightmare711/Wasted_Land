import React from 'react'
import { TokenomicsImage, RoadmapMobile, TokenomicsMobile } from 'assets/roadmap'
import { onMoveAnimation } from 'services/useDevelopUI'
import {
	member_1,
	member_2,
	member_3,
	member_4,
	member_5,
	member_6,
	member_7,
	member_8,
	member_9,
} from 'assets/team'
import BorderIcon from 'assets/home/Active.png'
import './Roadmap.css'

const Members = [
	{
		image: member_1,
		name: 'Luan Ngo',
		position: 'Co-Founder',
		profile: [
			'CEO at E-lite Limited - Casual and Hyper-casual Mobile Game Studio.',
			'Ex-CMO at Zitga Mobile Game Vietnam.',
			'Leader game development at Amanotes - Successful launch Magic Tiles 3 and Tiles Hop, which are now having more than 500M downloads on IOS and Android.',
		],
	},
	{
		image: member_5,
		name: 'Bang Mai',
		position: 'Co-Founder',
		profile: [
			'CEO Dizitech - Growth Hacking Agency.',
			'Experienced in marketing & growth hacking (for crypto industry since 2017).',
		],
	},
	{
		image: member_2,
		name: 'Huy Vu',
		position: 'CPO',
		profile: [
			'CPO at E-lite Limited with 11 years exp in RPG Mobile Games.',
			'Lead Game Designer at several veteran game companies in Vietnam, such as: IEC Games (top 6 SEA 2021 Publisher), Gear Inc, top 3 outsourcing game studio in Vietnam, Hiker Games, VTC Online.',
		],
	},
	{
		image: member_3,
		name: 'Tu Nguyen',
		position: 'CTO',
		profile: [
			'CTO at E-lite Limited.',
			'10 years+ exp in Technical Lead and CTO for Gameloft: Modern Combat, Dungeon Hunter, Asphalt, BlackStar, TOH Game.',
		],
	},
	{
		image: member_7,
		name: 'Henry Van',
		position: 'CMO',
		profile: [
			'5 years exp expert in building community & establish partnerships.',
			'Fundraising on different platforms (both crypto & non crypto like Kickstarter, Indiegogo).',
			'Token listings & Content strategist.',
			'Strong relationship with crypto influencers around the world.',
		],
	},

	{
		image: member_6,
		name: 'Tai Nguyen',
		position: 'Blockchain Lead',
		profile: [
			'Product Manager at WAX Blockchain.',
			'4 years as Product Manager in Fintech.',
			'3 years in blockchain.',
			'Highly experienced in building Smart Contracts.',
		],
	},

	{
		image: member_8,
		name: 'Nam Duong',
		position: 'Visual Lead',
		profile: [
			'Visual Director at E-lite Limited.',
			'Art Leader at Zitga Vietnam., JSC.',
			'6+ years exp in Art Leader at the Cyber Fighter, a Cyberpunk themed RPG Sidescroller mobile game, directly in charge of game visual development.',
		],
	},
	{
		image: member_9,
		name: 'Tran Hoang',
		position: 'Core Developer',
		profile: [
			'3 years in blockchain & excel at smart contract development.',
			'Full-stack, highly experienced in building blockchain game.',
		],
	},
	{
		image: member_4,
		name: 'Hai Vu',
		position: 'Game Adviser',
		profile: [
			'Technical Leader at Zitga Game Vietnam.',
			'Lead Technical team with 30+ members, developing and maintaining 7 Mid-core games.',
			'7 years exp of game programming and technical management.',
		],
	},
]

const tokenomics = [
	{
		allocation: 'Seed Sale',
		percentage: 8,
		amount: '80,000,000',
		price: 0.1,
		raiseValue: '800,000',
		vesting: '10% on TGE, then monthly unlock in 10 months',
	},
	{
		allocation: 'Private Sale',
		percentage: 15,
		amount: '150,000,000',
		price: 0.12,
		raiseValue: '1,800,000',
		vesting: '10% on TGE, then monthly unlock in 8 months',
	},
	{
		allocation: 'Public Sale',
		percentage: 1,
		amount: '10,000,000',
		price: 0.15,
		raiseValue: '150,000',
		vesting: '100% on TGE',
	},
	{
		allocation: 'Team',
		percentage: 8,
		amount: '80,000,000',
		price: '',
		raiseValue: '',
		vesting: '1 year full locked, then 10% monthly',
	},
	{
		allocation: 'Advisors',
		percentage: 5,
		amount: '50,000,000',
		price: '',
		raiseValue: '',
		vesting: '1 year full locked, then 10% monthly',
	},
	{
		allocation: 'Liquidity',
		percentage: 4,
		amount: '40,000,000',
		price: '',
		raiseValue: '',
		vesting: '1 year full locked',
	},
	{
		allocation: 'Treasury',
		percentage: 30,
		amount: '300,000,000',
		price: '',
		raiseValue: '',
		vesting: '1 month full locked, then 5% monthly',
	},
	{
		allocation: 'Marketing',
		percentage: 13,
		amount: '130,000,000',
		price: '',
		raiseValue: '',
		vesting: '1 month full locked, then 5% monthly',
	},
	{
		allocation: 'Development',
		percentage: 16,
		amount: '160,000,000',
		price: '',
		raiseValue: '',
		vesting: '1 month full locked, then 5% monthly',
	},
]

const roadmapInfo = [
	{
		time: 'Oct 2021',
		info: [
			'Token seed round & private round.',
			'Blockchain integration.',
			'Gameplay design & production.',
		],
	},
	{
		time: 'Nov 2021',
		info: [
			'Warrior collection.',
			'Game test beta.',
			'Warrior Marketplace.',
			'Farming & NFT staking.',
		],
	},
	{
		time: 'Dec 2021',
		info: ['Quests system.', 'Equipment release.', 'Equipments marketplace.'],
	},
	{
		time: 'Jan 2022',
		info: ['Pets system.', 'Upgrade & merge equipments.', 'Governance release.'],
	},
]
const roadmapInfo2 = [
	{
		time: 'Feb 2022',
		info: ['Fusion & Breeding warrior.', 'World map release.'],
	},
	{
		time: 'Mar 2022',
		info: ['The Wasted Lands official release.', 'Release Mobile & PC version.'],
	},
	{
		time: 'Q2 2022',
		info: ['Rent warrior & Scholar system.', 'Land & Shelter system.'],
	},
	{
		time: 'Q3 2022',
		info: ['Wasted Lands metaverse.', 'Upgrading UX.', 'Vehicles System.'],
	},
]
export const Roadmap = () => {
	return (
		<div className='roadmap-container'>
			<div className='flex items-center justify-center tokenomics'>
				<div className='flex flex-col items-center justify-center max-w-screen-xl '>
					<div className='title'>TOKENOMICS DISTRIBUTION</div>
					<span className=' chart__label'>Token Allocations</span>

					<img
						src={window.innerWidth >= 560 ? TokenomicsImage : TokenomicsMobile}
						alt='tokenomics'
					/>
					<div className='percent__container'>
						<div className='text-percent'>
							Seed Sale: <b>8.0%</b>
						</div>
						<div className='text-percent'>
							Private Sale: <b>15.0%</b>
						</div>
						<div className='text-percent'>
							Public Sale: <b>1.0%</b>
						</div>
						<div className='text-percent'>
							Team: <b>8.0%</b>
						</div>
						<div className='text-percent'>
							Advisor: <b>5.0%</b>
						</div>
						<div className='text-percent'>
							Liquidity: <b>4.0%</b>
						</div>
						<div className='text-percent'>
							Development: <b>16.0%</b>
						</div>
						<div className='text-percent'>
							Marketing: <b>13.0%</b>
						</div>
						<div className='text-percent'>
							Treasury: <b>30.0%</b>
						</div>
					</div>
					{/* <span className=' chart__label proceeds'>Use of Sale Proceeds</span>
					<img
						onLoad={() => onMoveAnimation('pre-loading', 'moveOutOpacity')}
						src={window.innerWidth >= 560 ? SaleChart : Tokenomics2Mobile}
						className='mb-8'
						alt='tokenomics'
					/>
					<div className='percent__container'>
						<div className='text-percent'>
							Marketing: <b>27.2%</b>
						</div>
						<div className='text-percent'>
							Liquidity: <b>17.6%</b>
						</div>
						<div className='text-percent'>
							Seed Sale: <b>8%</b>
						</div>
						<div className='text-percent'>
							Seed Sale: <b>8%</b>
						</div>
					</div> */}
					<table className='my-16'>
						<tr>
							<th>Allocation</th>
							<th>Percentage</th>
							<th className='hide__mobile'>Amount</th>
							<th>Price</th>
							<th className='hide__mobile'>Raise value</th>
							<th>Vesting</th>
						</tr>
						{tokenomics.map((info, index) => (
							<tr key={index}>
								<td>{info.allocation}</td>
								<td>{info.percentage}%</td>
								<td className='hide__mobile'>{info.amount}</td>
								<td>{info.price}</td>
								<td className='hide__mobile'>{info.raiseValue ? `$${info.raiseValue}` : ''}</td>
								<td>{info.vesting}</td>
							</tr>
						))}
					</table>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center w-full roadmap'>
				<div className='title'>Roadmap</div>
				{window.innerWidth >= 560 ? (
					<>
						<div className='flex items-center justify-center w-full roadmap__content roadmap__content--1'>
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
						<div className='flex items-center justify-center w-full roadmap__content roadmap__content--2'>
							<div className='flex flex-row w-full max-w-screen-xl'>
								{roadmapInfo2.map((roadmap, index) => (
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
					</>
				) : (
					<img className='my-10 ml-4' src={RoadmapMobile} alt='Roadmap' />
				)}
			</div>
			<div className='flex items-center justify-center w-full about'>
				<div className='flex flex-col w-full max-w-screen-xl'>
					<span className='title'>WASTED LANDS TEAM</span>
					<div className='grid-team__container'>
						<div className='grid-team'>
							{Members.map((member, key) => (
								<div key={key} className='grid-team__member'>
									<img
										onLoad={() => onMoveAnimation('pre-loading', 'moveOutOpacity')}
										src={member.image}
										alt='Avatar'
									/>
									<div className='grid-team__member--content'>
										<div className='grid-team__member-front'>
											<img src={BorderIcon} alt='active' />
											<span className='name'>{member.name}</span>
											<span className='position'>{member.position}</span>
										</div>
									</div>
									<div className='grid-team__member-profile'>
										<span>Member Profile</span>
										<ul>
											{member.profile.map((profile, index) => (
												<li key={index}>{profile}</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
