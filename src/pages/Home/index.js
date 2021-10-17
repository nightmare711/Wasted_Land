import React from 'react'
import { Banner, DescriptionSection, Begin, Characters, Footer } from './components'
import { Helmet } from 'react-helmet'

export const HomepageWrapper = () => (
	<div className='home-container'>
		<Helmet>
			<title>Wasted Lands | Home</title>
			<meta property='og:title' content='Wasted Lands | Home' />
			<meta
				property='og:image'
				content='https://res.cloudinary.com/mapimage/image/upload/v1632591171/banner-social_gfpyqm.jpg'
			/>
			<meta
				property='og:description'
				content='Know your identity, fight for your tribe, earn valuable tokens & resources.'
			/>
			<meta
				name='description'
				content='Know your identity, fight for your tribe, earn valuable tokens & resources.'
			/>
		</Helmet>
		<Banner />
		<DescriptionSection />
		<Begin />
		<Characters />
		<Footer />
	</div>
)
