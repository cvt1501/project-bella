import React, { Component, Fragment } from 'react';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';

interface Iapp {
	render?(): object
}

class App extends Component <Iapp> {
	public render(): object {
		return (
			<Fragment>
				<Header />
				<Content />
				<Footer />
			</Fragment>
		)
	}
}

export default App;
