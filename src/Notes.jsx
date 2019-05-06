import React from 'react';
import { Button, Alert } from 'react-bootstrap';
import './Notes';

import pdf1 from './DIODES.pdf';
import pdf2 from  './SchoolNotes.pdf';

import Pdf_reader from './Pdf_reader';
import SketchPad from './SketchPad';

class Notes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pdf: undefined,
			isPDFShowing: false,
			isShowingSketchPad: false,
		};
	}

	onNotesClick = pdfName => {
		this.setState({ pdf: pdfName, isPDFShowing: !this.state.isPDFShowing });
	};

	onSketchPadClick = () => {
		this.setState({ isShowingSketchPad: !this.state.isShowingSketchPad });
	};

	render() {
		console.log(this.state.isShowingSketchPad,'sketch');
		console.log(this.state.isPDFShowing, 'pdf');

		return (
			<div>
				<h1>Class notes 1</h1>
				<Button variant="primary" onClick={() => this.onNotesClick(pdf1)}>
					Notes 1
				</Button>
				<Button variant="primary" onClick={() => this.onNotesClick(pdf2)}>
					Notes 2
				</Button>

				<Button variant="primary" onClick={this.onSketchPadClick}>
					Create New Note
				</Button>
				{this.state.isPDFShowing && this.state.isShowingSketchPad && <Alert variant="danger">
				    You must close the drawing before opening a note </Alert> }
				{this.state.isPDFShowing && !this.state.isShowingSketchPad && <Pdf_reader note={this.state.pdf} />}
				{this.state.isShowingSketchPad && <SketchPad />}

			</div>
		);
	}
}

export default Notes;
