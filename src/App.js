import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Navigation from './Navigation';
import Calendar from './Calendar';
import Fruition from './Fruition';
import Dashboard from './Dashboard';
import Notes from './Notes';
import DateComponent from './DateComponent';

function Landing() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navigation />
					<Route exact path="/" component={Landing} />
					<Route path="/calendar" component={Calendar} />
					<Route path="/fruition" component={Fruition} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/notes" component={Notes} />
					<Route path="/date" component={DateComponent} />
				</div>
			</Router>
		);
	}
}

export default App;
