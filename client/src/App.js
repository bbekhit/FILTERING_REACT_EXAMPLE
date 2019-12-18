import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/styles.scss'

// Redux
import { Provider } from 'react-redux'
import store from './store/store'

import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Home} />
					</Switch>
				</Fragment>
			</Router>
		</Provider>
	)
}

export default App
