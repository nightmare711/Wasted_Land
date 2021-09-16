import React from 'react'
import BorderImage from 'assets/home/border-page.png'
import { Navbar } from 'components'
import { Fade } from 'react-reveal'
import './Banner.css'

export const Banner = ({ state }) => {
	const [isRender, setIsRender] = React.useState(false)
	React.useEffect(() => {
		setTimeout(() => {
			setIsRender(true)
		}, 1000)
	}, [])
	return (
		<div className='banner-home section'>
			<Navbar />
			<img src={BorderImage} alt='BorderImage' className='border-page' />
			<div className='banner-content'>
				<Fade when={isRender} bottom>
					<h1>WASTED LANDS</h1>
					<span>NFT Post Appocalypse Game</span>
					<div className='flex flex-row btn-container'>
						<div className='mr-4 btn-primary'>Buy Character</div>
						<div className='ml-4 btn-secondary'>Buy Character</div>
					</div>
				</Fade>
			</div>
		</div>
	)
}
