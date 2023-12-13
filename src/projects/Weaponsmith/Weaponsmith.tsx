import React from 'react'
import Divider from '../../common/Divider';
import Tabs, { TabType } from '../../common/Tabs';
import './Weaponsmith.css';

export default function Weaponsmith() {
    return <div className="App">
    <header className="Weaponsmith">
        <Tabs
            selectedTab={TabType.PROJECTS}
            appBarClass='Weaponsmith-Appbar'
            appContentClass='Weaponsmith-App-content'
            dropdownClass='Weaponsmith-Dropdown'
        >
            <h1>Projects</h1>
            <Divider/>
            <div className='Project-Panel'>
                <h3>Weaponsmith</h3>
                <div className='Project-Row'>
                    <p>TODO</p>
                </div>
            </div>
            <Divider/>
        </Tabs>
        </header>
    </div>;
}