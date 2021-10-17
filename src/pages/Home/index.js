import React from 'react'
import { Banner, DescriptionSection, Begin, Characters, Footer } from './components'
import { Helmet } from 'react-helmet'

export const HomepageWrapper = () => (
	<div className='home-container'>
		<Helmet>
			<title>Wasted Lands | Home</title>
			<meta property='og:title' content='Wasted Lands' data-react-helmet='true' />
			<meta
				property='og:image'
				content='https://res.cloudinary.com/mapimage/image/upload/v1632591171/banner-social_gfpyqm.jpg'
				data-react-helmet='true'
			/>
			<meta
				property='og:description'
				content='Know your identity, fight for your tribe, earn valuable tokens & resources.'
				data-react-helmet='true'
			/>
			<meta
				name='description'
				content='Know your identity, fight for your tribe, earn valuable tokens & resources.'
				data-react-helmet='true'
			/>
		</Helmet>
		<Banner />
		<DescriptionSection />
		<Begin />
		<Characters />
		<Footer />
	</div>
)
