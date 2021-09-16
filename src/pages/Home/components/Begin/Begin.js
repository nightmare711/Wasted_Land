import React from 'react'
import { Fade, Bounce } from 'react-reveal'
import { useReRenderComponent } from 'services/useDevelopUI'
import CharactersView from 'assets/home/bg-characters-view.png'
import './Begin.css'

export const Begin = ({ fullpageApi, state }) => {
	const isRender = useReRenderComponent(state, 'Initialize')
	return (
		<div className='section'>
			<div className='flex flex-col items-center justify-center w-full h-full begin-section'>
				<Fade when={isRender} left>
					<span className='sub-title'>It's time to</span>
				</Fade>
				<Bounce when={isRender} right collapse>
					<div className='title'>BUILD YOUR TEAM</div>
				</Bounce>
				<Fade when={isRender} left>
					<span className='title-secondary'>
						Collect Your <span>NFT characters</span>
					</span>
				</Fade>
				<img className='mt-10' src={CharactersView} alt='Characters View' />
			</div>
		</div>
	)
}
