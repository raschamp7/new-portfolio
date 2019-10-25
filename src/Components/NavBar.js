import React, * as react from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Dropdown = () => {
	return (
		<Grid container>
			<Grid item xs={12} sm={2}>
				{''}
			</Grid>
			<Grid item xs={12} sm={2}>
				<h4>Web Dev</h4>
				<ul>
					<li>D3 World Map</li>
					<li>Keppler</li>
					<li>P5.js</li>
					<li>Gatsby</li>
				</ul>
			</Grid>
			<Grid item xs={12} sm={2}>
				<h4>Data Science</h4>
				<ul>
					<li>Data Mining</li>
					<li>Django web app</li>
					<li>Kaggle</li>
					<li>US Phone Complaints</li>
				</ul>
			</Grid>
			<Grid item xs={12} sm={2}>
				<h4>Design</h4>
				<ul>
					<li>Posters</li>
					<li>Sketch</li>
				</ul>
			</Grid>
			<Grid item xs={12} sm={2}>
				<h4>Video</h4>
				<ul>
					<li>Youtube Vlog</li>
				</ul>
			</Grid>
			<Grid item xs={12} sm={2}>
				<h4>Misc</h4>
			</Grid>
		</Grid>
	);
};

const NavBar = () => {
	const [listOpen, setListOpen] = react.useState(false);
	return (
		<ul>
			<li onClick={()=>setListOpen(!listOpen)}>Projects</li>
			<div>
				{listOpen?<Dropdown />:null}
			</div>
			<li onClick={()=>setListOpen(false)}>Blog</li>
			<li onClick={()=>setListOpen(false)}>Skills</li>
			<li onClick={()=>setListOpen(false)}>Story</li>
		</ul>
	);
};
export default NavBar;
