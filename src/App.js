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
	Coming,
	ScrollButton,
	ComingBuy,
} from 'components'
import { useHideMessage, useShowButtonScroll } from 'services/useDevelopUI'
import { HomepageWrapper, Roadmap } from 'pages'
import { Switch, Route } from 'react-router-dom'
import './root.css'
import 'animate.css/animate.min.css'

function App() {
	useHideMessage()
	useShowButtonScroll()
	return (
		<React.Fragment>
			<ScrollButton />
			<AccountDetail />
			<PreLoading />
			<ListMessage />
			<Loading />
			<MenuList />
			<Navbar />
			<Connect />
			<Switch>
				<Route component={ComingBuy} path='/summon-warriors' exact />
				<Route component={Roadmap} path='/about-us' exact />
				<Route component={HomepageWrapper} path='/' exact />
				<Route component={Coming} />
			</Switch>
			<Footer />
		</React.Fragment>
	)
}

export default App
