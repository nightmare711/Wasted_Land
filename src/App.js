import React from 'react'
import {
	Navbar,
	Connect,
	Loading,
	ListMessage,
	AccountDetail,
	MenuList,
	PreLoading,
} from 'components'
import { useHideMessage } from 'services/useDevelopUI'
import { HomepageWrapper } from 'pages'
import { Switch, Route } from 'react-router-dom'
import './root.css'
import 'animate.css/animate.min.css'

function App() {
	useHideMessage()
	return (
		<React.Fragment>
			<AccountDetail />
			<PreLoading />
			<ListMessage />
			<Loading />
			<MenuList />
			<Navbar />
			<Connect />
			<Switch>
				<Route component={HomepageWrapper} path='/' exact />
			</Switch>
		</React.Fragment>
	)
}

export default App
