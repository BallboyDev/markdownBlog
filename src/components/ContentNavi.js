import React from 'react';
import NaviItem from './NaviItem';


export default class ContentNavi extends React.Component {

    componentDidMount = () => { }

    render = () => {
        return (
            <div className='rNavi'>
                <NaviItem title="일하기 싫다" category='js' />
                <NaviItem title="진짜 일하기 싫다" category='py' />
                <NaviItem title="너무 하기 싫다" category='java' />
                <NaviItem title="레알루 싫다" category='java' />
                <NaviItem title="참트루 싫다" category='py' />
                <NaviItem title="내일 출근 실화???" category='js' />
            </div>
        )
    }
}