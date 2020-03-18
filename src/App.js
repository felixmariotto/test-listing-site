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

	constructor() {

		super();

		this.state = {
			isInSearch: false
		};

		this.setSearchState = this.setSearchState.bind( this );

	};

	setSearchState( bool ) {

		this.setState({
			isInSearch: bool
		});

	};

	render() {

		return (
			<SocketContext.Provider value={ socket } >
			    <div className="App">
			    	<Switch>
			    		<Route 
			    			exact
			    			path='/'
			    			render={ props=> <Home {...props} isInSearch={ this.state.isInSearch } /> }
			    		/>
			    		<Route component={ Error } />
			    	</Switch>
			    	<Navbar setSearchState={ this.setSearchState } />
			    </div>
		    </SocketContext.Provider>
		);

	};

};
