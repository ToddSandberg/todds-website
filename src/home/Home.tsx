import React from 'react'
import {ReactComponent as Hills} from '../svgs/hills.svg';
import {ReactComponent as House} from '../svgs/house.svg';
import SunAndMoon from './SunAndMoon';
import scryportal from '../projects/ScryPortal/scryportal.png';
import weaponsmith from '../projects/Weaponsmith/WeaponsmithBackground.png';
import raytracer from './raytracer.png';
import amazonlogo from '../aboutme/amazonlogo.jpg';

type Props = {
    backgroundColor?: string,
    currentPercent: number
}

export default function Home({backgroundColor, currentPercent}: Props) {

    return <div style={{width: '100%'}}>
        <h3 style={{fontFamily: 'bit'}}>Welcome to my website.</h3>
        <SunAndMoon currentPercent={currentPercent}/>
        <div style={{alignContent: 'center', justifyContent: 'center', display: 'flex'}}>
            <div style={{zIndex: 3, color:'#282c34', backgroundColor: 'white', width: 500}}>
                <p style={{padding: 20}}>I'm passionate about developing...</p>
                <div>
                    Websites
                </div>
                <p className='example-text'>I've built various websites as personal projects and to support amazon deliveries.</p>
                <p className='example-text'>Below is a TODO list/scheduler react app I wrote.</p>
                <div className='image-box' style={{ margin: 40 }}>
                    <a href={"/scryportal"}><img src={scryportal} style={{ width: 300, height: 200 }} alt="productivity website" /></a>
                </div>
                <p className='example-text'>And the website you are currently on, see the source code <a href="https://github.com/ToddSandberg/todds-website">here</a></p>
                <div>
                    Video Games
                </div>
                <p className='example-text'>I've developed various games for game jams (<a href="https://toadtoadtoad.itch.io/">See my itch.io</a>). See one of those projects below.</p>
                <div className='image-box' style={{ margin: 40 }}>
                    <a href={"/weaponsmithSimulator"}><img src={weaponsmith} style={{ width: 300, height: 200 }} alt="weaponsmith simulator game" /></a>
                </div>
                <p className='example-text'>I've also implemented various 3D rendering techniques. See an example "in browser" raytracer written in javascript below.</p>
                <div className='image-box' style={{ margin: 40 }}>
                    <a href={"/raytracer"}><img src={raytracer} style={{ width: 300, height: 200 }} alt="browser raytracer" /></a>
                </div>
                <div>
                    Industry Grade Software
                </div>
                <p className='example-text'>At Amazon I helped develop systems that supported customers on a global scale. Read more on the aboutme page.</p>
                <div className='image-box' style={{ margin: 40 }}>
                    <a href={"/aboutme"}><img src={amazonlogo} style={{ width: 300, height: 200 }} alt="more about me" /></a>
                </div>
            </div>
        </div>
        <div style={{ position: 'sticky', bottom: '0', overflow: 'clip', zIndex: 1, height: '40%' }}>
            <Hills fill={backgroundColor} className="Hills" style={{ zIndex: 1, bottom: 0, position: 'absolute' }}/>
            <House fill={backgroundColor} className="House" style={{ bottom: 0, left: 0, position: 'sticky' }}/>
        </div>
    </div>;
}