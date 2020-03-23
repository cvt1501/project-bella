import React, { Component } from 'react';

interface ISlider {
    render?(): object;
}

class Slider extends Component<ISlider> {
    public render(): object {
        return (
            <div className='ikc__full-banner-container'>
                <div className='ikc__banner-box'>
                        <a>
                            <img src='./../../assets/images/ikc__slider01.jpg' title='Banner Principal'/>
                        </a>
                </div>
            </div>
        )    
    }
}

export default Slider;