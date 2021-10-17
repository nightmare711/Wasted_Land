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
} from 'components'
import { useHideMessage } from 'services/useDevelopUI'
import { HomepageWrapper, About, SalePage, Roadmap } from 'pages'
import { Switch, Route } from 'react-router-dom'
import './root.css'
import 'animate.css/animate.min.css'

function App() {
	useHideMessage()
	React.useEffect(() => {
		const description = document.querySelector('meta[name="description"]')
		if (description) {
			description.remove()
		}
	}, [])
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
				<Route component={About} path='/about' exact />
				<Route component={SalePage} path='/sale' exact />
				<Route component={HomepageWrapper} path='/' exact />
				<Route component={Roadmap} path='/roadmap' exact />
			</Switch>
			<Footer />
		</React.Fragment>
	)
}

export default App
