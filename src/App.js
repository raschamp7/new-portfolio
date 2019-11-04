import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Skills from './components/Skills';
import Story from './components/Story';
import D3WorldMap from './components/D3WorldMap';
import TensorflowJS from './components/TensorflowJS';
import NavBar from './components/NavBar';
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
				<Route exact path="/tensorflow-js" component={TensorflowJS} />
				<Route exact path="/story" component={Story} />
			</Switch>

			<p> FOOTER</p>
		</div>
	);
}

export default App;
