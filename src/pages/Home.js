import React from 'react' ;
import GeneralTable from '../components/Table' ;
import ScumInput from '../components/ScumInput' ;

export default class Home extends React.Component {
	
	render() {

		return (
			<div>
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
				<div className="info-container" >
					<h2>Last scums denounced:</h2>
					<br />
					<GeneralTable />
				</div>
			</div>
		);

	};

};