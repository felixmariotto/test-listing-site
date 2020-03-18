import React from 'react' ;
import ImagesUrls from '../data/imagesUrls' ;
import { GoSearch } from 'react-icons/go' ;
import TextField from '@material-ui/core/TextField' ;
import SocketContext from './socket-context' ;

class Navbar extends React.Component {

	constructor() {

		super();

		this.handleChange = this.handleChange.bind( this );

	};


	handleChange(e) {

		this.props.socket.emit('search', e.target.value );

		if ( e.target.value.length > 0 ) {

			this.props.setSearchState( true );

		} else {

			this.props.setSearchState( false );

		};

	};


	render() {

		return (
			<nav className="navbar">
				<div className="logo-container">
					<img src={ ImagesUrls.logo } alt="logo" className="logo" />
					<h1 id='site-name'>ScumLord</h1>
				</div>
				<div className="search-container">
					<TextField
						id="outlined-basic"
						label="Find a scum"
						variant="outlined"
						onChange={ this.handleChange }
					/>
					<GoSearch alt='search icon' className="search-icon" />
				</div>
			</nav>
		);

	};

};


const NavBarWithSocket = function( props ) {

	return (

		<SocketContext.Consumer>
			{ socket => <Navbar {...props} socket={socket} /> }
		</SocketContext.Consumer>

	);

}




export default NavBarWithSocket ;