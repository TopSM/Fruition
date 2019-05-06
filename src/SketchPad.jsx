import React, { Component } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { Button } from 'react-bootstrap';

// import './Sketchboard.css';

class Sketchboard extends Component {
	render() {
		return (
			<div style={{ height: '100vh' }}>
				<Button
					onClick={() => {
						this.saveableCanvas.clear();
					}}
				>
					Clear
				</Button>
				<Button
					onClick={() => {
						this.saveableCanvas.undo();
					}}
				>
					Undo
				</Button>
				<CanvasDraw
					canvasWidth={'100%'}
					canvasHeight={'100%'}
					brushRadius={2}
					ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
				/>
			</div>
		);
	}
}

export default Sketchboard;
