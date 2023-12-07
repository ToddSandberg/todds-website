import React from 'react'
import me from './me.jpg';
import { isSmallDevice } from '../common/CommonFunctions';
import LinkedInIcon from '../common/LinkedInIcon';
import GithubIcon from '../common/GithubIcon';
import Tabs, { TabType } from '../common/Tabs';
import './AboutMe.css';

export default function AboutMe() {
    return <div className="App">
        <header className="About-Me">
            <Tabs
                selectedTab={TabType.ABOUTME}
                textColor='#2B2B27'
                appBarClass='About-Me-Appbar'
                appContentClass='About-Me-App-content'
                dropdownClass='About-Me-Dropdown'
            >
                <h3>About Me</h3>
                <img src={me} className='Me-Photo' alt="logo" style={{zIndex: '2', position: 'relative'}}/>
                <p style={{zIndex: '2', position: 'relative', fontSize: isSmallDevice() ? '14px' : '24px'}}>
                    I'm a full stack developer who likes to make cool things (I think so at least). 
                    Over my career I helped build various software products at Amazon from web apps for delivery stations to creating back end workflows for enabling sub same day and global package delivery to Alexa presence detection technology. 
                    I've also worked on various passion projects, which I invite you to explore the <b><u>Projects</u></b> tab.
                </p>
                <LinkedInIcon/>
                <GithubIcon/>
            </Tabs>
        </header>
    </div>;
}