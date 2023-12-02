import React from 'react'
import me from './me.jpg';
import github from './github.png';
import {ReactComponent as Logo} from '../svgs/hills.svg';
import { isSmallDevice } from '../common/CommonFunctions';

type Props = {
    backgroundColor?: string
}

export default function AboutMe({backgroundColor}: Props) {
    return <div className='About-Me'>
        <h3>About Me</h3>
        <img src={me} className='Me-Photo' alt="logo" style={{zIndex: '2', position: 'relative'}}/>
        <p style={{zIndex: '2', position: 'relative', fontSize: isSmallDevice() ? '14px' : '24px'}}>
            I'm a full stack developer who likes to make cool things (I think so at least). 
            Over my career I helped build various software products at Amazon from web apps for delivery stations to creating back end workflows for enabling sub same day and global package delivery to Alexa presence detection technology. 
            I've also worked on various passion projects, which I invite you to explore the <b><u>Projects</u></b> tab.
        </p>
        <a href="https://www.linkedin.com/in/todd-sandberg/" style={{display: 'inline'}}>
            <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="Linkedin profile" style={{width: 50, height: 50, display: 'inline'}}/>
        </a>
        <a href="https://github.com/ToddSandberg" style={{display: 'inline'}}>
            <img src={github} alt="Github profile" style={{width: 50, height: 50, display: 'inline'}}/>
        </a>
        <Logo fill={backgroundColor} className="Hills" style={{zIndex: '1', position: 'absolute', bottom: '0'}}/>
    </div>;
}