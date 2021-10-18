import React from 'react'
import { Banner, DescriptionSection, Begin, Characters, Footer } from './components'

export const HomepageWrapper = () => (
	<div className='home-container'>
		<Banner />
		<DescriptionSection />
		<Begin />
		<Characters />
		<Footer />
	</div>
)
