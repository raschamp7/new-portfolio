import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Skills from './Components/Skills';
import Story from './Components/Story';
import D3WorldMap from './Components/D3WorldMap';
import NavBar from './Components/NavBar';
import './App.css';

function App() {
	return (
		<div>
			<NavBar />
			<Switch>
				<Route exact={true} path="/" component={Home} />
				<Route path="/home" component={Home} />
				<Route exact path="/blog" component={Blog} />
				<Route exact path="/skills" component={Skills} />
				<Route exact path="/d3-world-map" component={D3WorldMap} />
				<Route exact path="/story" component={Story} />
			</Switch>

			<p> FOOTER</p>
		</div>
	);
}

export default App;
