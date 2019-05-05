import React from 'react';
import { Button } from 'react-bootstrap';

import pdf1 from './DIODES.pdf';

import Pdf_reader from './Pdf_reader';

class Notes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pdf: undefined,
			isPDFShowing: false,
		};
	}

	onNotesClick = pdfName => {
		console.log(this.state.isPDFShowing, !this.state.isPDFShowing);
		this.setState({ pdf: pdfName, isPDFShowing: !this.state.isPDFShowing });
	};

	render() {
		return (
			<div>
				<h1>Class notes 1</h1>
				<Button variant="primary" onClick={() => this.onNotesClick(pdf1)}>
					Notes 1
				</Button>
				<Button variant="primary" onClick={() => this.onNotesClick(pdf1)}>
					Notes 2
				</Button>
				{this.state.isPDFShowing && <Pdf_reader note={this.state.pdf} />}
			</div>
		);
	}
}

export default Notes;
