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
		title: 'The Politics of International Trade (II)',
		allDay: false,
		start: new Date(2019, 3, 2, 2, 0, 0),
		end: new Date(2019, 3, 2, 3, 15, 0),
		hexColor: 'e842f4',
	},
	{
		id: 1,
		title: 'Globalization and Technology',
		allDay: false,
		start: new Date(2019, 3, 4, 2, 0, 0),
		end: new Date(2019, 3, 4, 3, 15, 0),
		hexColor: 'e842f4',
	},
	{
		id: 2,
		title: 'The Politics of Immigration (I)',
		allDay: false,
		start: new Date(2019, 3, 9, 2, 0, 0),
		end: new Date(2019, 3, 9, 3, 15, 0),
		hexColor: 'e842f4',
	},
	{
		id: 3,
		title: 'The Politics of Immigration (II)',
		allDay: false,
		start: new Date(2019, 3, 11, 2, 0, 0),
		end: new Date(2019, 3, 11, 3, 15, 0),
		hexColor: 'e842f4',
	},
	{
		id: 4,
		title: 'The Politics of International Development (I)',
		allDay: false,
		start: new Date(2019, 3, 16, 2, 0, 0),
		end: new Date(2019, 3, 16, 3, 15, 0),
		hexColor: 'e842f4',
	},

	{
		// CHANGE TO A DIFFERENT COLOR THEN DEFAULT
		id: 5,
		title: 'READING RESPONSE #3 DUE',
		allDay: false,
		start: new Date(2019, 3, 18, 2, 0, 0),
		end: new Date(2019, 3, 18, 3, 15, 0),
		hexColor: '0808d1',
	},
	{
		id: 6,
		title: 'The Politics of International Development (I)',
		allDay: false,
		start: new Date(2019, 3, 18, 2, 0, 0),
		end: new Date(2019, 3, 18, 3, 15, 0),
		hexColor: 'e842f4',
	},
	{
		id: 7,
		title: 'Climate Change and the Environment (II)',
		allDay: false,
		start: new Date(2019, 3, 30, 2, 0, 0),
		end: new Date(2019, 3, 30, 3, 15, 0),
		hexColor: 'e842f4',
	},
	{
		//change color
		id: 8,
		title: 'SHORT PAPERS DUE',
		allDay: false,
		start: new Date(2019, 4, 2, 2, 0, 0),
		end: new Date(2019, 4, 2, 3, 15, 0),
		hexColor: '0808d1',
	},
	{
		id: 9,
		title: 'Human Rights',
		allDay: false,
		start: new Date(2019, 4, 7, 2, 0, 0),
		end: new Date(2019, 4, 7, 3, 15, 0),
		hexColor: 'e842f4',
	},
	{
		id: 10,
		title: 'Final review session',
		allDay: false,
		start: new Date(2019, 4, 9, 2, 0, 0),
		end: new Date(2019, 4, 9, 3, 15, 0),
		hexColor: 'e842f4',
	},
	{
		//change color
		id: 11,
		title: 'FINAL EXAM',
		allDay: false,
		start: new Date(2019, 4, 16, 2, 0, 0),
		end: new Date(2019, 4, 16, 3, 15, 0),
		hexColor: 'd80839',
	},

	/*{
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
	},*/
];

const eventStyleGetter = (event, start, end, isSelected) => {
	console.log(event);
	var backgroundColor = '#' + event.hexColor;
	var style = {
		backgroundColor: backgroundColor,
		borderRadius: '0px',
		opacity: 0.8,
		color: 'black',
		border: '0px',
		display: 'block',
	};
	return {
		style: style,
	};
};

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
			eventPropGetter={eventStyleGetter}
		/>
	</div>
);

const Calendar = () => (
	<div>
		<MyCalendar />
	</div>
);

export default Calendar;
