import React from 'react'
import {
	Navbar,
	Connect,
	Loading,
	ListMessage,
	AccountDetail,
	MenuList,
	PreLoading,
	Footer,
	ScrollButton,
} from 'components'
import { useHideMessage, useShowButtonScroll } from 'services/useDevelopUI'
import { Switch, Route } from 'react-router-dom'
import './root.css'
import 'animate.css/animate.min.css'

const HomePage = React.lazy(() => import('./pages/Home'))

const RoadmapPage = React.lazy(() => import('./pages/Roadmap/Roadmap'))
const ComingPage = React.lazy(() => import('./components/Coming/Coming'))
const ComingBuyPage = React.lazy(() => import('./components/Coming/ComingBuy'))

function App() {
	useHideMessage()
	useShowButtonScroll()
	return (
		<React.Suspense fallback={<PreLoading />}>
			<ScrollButton />
			<AccountDetail />
			<PreLoading />
			<ListMessage />
			<Loading />
			<MenuList />
			<Navbar />
			<Connect />
			<Switch>
				<Route component={ComingBuyPage} path='/summon-warriors' exact />
				<Route component={RoadmapPage} path='/about-us' exact />
				<Route component={HomePage} path='/' exact />
				<Route component={ComingPage} />
			</Switch>
			<Footer />
		</React.Suspense>
	)
}

export default App
