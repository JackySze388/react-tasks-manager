import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Offcanvas } from 'react-bootstrap';
import { ReactComponent as Menuimg } from '../../img/menu.svg';

// const options = [
// {
//   name: 'Enable backdrop (default)',
//   scroll: false,
//   backdrop: true,
// },
// {
//   name: 'Disable backdrop',
//   scroll: false,
//   backdrop: false,
// },
// {
//   name: 'Enable body scrolling',
//   scroll: true,
//   backdrop: false,
// },
// {
//   name: 'Enable both scrolling & backdrop',
//   scroll: true,
//   backdrop: true,
// },
// ];

export default function Menu() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow((s) => !s);

	return (
		<>
			{/* <CustomToggle aria-controls="offcanvasNavbar" /> */}
			<Button className="topBarBtn" onClick={handleShow}>
				<Menuimg />
			</Button>
			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title><p>Task Manager</p></Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<div><Link className="linkText" to="/react-tasks-manager"><p>HOME</p></Link></div>
					<div><Link className="linkText" to="/react-tasks-manager/calendar"><p>Calendar</p></Link></div>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}