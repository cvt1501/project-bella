import React, { Component, Fragment } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

interface Iapp {
	render?(): object
}

class App extends Component <Iapp> {
	public render(): object {
		return (
			<Fragment>
				<Header />
				<Footer />
			</Fragment>
		)
	}
}

export default App;
