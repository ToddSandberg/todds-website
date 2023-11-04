import React from 'react'
import me from './me.jpg';
import {ReactComponent as Logo} from '../svgs/hills.svg';

type Props = {
    backgroundColor?: string
}

export default function AboutMe({backgroundColor}: Props) {
    return <div className='About-Me'>
        <h3>About Me</h3>
        <img src={me} className='Me-Photo' alt="logo" />
        <p>
            I'm a full stack developer who likes to make cool things (I think so at least). 
            Over my career I helped build various software products at Amazon from web apps for delivery stations to creating back end workflows for enabling sub same day and global package delivery to Alexa presence detection technology. 
            I've also worked on various passion projects, which I invite you to explore the <b><u>Projects</u></b> tab.
        </p>
        <Logo fill={backgroundColor} className="Hills" />
    </div>;
}