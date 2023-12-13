import React from 'react'
import {ReactComponent as Hills} from '../svgs/hills.svg';
import {ReactComponent as House} from '../svgs/house.svg';
import LinkedInIcon from '../common/LinkedInIcon';
import GithubIcon from '../common/GithubIcon';

type Props = {
    backgroundColor?: string
}

export default function Home({backgroundColor}: Props) {
    return <div>
        <h3 style={{fontFamily: 'bit'}}>Welcome to my website.</h3>
        <LinkedInIcon/>
        <GithubIcon/>
        <Hills fill={backgroundColor} className="Hills" style={{zIndex: '1', position: 'absolute', bottom: '0'}}/>
        <House fill={backgroundColor} className="House" style={{zIndex: '2', position: 'absolute', bottom: '0', left: '0'}}/>
    </div>;
}