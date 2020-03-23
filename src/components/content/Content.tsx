import React, { Component } from 'react';
import Slider from './microComponents/Slider';

interface Icontent {
    render?(): object;
}

class Content extends Component<Icontent> {
    public render(): object {
        return (
            <main>
                <Slider />
            </main>
        )
    }
}

export default Content;