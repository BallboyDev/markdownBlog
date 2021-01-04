import React from 'react';
import Js from './image/Js.png';
import Java from './image/java.jpg';
import Python from './image/python.jpg';

export default class ContentNavi extends React.Component {

    componentDidMount = () => { }

    render = () => {
        return (
            <div className='rNavi'>
                <div className='item'>
                    <img src={Js} alt='javascript' className='item_img' />
                    <div className='item_title'>test</div>
                </div>
            </div>
        )
    }
}