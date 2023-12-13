import React from 'react'
import github from './github.png';

export default function GithubIcon() {
    return <a href="https://github.com/ToddSandberg" style={{display: 'inline'}} target="_blank" rel="noreferrer">
        <img src={github} alt="Github profile" style={{width: 50, height: 50, display: 'inline'}}/>
    </a>;
}