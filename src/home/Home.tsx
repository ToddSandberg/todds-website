import React from 'react'
import {ReactComponent as Hills} from '../svgs/hills.svg';
import {ReactComponent as House} from '../svgs/house.svg';

function fetchSunTop(percent: number, startingTop: number, endingTop: number) {
    return ((endingTop - startingTop)*(percent/100))+startingTop;
}

function fetchSunLeft(percent: number) {
    const startingLeft = 10;
    const endingLeft = 40;

    // Parabolic function where 100% = 1, 50% = 0, 0% = 1
    return endingLeft*(Math.pow(percent-50, 2)/2500) + startingLeft;
}

type Props = {
    backgroundColor?: string,
    currentPercent: number
}

export default function Home({backgroundColor, currentPercent}: Props) {
    return <div style={{width: '100%'}}>
        <h3 style={{fontFamily: 'bit'}}>Welcome to my website.</h3>
        <div className="Sun" style={{
            top: fetchSunTop(currentPercent, window.innerHeight - (window.innerHeight * 0.15), window.innerHeight * 0.15),
            left: `${fetchSunLeft(currentPercent)}%`,
            position: 'sticky',
            zIndex: '0'
        }}></div>
        <div className="Moon" style={{
            top: fetchSunTop(currentPercent, window.innerHeight * 0.15, window.innerHeight - (window.innerHeight * 0.15)),
            right: `${fetchSunLeft(currentPercent)}%`,
            position: 'sticky',
            zIndex: '0'
        }}></div>
        <div style={{height: 1200}}>
            test
        </div>
        <div style={{position: 'sticky', bottom: '0', overflow: 'clip', zIndex: '1'}}>
            <Hills fill={backgroundColor} className="Hills" style={{zIndex: '1', position: 'sticky', width: '100%', bottom: '0'}}/>
            <House fill={backgroundColor} className="House" style={{zIndex: '2', position: 'sticky', width: '100%', bottom: '-1', left: '0'}}/>
        </div>
    </div>;
}