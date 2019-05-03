import React from 'react';
import './Dashboard.css';

const Dashboard = () => (
	<div>
		<div id="grades">
			<h3 id="grade_title">Grades</h3>
			<table>
				<tr>
					<th>Class</th>
					<th>Grade</th>
				</tr>
				<tr>
					<td>Assembly Language</td>
					<td>85</td>
				</tr>
				<tr>
					<td>Writing for Engineers</td>
					<td>100</td>
				</tr>
				<tr>
					<td>Introduction to Music</td>
					<td>90</td>
				</tr>
			</table>
		</div>
	</div>
);

export default Dashboard;
