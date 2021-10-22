import React from 'react'
import { Banner, DescriptionSection, Begin, Characters, Footer } from './components'

const HomepageWrapper = () => (
	<div className='home-container'>
		<Banner />
		<DescriptionSection />
		<Begin />
		<Characters />
		<Footer />
	</div>
)
export default HomepageWrapper
