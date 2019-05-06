import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './images/FruitionLogo2.png';

const Navigation = ({ history }) => (
	<div>
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">
				<Link to="/">
					<img src={logo} alt="IYC Logo" height="50px" />
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
				<Nav className="justify-content-end">
					<Nav.Link eventKey={1} onClick={() => history.push('/fruition')}>
						Main
					</Nav.Link>
					<Nav.Link eventKey={1} href='https://forms.gle/foU8wKm7RTfEfBpKA'>
						Assessment
					</Nav.Link>
					<Nav.Link eventKey={1} onClick={() => history.push('/notes')}>
						Notes
					</Nav.Link>
					<Nav.Link eventKey={1} onClick={() => history.push('/calendar')}>
						Calendar
					</Nav.Link>
					{/*<Nav.Link eventKey={1} onClick={() => history.push('/fruition')}>
						Logout
					</Nav.Link>
					*/}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</div>
);

export default withRouter(Navigation);
