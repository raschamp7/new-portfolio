import React, * as react from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Dropdown = () => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={1} md={3}>
				<Paper>xs=3</Paper>
			</Grid>
			<Grid item xs={1} md={3}>
				<Paper>xs=3</Paper>
			</Grid>
			<Grid item xs={1} md={3}>
				<Paper>xs=3</Paper>
			</Grid>
			<Grid item xs={1} md={3}>
				<Paper>xs=3</Paper>
			</Grid>
		</Grid>
	);
};

const NavBar = () => {
	return (
		<ul>
			<li>Projects</li>
			<div>
				<Dropdown />
			</div>
			<li>Blog</li>
			<li>Skills</li>
			<li>Story</li>
		</ul>
	);
};
export default NavBar;
