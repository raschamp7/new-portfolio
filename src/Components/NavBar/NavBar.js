import React, * as react from 'react';
import { Grid, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './NavBar.style.css';

const Dropdown = ({ callbackFromParent }) => {
	const node = react.useRef();
	const handleClick = (e) => {
		if (node.current.contains(e.target)) {
			// inside click
			callbackFromParent(true);
			return;
		}
		// outside click
		callbackFromParent(false);
	};

	react.useEffect(() => {
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, []);

	return (
		<Grid container ref={node}>
				<ListItem onClick={() => callbackFromParent(false)}>
					<Link to="/d3-world-map">D3 World Map</Link>
				</ListItem>
				<ListItem>Keppler</ListItem>
				<ListItem>P5.js</ListItem>
				<ListItem>Gatsby</ListItem>
				<ListItem>GraphQL</ListItem>
			
		</Grid>
	);
};

const NavBar = () => {
	const [listOpen, setListOpen] = react.useState(false);

	const myCallback = (listOpen) => {
		setListOpen(listOpen);
	};

	return (
		<Grid container className="navbar">
			<div>
			<li className="topstrip" onClick={() => setListOpen(!listOpen)}><i class="fa fa-bars"></i></li>
			<a href="/" className="name">The Kindness Club</a>
			</div>
			<div className="dropdown">{listOpen ? <Dropdown callbackFromParent={myCallback} /> : null}</div>
		</Grid>
	);
};
export default NavBar;
