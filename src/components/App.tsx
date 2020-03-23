import React, { Component, Fragment } from 'react';
import Header from './header/Header';
import Slider from './slider/Slider';
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
				<Slider />
				<Content />
				<Footer />
			</Fragment>
		)
	}
}

export default App;
