import React from 'react';
import { Route, Switch } from 'react-router-dom' ;
import './App.css';

import Home from './pages/Home' ;
import Error from './pages/Error' ;

import Navbar from './components/Navbar' ;

export default class App extends React.Component {
  
	render() {

		return (
		    <div className="App">
		    	
		    	<Switch>
		    		<Route exact path='/' component={ Home } />
		    		<Route component={ Error } />
		    	</Switch>
		    	<Navbar />
		    </div>
		);

	};

};
