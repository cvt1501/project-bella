import React, { Component } from 'react';
import Projects from './microComponents/Projects';

interface Icontent {
    render?(): object;
}

class Content extends Component<Icontent> {
    public render(): object {
        return (
            <main className='ikc__content'>
                <Projects />
            </main>
        )
    }
}

export default Content;