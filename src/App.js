import React from 'react';
import { Route, Switch } from 'react-router-dom' ;
import './App.css';
import socketIOClient from 'socket.io-client';

import Home from './pages/Home' ;
import Error from './pages/Error' ;

import Navbar from './components/Navbar' ;
import SocketContext from './components/socket-context';

const socket = socketIOClient();

export default class App extends React.Component {

	render() {

		return (
			<SocketContext.Provider value={ socket } >
			    <div className="App">
			    	<Switch>
			    		<Route exact path='/' component={ Home } />
			    		<Route component={ Error } />
			    	</Switch>
			    	<Navbar />
			    </div>
		    </SocketContext.Provider>
		);

	};

};
