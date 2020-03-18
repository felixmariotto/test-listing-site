import React from 'react';
import { Route, Switch } from 'react-router-dom' ;
import './App.css';
import socketIOClient from 'socket.io-client';

import Home from './pages/Home' ;
import Error from './pages/Error' ;

import Navbar from './components/Navbar' ;

export default class App extends React.Component {

	componentDidMount() {
		console.log('mounted')
		const socket = socketIOClient();
		socket.on( "test", ()=> { console.log('message from server') } )
	}

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
