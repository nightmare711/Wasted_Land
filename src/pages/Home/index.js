import React from 'react'
import 'fullpage.js/vendors/scrolloverflow'
import ReactFullpage from '@fullpage/react-fullpage'
import { Banner, DescriptionSection, Begin, Characters, Footer } from './components'

const anchors = ['Banner', 'Description', 'Initialize', 'Character', 'Footer']

export const HomepageWrapper = () => (
	<ReactFullpage
		scrollingSpeed={1200}
		navigation
		scrollOverflow={true}
		navigationTooltips={anchors}
		onLeave={(origin, destination, direction) => {}}
		render={({ state, fullpageApi }) => {
			return (
				<>
					<Banner />
					<DescriptionSection state={state} fullpageApi={fullpageApi} />
					<Begin state={state} fullpageApi={fullpageApi} />
					<Characters state={state} fullpageApi={fullpageApi} />
					<Footer state={state} fullpageApi={fullpageApi} />
				</>
			)
		}}
	/>
)
