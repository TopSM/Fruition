import React from 'react';
import SignatureCanvas from 'react-signature-canvas';

// import './Sketchboard.css';

const Sketchboard = () => (
	<div style={{ height: '100vh' }}>
		Helloworld
		<SignatureCanvas
			penColor="green"
			canvasProps={{
				backgroundColor: 'red',
				width: 500,
				height: 200,
				className: 'sigCanvas',
			}}
		/>
	</div>
);

export default Sketchboard;
