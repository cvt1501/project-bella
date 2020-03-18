import React, { Component } from 'react';

interface Ifooter {
    render?(): object
}

class Footer extends Component <Ifooter> {
    public render(): object {
        return (
            <footer>
                <div className='ikc__footer-container'>
                    <div className='ikc__infos'>
                        <div className='ikc__endereco'>
                            Al. Lucas Nogueira Garcez, 1272 <br />

                            Sala 03 • Vila Thaís • Atibaia • 12942-020 <br />

                            11 - 4411.5150
                        </div>
                    </div>
                    <div className='ikc__site-map'>
                        <ul>
                            <li><a href=''>Home</a></li>
                            <li><a href=''>Projetos</a></li>
                            <li><a href=''>Sobre</a></li>
                            <li><a href=''>Contato</a></li>
                        </ul>
                    </div>
                    <div className='ikc__social'>
                            <div className='banner-box'>
                                    <a href=''>
                                        <img src='./../assets/images/ikc_fb.png' />
                                        <span>@KimishimaEngenharia</span>
                                    </a>
                            </div>
                            <div className='banner-box'>
                                    <a href=''>
                                        <img src='./../assets/images/ikc_insta.png' />    
                                        <span>Arquitetura</span>
                                    </a>
                            </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;