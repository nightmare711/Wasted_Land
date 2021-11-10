import React from 'react'
import './WarriorInfo.css'
import { Art4, War1, Icon } from '../../../assets/inventory'
import { onMoveAnimation } from 'services/useDevelopUI'
import { useParams } from 'react-router'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { Link } from 'react-router-dom'
import { useGetHero } from 'queries/useGetHero.query'

/**
 * @author
 * @function WarriorInfo
 **/

export const WarriorInfo = (props) => {
	let id = useParams()
	console.log(id)
	const { data: heroData, refetch: refetchHeroData, isSuccess } = useGetHero(id.id)
	React.useEffect(() => {
		refetchHeroData()
		// eslint-disable-next-line
	}, [id])
	const offerList = [
		{
			offfer_from: '0x320CA81',
			offer_to: '0x320CA8',
			offer_time: '1days ago',
		},
		{
			offfer_from: '0x320CA',
			offer_to: '0x320CA81',
			offer_time: '1days ago',
		},
		{
			offfer_from: '0x320C',
			offer_to: '0x320CA81',
			offer_time: '1days ago',
		},
	]
	const historyList = [
		{
			offer_event: 'List',
			offer_price: '0.77',
			offfer_from: '0x320CA81',
			offer_to: '0x320CA8',
			offer_time: '1days ago',
		},
		{
			offer_event: 'List',
			offer_price: '0.77',
			offfer_from: '0x320CA',
			offer_to: '0x320CA81',
			offer_time: '1days ago',
		},
		{
			offer_event: 'List',
			offer_price: '0.77',
			offfer_from: '0x320C',
			offer_to: '0x320CA81',
			offer_time: '1days ago',
		},
		{
			offer_event: 'List',
			offer_price: '0.77',
			offfer_from: '0x320CA816',
			offer_to: '0x320CA81',
			offer_time: '1days ago',
		},
		{
			offer_event: 'List',
			offer_price: '0.77',
			offfer_from: '0x320C',
			offer_to: '0x320CA81',
			offer_time: '1days ago',
		},
		{
			offer_event: 'List',
			offer_price: '0.77',
			offfer_from: '0x320CA816',
			offer_to: '0x320CA81',
			offer_time: '1days ago',
		},
		{
			offer_event: 'List',
			offer_price: '0.77',
			offfer_from: '0x320C',
			offer_to: '0x320CA81',
			offer_time: '1days ago',
		},
		{
			offer_event: 'List',
			offer_price: '0.77',
			offfer_from: '0x320CA816',
			offer_to: '0x320CA81',
			offer_time: '1days ago',
		},
		{
			offer_event: 'List',
			offer_price: '0.77',
			offfer_from: '0x320CA816',
			offer_to: '0x320CA81',
			offer_time: '1days ago',
		},
		{
			offer_event: 'List',
			offer_price: '0.77',
			offfer_from: '0x320C',
			offer_to: '0x320CA81',
			offer_time: '1days ago',
		},
		{
			offer_event: 'List',
			offer_price: '0.77',
			offfer_from: '0x320CA816',
			offer_to: '0x320CA81',
			offer_time: '1days ago',
		},
		{
			offer_event: 'List',
			offer_price: '0.77',
			offfer_from: '0x320CA816',
			offer_to: '0x320CA81',
			offer_time: '1days ago',
		},
		{
			offer_event: 'List',
			offer_price: '0.77',
			offfer_from: '0x320C',
			offer_to: '0x320CA81',
			offer_time: '1days ago',
		},
		{
			offer_event: 'List',
			offer_price: '0.77',
			offfer_from: '0x320CA816',
			offer_to: '0x320CA81',
			offer_time: '1days ago',
		},
	]
	return (
		<div className='warrior-information  flex flex-col items-center w-full'>
			<div className='warrior-info-top flex items-center justify-center'>
				<div className='max-w-screen-xl flex justify-between w-full relative'>
					<Link to='/inventory'>
						<div className='back-to-inventory absolute top-0 left-0 flex items-center'>
							<KeyboardArrowLeftIcon />
							<span>Back</span>
						</div>
					</Link>
					<div className='flex-1'>
						<div className='flex justify-center'>
							<div className='war-left-info flex flex-col justify-center'>
								<img
									src={War1}
									alt=''
									onLoad={() => onMoveAnimation('pre-loading', 'moveOutOpacity')}
								/>
								<img src={War1} alt='' />
								<img src={War1} alt='' />
								<img src={War1} alt='' />
							</div>
							<img className=' war-img' src={isSuccess ? heroData.hero.image : Art4} alt='art4' />
							<div className='war-left-info flex flex-col justify-center'>
								<img src={War1} alt='' />
								<img src={War1} alt='' />
								<img src={War1} alt='' />
								<img src={War1} alt='' />
							</div>
						</div>
						<div className='flex justify-center items- mt-8'>
							<div className='flex items-center mr-16'>
								<div className=''>icon</div>
								<div className='flex flex-col'>
									<span>Faction</span>
									<span>Ex-Soldier</span>
								</div>
							</div>
							<div className='flex flex-col'>
								<span>Level</span>
								<span>Intern</span>
							</div>
						</div>
					</div>
					<div className='flex-1 mt-8 ml-16'>
						<div className='flex justify-between items-center'>
							<div className='flex flex-col'>
								<span className='war-info-tiltle'>
									{isSuccess ? heroData.hero.parts.body_id.character : null}
								</span>
								<div className='flex items-center mt-2'>
									<img className='war-icon mr-1' src={Icon} alt='ss' />
									<span className='war-bnb'>0.82 BNB</span>
									<span className='war-price'>= $308</span>
								</div>
							</div>
							<div className='btn-sell-war btn-secondary'>Sell On MarketPlace</div>
						</div>
						<div className=''>
							<div className='flex justify-between mt-6 war-info-statbody'>
								<div className=''>
									<span>Stats (28)</span>
									<div className='p-6 relative border-solid border border-white w-52'>
										{isSuccess
											? Object.entries(heroData.hero.stats).map((stat, keysl) => {
													return (
														<div key={keysl} className='flex'>
															<span>icon</span>
															<div className='flex flex-col'>
																<span>{stat.key}</span>
																<span>{stat.value}</span>
															</div>
														</div>
													)
											  })
											: null}
										<span className='absolute bottom-0 text-center w-full '>Details Stats</span>
									</div>
								</div>
								<div className=''>
									<span>Body Part</span>
									<div className='p-6 relative border-solid border border-white w-52 flex flex-col'>
										{/* {isSuccess
											? Object.entries(heroData.hero.parts).map((res, keysl) => {
													return (
														<div key={keysl} className='flex'>
															<span>{res.value.type}</span>
															<span>{res.value.character}</span>
														</div>
													)
											  })
											: null} */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='warrior-info-bottom flex flex-col items-center justify-center w-full'>
				<div className='max-w-screen-xl flex w-full'>
					<div className='w-1/3 mr-4 flex flex-col'>
						<span>Offers</span>
						<div className='w-full max-h-60 overflow-y-auto relative'>
							<table className='warior-info-table'>
								<thead>
									<tr>
										<th>From</th>
										<th>From</th>
										<th>Time</th>
									</tr>
								</thead>
								<tbody>
									{offerList.map((off, key) => {
										return (
											<tr key={key}>
												<td>{off.offfer_from}</td>
												<td>{off.offer_to}</td>
												<td>{off.offer_time}</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
					</div>
					<div className='w-2/3 flex-col flex'>
						<span>Sale history</span>
						<div className='w-full h-60 overflow-y-auto relative'>
							<table className='warior-info-table warior-info-table-fixed'>
								<thead className='sticky top-0'>
									<tr>
										<th>
											<div>Event</div>
										</th>
										<th>
											<div>Price</div>
										</th>
										<th>
											<div>From</div>
										</th>
										<th>
											<div>To</div>
										</th>
										<th>
											<div>Time</div>
										</th>
									</tr>
								</thead>
								<tbody>
									{historyList.map((off, key) => {
										return (
											<tr key={key}>
												<td>{off.offer_event}</td>
												<td>{off.offer_price}</td>
												<td>{off.offfer_from}</td>
												<td>{off.offer_to}</td>
												<td>{off.offer_time}</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className='max-w-screen-xl w-full'>
					<div className='btn-secondary self-start mt-6 mb-20'>Make Offer</div>
				</div>
			</div>
		</div>
	)
}
export default WarriorInfo
