import React from 'react'
import scryportal from './scryportal.png';
import Tabs, { TabType } from '../../common/Tabs';
import './ScryPortal.css';

export default function ScryPortal() {
    return <div className='Scryportal'>
        <header className='Scryportal-App-header'>
            <Tabs
                selectedTab={TabType.PROJECTS}
                appBarClass='Scryportal-Appbar'
                appContentClass='Scryportal-App-content'
                dropdownClass='Scryportal-Dropdown'
                fontClass=" "
            >
                <h1>ScryPortal</h1>
                <div className='Scryportal-Panel'>
                    <img src={scryportal} className='Me-Photo' alt="logo" />
                    <p>
                        I've always had a passion for optimizing productivity and removing the time it takes to plan various aspects of life.
                        This react application is intended to ease that burden by tracking your goals and automatically scheduling your day.
                    </p>
                    <a href="https://www.scryportal.com/">Sign up and use</a>
                </div>
            </Tabs>
        </header>
    </div>;
}