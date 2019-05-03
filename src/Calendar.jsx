import React from 'react';
import './Calendar.css';

const Calendar = () => (
	<div>
		<div class="month">
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
		</ul>
	</div>
);

export default Calendar;
