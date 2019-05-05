import React from 'react';
import {Link} from 'react-router-dom';
import pdf from './DIODES.pdf';
import Pdf_reader from './Pdf_reader';

const Notes = () => (
	<div>
		<h1>Class notes 1</h1>
		<Link params={{ pdf: pdf }} to="/pdf">Notes 1</Link>
	</div>
);

export default Notes;
