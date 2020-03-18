import React from 'react' ;
import GeneralTable from '../components/Table' ;
import ScumInput from '../components/ScumInput' ;


export default class Home extends React.Component {


	render() {

		return (
			<div>
				<Info mustShow={ !this.props.isInSearch } />
				<div className="info-container" >
					<h2>{
						this.props.isInSearch ?
							'Found these scums :' :
							'Last scums denounced :'
					}</h2>
					<br />
					<GeneralTable />
				</div>
			</div>
		);

	};

};


function Info( props ) {

	if ( props.mustShow ) {

		return (

			<div className="info-container" >
				<h2>Denounce your landlord</h2>
				<br/>
				<p><strong>Did you get robbed of your deposit ?</strong></p>
				<br/>
				<p>You are not alone: every day in Hong Kong this kind of abuse occurs unpunished.</p>
				<br />
				<p>To keep somebody else from getting scammed by your landlord, you can denounce them here.
				It will help future tenants making their choice.</p>
				<br />
				<ScumInput />
			</div>

		);

	} else {

		return null

	};

};