import React from 'react';
import pdf from './DIODES.pdf';
import './Pdf_reader.css';

const Pdf_reader = ({ note }) => {
	return (
		<div>
			<iframe title="pdfReader" className="pdf" src={`${note}#zoom=100`} />
		</div>
	);
};

export default Pdf_reader;
