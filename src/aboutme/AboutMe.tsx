import React from 'react'
import me from './me.jpg';
import { isSmallDevice } from '../common/CommonFunctions';
import Tabs, { TabType } from '../common/Tabs';
import './AboutMe.css';

export default function AboutMe() {
    return <div className="App">
        <header className="About-Me">
            <Tabs
                selectedTab={TabType.ABOUTME}
                textColor='#7288a2'
                backgroundColor='#0F0F0C'
                appBarClass='About-Me-Appbar Appbar-Common'
                appContentClass='About-Me-App-content typewriter'
                dropdownClass='About-Me-Dropdown Dropdown-Common'
            >
                <h3>About Me</h3>
                {isSmallDevice()?
                    <>
                        <img src={me} className='Me-Photo' alt="logo" style={{zIndex: '2', position: 'relative'}}/>
                        <p style={{zIndex: '2', position: 'relative', fontSize: isSmallDevice() ? '14px' : '24px'}}>
                            I'm a full stack developer who likes to make cool things.
                            Over my career I helped build various software products at Amazon, including web apps for delivery stations, back end workflows for enabling both sub same day and global package delivery, and Alexa presence detection technology. 
                            I've also worked on various passion projects, which I invite you to explore the <b><u>Projects</u></b> tab.
                        </p>
                    </>
                :<div>
                    <img src={me} className='Me-Photo' alt="logo" style={{zIndex: '2', position: 'relative'}}/>
                    <p style={{zIndex: '2', position: 'relative', fontSize: isSmallDevice() ? '14px' : '24px'}}>
                        I'm a full stack developer who likes to make cool things.
                        Over my career I helped build various software products at Amazon, including web apps for delivery stations, back end workflows for enabling both sub same day and global package delivery, and Alexa presence detection technology. 
                        I've also worked on various passion projects, which I invite you to explore the <b><u>Projects</u></b> tab.
                    </p>
                </div>}
                <p style={{zIndex: '2', position: 'relative', fontSize: isSmallDevice() ? '14px' : '24px'}}>
                    My passion is creating engaging user experiences. In my personal time this includes creating video games as well as web experiences.
                    Here are some techonologies I've used:
                    <ul style={{width: 50}}>
                        <li>React</li>
                        <li>PHP</li>
                        <li>node.js</li>
                        <li>Unity</li>
                        <li>Godot</li>
                    </ul>
                    I've also used AWS cloud services extensively to create enterprise workflows, API microservices, and host web applications.
                    My primary back end languages I use are Java, C#, and Typescript.
                </p>
            </Tabs>
        </header>
    </div>;
}