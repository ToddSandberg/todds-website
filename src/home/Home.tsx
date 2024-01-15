import React from 'react'
import {ReactComponent as Hills} from '../svgs/hills.svg';
import {ReactComponent as House} from '../svgs/house.svg';
import SunAndMoon from './SunAndMoon';

type Props = {
    backgroundColor?: string,
    currentPercent: number
}

export default function Home({backgroundColor, currentPercent}: Props) {

    return <div style={{width: '100%'}}>
        <h3 style={{fontFamily: 'bit'}}>Welcome to my website.</h3>
        <SunAndMoon currentPercent={currentPercent}/>
        <div style={{alignContent: 'center', justifyContent: 'center', display: 'flex'}}>
            <div style={{zIndex: '2', color:'#282c34', backgroundColor: 'white', width: 500}}>
                <p style={{padding: 20}}>I'm passionate about developing...</p>
                <div style={{ paddingBottom: 600 }}>
                    Video Games
                </div>
                <div style={{ paddingBottom: 600 }}>
                    Video Games
                </div>
                <div style={{ paddingBottom: 600 }}>
                    Industry Grade Software
                </div>
            </div>
        </div>
        <div style={{position: 'sticky', bottom: '0', overflow: 'clip', zIndex: '1'}}>
            <Hills fill={backgroundColor} className="Hills" style={{zIndex: '1', position: 'sticky', width: '100%', bottom: '0'}}/>
            <House fill={backgroundColor} className="House" style={{zIndex: '2', position: 'sticky', width: '100%', bottom: '-1', left: '0'}}/>
        </div>
    </div>;
}