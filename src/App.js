import React from 'react';
import './App.css';
import Content from './components/Content'
import ContentNavi from './components/ContentNavi';

export default class App extends React.Component {
    render = () => {
        return (
            <div className='wrap'>
                <ContentNavi />
                {/* <div className='lNavi'></div> */}
                <Content />
            </div>
        )
    }
}