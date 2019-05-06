import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './images/FruitionLogo1.png';
import './App.css';

import Navigation from './Navigation';
import Calendar from './Calendar';
import Fruition from './Fruition';
import Dashboard from './Dashboard';
import Notes from './Notes';
import DateComponent from './DateComponent';
import Pdf_reader from './Pdf_reader';
import Landing from './Landing';

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
