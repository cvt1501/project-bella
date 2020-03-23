import React, { Component } from 'react';

interface Icontent {
    render?(): object;
}

class Content extends Component<Icontent> {
    public render(): object {
        return (
            <main>
                
            </main>
        )
    }
}

export default Content;