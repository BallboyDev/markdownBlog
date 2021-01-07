import React from 'react';
import Js from './image/Js.png';
import Java from './image/java.jpg';
import Python from './image/python.jpg';

export default class NaviItem extends React.Component {

    componentDidMount = () => {
        // this.setImage()
    }

    setImage = () => {
        switch (this.props.category) {
            case 'js':
                return Js
            case 'py':
                return Python
            case 'java':
                return Java
        }
    }

    render = () => {
        return (
            <div className='item'>
                <img src={this.setImage()} alt='javascript' className='item_img' />
                <div className='title'>{this.props.title}</div>
            </div>
        )
    }
}