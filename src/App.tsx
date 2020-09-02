import React from 'react';

import './App.css';

import electron from './assets/svgs/electron.svg';
import typescript from './assets/svgs/ts.svg';
import react from './assets/svgs/react.svg';

import { fireEvent } from './renderer';

const App = () => {
  return (
    <div className="app-container">
			<div className="logos">
				<img src={electron} alt="Electron"/>
				<img src={typescript} alt="TypeScript"/>
				<img src={react} alt="React"/>
			</div>

			<h1>Hello, world!</h1>
			<button onClick={fireEvent}>Open Dialog</button>
    </div>
	)
}

export default App