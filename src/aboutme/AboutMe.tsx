import React from 'react'
import me from './me.jpg';

export default function AboutMe() {
    return <div className='About-Me'>
        <h3>About Me</h3>
        <img src={me} className='Me-Photo' alt="logo" />
        <p>
            I'm a full stack developer who likes to make cool things (I think so at least). 
            Over my career I helped build various software products at Amazon from web apps for delivery stations to creating back end workflows for enabling sub same day and global package delivery to Alexa presence detection technology. 
            I've also worked on various passion projects, which I invite you to explore <a href="">here</a>.
        </p>
    </div>;
}