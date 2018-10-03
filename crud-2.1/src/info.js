import React, { Component } from 'react';
import image from './logo.svg'
class Info extends Component {
    render() {
        return (
            <div>
                    <img src={image} alt=""/>
                <div>
                    <p>Здесь какой-то текст</p>
                </div>
            </div>
        );
    }
}

export default Info;