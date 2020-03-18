import React from 'react' ;
import ImagesUrls from '../data/imagesUrls' ;
import { GoSearch } from 'react-icons/go' ;
import TextField from '@material-ui/core/TextField' ;

export default class Navbar extends React.Component {

	render() {

		return (
			<nav className="navbar">
				<div className="logo-container">
					<img src={ ImagesUrls.logo } alt="logo" className="logo" />
					<h1 id='site-name'>ScumLord</h1>
				</div>
				<div className="search-container">
					<TextField id="outlined-basic" label="Find a scum" variant="outlined" />
					<GoSearch alt='search icon' className="search-icon" />
				</div>
			</nav>
		);

	};

};