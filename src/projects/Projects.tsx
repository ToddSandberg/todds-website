import React from 'react'
import scryportal from './scryportal.png';
import Divider from '../common/Divider';

export default function Projects() {
    return <div>
        <h1>Projects</h1>
        <Divider/>
        <div className='Project-Panel'>
            <h3>ScryPortal</h3>
            <div className='Project-Row'>
                <img src={scryportal} className='Me-Photo' alt="logo" />
                <p>
                    I've always had a passion for optimizing productivity and removing the time it takes to plan various aspects of life.
                    This react application is intended to ease that burden by tracking your goals and automatically scheduling your day.
                </p>
            </div>
        </div>
        <Divider/>
    </div>;
}