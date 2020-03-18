import React from 'react' ;
import TextField from '@material-ui/core/TextField';
import SocketContext from './socket-context' ;

class ScumInput extends React.Component {

	constructor() {

		super();

		this.state = {
			name: '',
			address: '',
			amount: '',
			errorName: false,
			errorAddress: false,
			errorAmount: false
		};

		this.handleChange = this.handleChange.bind( this );
		this.validateInput = this.validateInput.bind( this );

		document.addEventListener( 'keydown', (e)=> {

			if ( e.key === "Enter" ) {
				this.validateInput();
			};

		});

	};


	validateInput() {

		if ( this.state.name.length === 0 ) {
			this.setState({
				errorName: true
			});
		} else {
			this.setState({
				errorName: false
			});
		};

		if ( this.state.address.length === 0 ) {
			this.setState({
				errorAddress: true
			});
		} else {
			this.setState({
				errorAddress: false
			});
		};

		if ( this.state.amount.length === 0 ) {
			this.setState({
				errorAmount: true
			});
		} else {
			this.setState({
				errorAmount: false
			});
		};

		if ( this.state.name.length !== 0 &&
			 this.state.address.length !== 0 &&
			 this.state.amount.length !== 0 ) {

			let state = {
				name: this.state.name,
				address: this.state.address,
				amount: this.state.amount
			};

			this.props.socket.emit('landlordCredentials', state );

		};

	};


	handleChange(e) {

		this.setState({
			[ e.target.id ]: e.target.value
		});

	};


	render() {

		return (
			<div className="input-container">
				<div className="input-grid">
					<div className="input-element">
						<TextField
							error={ this.state.errorName }
							id="name"
							label="Landlord's name"
							onChange={ this.handleChange }
						/>
					</div>
					<div className="input-element">
						<TextField
							error={ this.state.errorAddress }
							id="address"
							label='Address of the premises'
							onChange={ this.handleChange }
						/>
					</div>
					<div className="input-element">
						<TextField
							error={ this.state.errorAmount }
							id="amount"
							label='Amount of money robbed'
							onChange={ this.handleChange }
						/>
					</div>
				</div>
			</div>
		);

	};

};


const ScumInputWithSocket = function( props ) {

	return (

		<SocketContext.Consumer>
			{ socket => <ScumInput {...props} socket={socket} /> }
		</SocketContext.Consumer>

	);

};


export default ScumInputWithSocket ;