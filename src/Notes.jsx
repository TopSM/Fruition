import React from 'react';
import { Button } from 'react-bootstrap';
import './Notes';

import pdf1 from './DIODES.pdf';

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
		console.log(this.state.isPDFShowing, !this.state.isPDFShowing);
		this.setState({ pdf: pdfName, isPDFShowing: !this.state.isPDFShowing });
	};

	onSketchPadClick = () => {
		console.log(this.state.isShowingSketchPad);
		this.setState({ isShowingSketchPad: !this.state.isShowingSketchPad });
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
				<Button variant="primary" onClick={this.onSketchPadClick}>
					Create New Note
				</Button>
				{this.state.isPDFShowing && <Pdf_reader note={this.state.pdf} />}
				{this.state.isShowingSketchPad && <SketchPad />}
			</div>
		);
	}
}

export default Notes;
