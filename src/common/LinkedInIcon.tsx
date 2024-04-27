import React from 'react';
import { isSmallDevice } from './CommonFunctions';

export default function LinkedInIcon() {
    const size = isSmallDevice() ? 30 : 40;
    return <a href="https://www.linkedin.com/in/todd-sandberg/" style={{display: 'inline', zIndex: '3'}} target="_blank" rel="noreferrer">
        <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="Linkedin profile" style={{width: size, height: size, marginRight: 5, display: 'inline'}}/>
    </a>;
}