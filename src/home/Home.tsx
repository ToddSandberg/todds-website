import React from 'react'
import {ReactComponent as Logo} from '../svgs/hills.svg';
import LinkedInIcon from '../common/LinkedInIcon';
import GithubIcon from '../common/GithubIcon';

type Props = {
    backgroundColor?: string
}

export default function Home({backgroundColor}: Props) {
    return <div>
        <h3>Welcome to my website.</h3>
        <LinkedInIcon/>
        <GithubIcon/>
        <Logo fill={backgroundColor} className="Hills" style={{zIndex: '1', position: 'absolute', bottom: '0'}}/>
    </div>;
}