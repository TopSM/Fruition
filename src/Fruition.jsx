import React from 'react';
import {Table} from 'react-bootstrap'
// import './Fruition.css';



class Fruition extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowingCurriculum: false,
		};
	}

	onClassClick = () => {
		this.setState({ isShowingCurriculum: !this.state.isShowingCurriculum});
	};

	render() {
		return (
		<div>
		<div id="Main">
	{//}		<h2>Fruition</h2>
	}		<div id="Team_pic" />
				<div id="About">
					<p />
			</div>
			{//<a href="Dashboard.html">Dashboard</a>
	}
		<div id= 'grades'>
			<h3 id= 'grade_title'> Grades</h3>			
		<Table striped bordered hover variant="dark" className='table'>
				<tr>
					<th>Class</th>
					<th>Grade</th>					
				</tr>
				{/* make a drop down*of another table showing grades*/}
				<tr> 
					<td align='center'> <a onClick={this.onClassClick}> Introduction to World Politics</a>
					
					{this.state.isShowingCurriculum &&
						<table id=' curriulum' >
						<tr>
							<th>Item</th> 
							<th>% of Grade</th>
							<th>Current</th>
						</tr>
						<tr>
							<td>Reading Response #1</td>
							<td>5</td> 
							<td>100 </td> 
						</tr>

						<tr>
							<td>Reading Response #2</td> 
							<td>5</td> 
							<td>100</td> 
						</tr>
						<tr>
							<td>Reading Response #3</td> 
							<td>5</td> 
							<td>100</td> 
						</tr>
						<tr>
							<td>Midterm</td> 
							<td>20</td> 
							<td>80</td> 
						</tr>
						<tr>
							<td>Short Paper</td> 
							<td>30</td> 
							<td>100</td> 
						</tr>
						<tr>
							<td>Final</td> 
							<td>30</td> 
							<td>--</td> 
						</tr>
						<tr>
							<td>Particpation</td> 
							<td>5</td> 
							<td>--</td> 
						</tr>
						</table>
					}
					</td>
				{/* 

				*/}

					<td>90</td>
				</tr>
			</Table>

		</div>
		</div>
	</div>


)}};

export default Fruition;
