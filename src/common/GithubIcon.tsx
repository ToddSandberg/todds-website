import React from 'react';
import github from './github.png';

export default function GithubIcon() {
    return <a href="https://github.com/ToddSandberg" style={{display: 'inline', zIndex: '3'}} target="_blank" rel="noreferrer">
        <img src={github} alt="Github profile" style={{width: 40, height: 40, marginTop: 2, marginRight: 5, display: 'inline'}}/>
    </a>;
}