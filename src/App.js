import React from 'react'
import { BrowserRouter as Router,Route, Redirect, Switch } from 'react-router-dom'
import Styles from './App.module.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Menu } from './components/Menu/Menu'
import { Scene } from './components/Scene/Scene'
import Projects from "./components/Projects/Projects";

export const App = () => {
  	return (
  		<>
		<Router>

			<Switch>
				<Route path="/projects" exact>
					<Projects />
				</Route>
			<div className={Styles.app}>
				<Header />
				<div className={`${Styles.content} ${Styles.backgroundColor}`}>
					<Menu />
					<Scene />
				</div>
				<Footer />
			</div>

			</Switch>
			<Redirect to="/main" />
		</Router>
		</>
  	)
}