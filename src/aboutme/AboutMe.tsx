import React from 'react';
import me from './me.jpg';
import { isSmallDevice } from '../common/CommonFunctions';
import Tabs, { TabType } from '../common/Tabs';
import './AboutMe.css';
import Typewriter from './Typewriter';

const firstParagraph = 'I\'m a full stack developer who likes to make cool things.' +
' Over my career I helped build various software products at Amazon, including web apps for delivery stations, back end workflows for enabling both sub same day and global package delivery, and Alexa presence detection technology.' + 
' I\'ve also worked on various passion projects, which I invite you to explore the Projects tab.';
const secondParagraph = 'My passion is creating engaging user experiences. In my personal time this includes creating video games as well as web experiences.'+
' Some technologies I\'ve used are React, PHP, Node.js, Unity, and Godot/'+
' I\'ve also used AWS cloud services extensively to create enterprise workflows, API microservices, and host web applications.' +
' My primary back end languages I use are Java, C#, and Typescript.';

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
                fontClass='aboutme-font'
            >
                <h3>About Me</h3>
                {isSmallDevice()?
                    <>
                        <img src={me} className='Me-Photo' alt="logo"/>
                        <div style={{width: '80vw'}}>
                            <Typewriter text={firstParagraph}/>
                        </div>
                    </>
                    :<div style={{width: '90vw'}}>
                        <img src={me} className='Me-Photo' alt="logo"/>
                        <div style={{width: '80vw', textAlign: 'left'}}>
                            <Typewriter text={firstParagraph}/>
                        </div>
                    </div>}
                <div style={{textAlign: 'left'}}>
                    <Typewriter text={secondParagraph}/>
                </div>
            </Tabs>
        </header>
    </div>;
}