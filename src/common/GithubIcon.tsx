import React from 'react';
import github from './github.png';
import { isSmallDevice } from './CommonFunctions';

export default function GithubIcon() {
    const size = isSmallDevice() ? 30 : 40;
    return <a href="https://github.com/ToddSandberg" style={{display: 'inline', zIndex: '3'}} target="_blank" rel="noreferrer">
        <img src={github} alt="Github profile" style={{width: size, height: size, marginTop: 2, marginRight: 5, display: 'inline'}}/>
    </a>;
}