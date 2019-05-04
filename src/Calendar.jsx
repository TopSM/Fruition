import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
const today = new Date();
const newDate = new Date();

const myEvents = [
	{
		id: 0,
		title: 'Bitcoin and Cryptocurrency Lecture',
		allDay: false,
		start: new Date(2019, 4, 1, 8, 40, 0),
		end: new Date(2019, 4, 1, 10, 20, 0),
	},
	{
		id: 1,
		title: ' All Day Lecture Series on Quantum Theory',
		allDay: true,
		start: today,
		end: today,
	},
	{
		id: 2,
		title: 'Lecture on Quantum Computing',
		allDay: false,
		start: newDate.setDate(today.getDate() + 1),
		end: newDate.setDate(today.getDate() + 1),
	},
];

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = props => (
	<div style={{ height: '100vh' }}>
		<BigCalendar
			events={myEvents}
			views={allViews}
			step={60}
			showMultiDayTimes
			defaultDate={today}
			localizer={localizer}
		/>
	</div>
);

const Calendar = () => (
	<div>
		<MyCalendar />
		{/*<div class="month">
			<ul>
				<li class="prev">&#10094;</li>
				<li class="next">&#10095;</li>
				<li>
					April
					<span style={{ fontSize: '18px' }}>2019</span>
				</li>
			</ul>
		</div>

		<ul class="weekdays">
			<li>Su</li>
			<li>Mo</li>
			<li>Tu</li>
			<li>We</li>
			<li>Th</li>
			<li>Fr</li>
			<li>Sa</li>
		</ul>

		<ul class="days">
			<li> </li>
			<li>1</li>
			<li>
				<span class="active">2</span>
			</li>
			<li>3</li>
			<li>
				<span class="active">
					<a href="April4th.html">4</a>
				</span>
			</li>
			<li>5</li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>
				<span class="active">9</span>
			</li>
			<li>10</li>
			<li>
				<span class="active">11</span>
			</li>
			<li>12</li>
			<li>13</li>
			<li>14</li>
			<li>15</li>
			<li>
				<span class="active">16</span>
			</li>
			<li>17</li>
			<li>
				<span class="active">18</span>
			</li>
			<li>19</li>
			<li>20</li>
			<li>21</li>
			<li>22</li>
			<li>23</li>
			<li>24</li>
			<li>25</li>
			<li>26</li>
			<li>27</li>
			<li>28</li>
			<li>29</li>
			<li>
				<span class="active">30</span>
			</li>
			<li>31</li>
</ul>*/}
	</div>
);

export default Calendar;
