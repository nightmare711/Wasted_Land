import React from 'react'
import './Inventory.css'
import { onMoveAnimation } from 'services/useDevelopUI'
import { Banner, Art1, Icon } from '../../assets/inventory'
import { Link } from 'react-router-dom'
import { useGetPlayerHero } from 'queries/useGetHero.query'

/**
 * @author
 * @function
 **/

export const Inventory = (props) => {
	let playerAddress = '0x320CA81698b298A4Fb25192d57F967395462FCb8'
	const { data: playerHeroData, isSuccess } = useGetPlayerHero(playerAddress)
	return (
		<div>
			<div id='overlay-inventory' className='inventory flex flex-col items-center'>
				<img
					onLoad={() => onMoveAnimation('pre-loading', 'moveOutOpacity')}
					src={Banner}
					alt='inventory-banner'
				/>
				<div className='flex flex-col w-full items-center'>
					<div className='inventory-tiltle self-center'>YOUR INVENTORY</div>
					<div className='inventory-tabbar sticky flex w-full justify-center'>
						<div className='tabbar-container flex flex-1'>
							<div className='tabbar-active'>Warriors</div>
							<div className=''>Equipment</div>
							<div className=''>Vehicle</div>
						</div>
					</div>
					<div id='inventory-warriors' className='max-w-screen-xl  inventory-container grid mb-14'>
						{isSuccess && playerHeroData.heroes.length > 0 ? (
							playerHeroData.heroes.map((war, key) => {
								return (
									<Link to={`/inventory/${war.id}`}>
										<div key={key} className='warrior-container'>
											<img className='war-img' src={Art1} alt={war.image} />
											<span className='warrior-pos'>{war.parts.body_id.character}</span>
											<div className='war-border'></div>
											<div className='flex justify-between items-center'>
												<div className='flex items-center'>
													<img className='war-icon mr-1' src={Icon} alt={Icon} />
													<span className='war-bnb'>{war.listing}</span>
												</div>
												<span className='war-price'>{war.price}</span>
											</div>
										</div>
									</Link>
								)
							})
						) : (
							<div className='btn-primary'>Join Discord</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
export default Inventory
