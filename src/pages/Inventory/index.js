import React from 'react'
import './Inventory.css'
import { onMoveAnimation } from 'services/useDevelopUI'
import { Banner, Art1, Art2, Icon } from '../../assets/inventory'
import { Link } from 'react-router-dom'

/**
 * @author
 * @function
 **/

export const Inventory = (props) => {
	const listWarrior = [
		{ image: Art1, pos: 'Intern Worker', icon: Icon, price: '$308', bnb: '0.82 BNB' },
		{ image: Art2, pos: 'Intern Profeser', icon: Icon, price: '$308', bnb: '0.82 BNB' },
		{ image: Art1, pos: 'Intern Worker', icon: Icon, price: '$308', bnb: '0.82 BNB' },
		{ image: Art2, pos: 'Intern Profeser', icon: Icon, price: '$308', bnb: '0.82 BNB' },
		{ image: Art1, pos: 'Intern Worker', icon: Icon, price: '$308', bnb: '0.82 BNB' },
		{ image: Art2, pos: 'Intern Profeser', icon: Icon, price: '$308', bnb: '0.82 BNB' },
		{ image: Art1, pos: 'Intern Worker', icon: Icon, price: '$308', bnb: '0.82 BNB' },
		{ image: Art2, pos: 'Intern Profeser', icon: Icon, price: '$308', bnb: '0.82 BNB' },
		{ image: Art1, pos: 'Intern Worker', icon: Icon, price: '$308', bnb: '0.82 BNB' },
		{ image: Art2, pos: 'Intern Profeser', icon: Icon, price: '$308', bnb: '0.82 BNB' },
	]
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
					<div id='inventory-warriors' className='max-w-screen-xl  inventory-container grid'>
						{listWarrior.map((war, key) => {
							return (
								<Link to='/inventory/1'>
									<div key={key} className='warrior-container'>
										<img className='war-img' src={war.image} alt={war.image} />
										<span className='warrior-pos'>{war.pos}</span>
										<div className='war-border'></div>
										<div className='flex justify-between items-center'>
											<div className='flex items-center'>
												<img className='war-icon mr-1' src={war.icon} alt={war.icon} />
												<span className='war-bnb'>{war.bnb}</span>
											</div>
											<span className='war-price'>{war.price}</span>
										</div>
									</div>
								</Link>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}
export default Inventory
