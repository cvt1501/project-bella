import React, { Component } from 'react';

interface iHeader {
    render?(): object
}

class Header extends Component<iHeader> {
    public render(): object {
        return (
            <header>
                <div className='ikc__container'>
                    <div className='ikc__logo'>
                        <img src='./../assets/images/ikc__logo2.png' alt='Logo Kimishima' />
                    </div>
                    <div className='ikc__menu'>
                        <ul>
                            <li>
                                <a href='#home'>home</a>
                            </li>
                            <li>
                                <a href='#projetos'>projetos</a>
                            </li>
                            <li>
                                <a href='#sobre'>sobre</a>
                            </li>
                            <li>
                                <a href='#contato'>contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;