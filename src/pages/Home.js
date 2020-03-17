import React from 'react' ;
import GeneralTable from '../components/Table' ;

export default class Home extends React.Component {
	
	render() {

		return (
			<div>
				<div className="info-container" >
					<h2>Denounce your landlord</h2>
					<br/>
					<p>Did you get robbed of your deposit ?</p>
					<p>You are not alone: every day in Hong Kong this kind of abuse occurs unpunished.</p>
					<br />
					<p>To keep somebody else from getting scammed by your landlord, you can denounce them here.
					It will help future tenants making their choice.</p>
				</div>
				<div className="info-container" >
					<GeneralTable />
				</div>
			</div>
		);

	};

};