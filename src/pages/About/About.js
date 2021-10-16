import React from 'react'
import Active from 'assets/home/Active.png'
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
import './About.css'
import { onMoveAnimation } from 'services/useDevelopUI'

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
		image: member_4,
		name: 'Hai Vu',
		position: 'Game Adviser',
		profile: [
			'Technical Leader at Zitga Game Vietnam.',
			'Lead Technical team with 30+ members, developing and maintaining 7 Mid-core games.',
			'7 years exp of game programming and technical management.',
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
		image: member_6,
		name: 'Tai Nguyen',
		position: 'Blockchain Lead',
		profile: [
			'VIN ID core product team.',
			'4 years experienced in building DeFi apps (Light Shadow Box, Arise Finance) NFT market place (Arise NFTs marketplace) & an NFT Guru himself.',
			'DeFi & NFT games (Ari Bird).',
			'Smart contract experts.',
		],
	},
	{
		image: member_7,
		name: 'Henry Van',
		position: 'CGO',
		profile: [
			'5 years exp expert in building community & establish partnerships.',
			'Fundraising on different platforms (both crypto & non crypto like Kickstarter, Indiegogo).',
			'Token listings & Content strategist.',
			'Strong relationship with crypto influencers around the world.',
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
]

export const About = () => {
	return (
		<div className='flex items-center justify-center w-full about'>
			<div className='w-full max-w-screen-xl '>
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
										<img src={Active} alt='active' />
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
	)
}
