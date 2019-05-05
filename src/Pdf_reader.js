import React from 'react';
import pdf from './DIODES.pdf';
import './Pdf_reader.css';

const Pdf_reader = (props) => {
	const pdf=props.match.params.pdf 
	console.log('this is pdf', pdf)
	return (
	<div >
	<p> hello world </p>
		<iframe className='pdf' src={`${pdf}#zoom=100`}/>
	</div>
)
};

export default Pdf_reader;
