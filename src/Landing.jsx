import React from 'react';
import { Button } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import './Landing.css';

function Landing() {
	return (
		<div className="landing">
			<div className="social-links">
				<SocialIcon
					url="https://www.instagram.com/fruition.nyc/"
					bgColor="#fca301"
					fgColor="#ffffff"
				/>
				<SocialIcon
					url="https://twitter.com/NycFruition?lang=en"
					bgColor="#fca301"
					fgColor="#ffffff"
				/>
			</div>
		</div>
	);
}

export default Landing;
