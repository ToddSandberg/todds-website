import React from 'react'
import Hills from '../svgs/hills.svg';
import SunAndMoon from './SunAndMoon';
import scryportal from '../projects/ScryPortal/scryportal.png';
import weaponsmith from '../projects/Weaponsmith/WeaponsmithBackground.png';
import raytracer from './raytracer.png';
import amazonlogo from '../aboutme/amazonlogo.jpg';
import DownArrow from './down-arrow.svg';

type Props = {
    backgroundColor?: string,
    textColor?: string,
    currentPercent: number
}

export default function Home({backgroundColor, textColor, currentPercent}: Props) {

    const content = <>
        <div style={{alignContent: 'center', justifyContent: 'center', display: 'flex'}}>
            <div style={{height: '100vh', width: '100vw',marginLeft: 50, marginRight: 50, alignContent: 'center', zIndex: 3}}>
                <h3 style={{padding: 20}}>I'm passionate about developing...</h3>
            </div>
        </div>
        <div style={{alignContent: 'center', justifyContent: 'center', display: 'flex'}}>
            <div style={{height: '100vh', width: '100vw',marginLeft: 50, marginRight: 50, alignContent: 'center', zIndex: 3}}>
                <h2>Websites</h2>
                <p className='example-text'>I've built various websites as personal projects and to support amazon deliveries.</p>
                <p className='example-text'>As an example, below is a TODO list/scheduler react app I wrote.</p>
                <div className='image-box' style={{ margin: 40 }}>
                    <a href={"/scryportal"}><img src={scryportal} style={{ width: 300, height: 200 }} alt="productivity website" /></a>
                </div>
                <p className='example-text'>And the website you are currently on, see the source code <a href="https://github.com/ToddSandberg/todds-website">here</a></p>
            </div>
        </div>
        <div style={{alignContent: 'center', justifyContent: 'center', display: 'flex'}}>
            <div style={{height: '100vh', width: '100vw',marginLeft: 50, marginRight: 50, alignContent: 'center', zIndex: 3}}>
                <h2>Video Games</h2>
                <p className='example-text'>I've developed various games for game jams (<a href="https://toadtoadtoad.itch.io/">See my itch.io</a>). See one of those projects below.</p>
                <div className='image-box' style={{ margin: 40 }}>
                    <a href={"/weaponsmithSimulator"}><img src={weaponsmith} style={{ width: 300, height: 200 }} alt="weaponsmith simulator game" /></a>
                </div>
                <p className='example-text'>I've also implemented various 3D rendering techniques. See an example "in browser" raytracer written in javascript below.</p>
                <div className='image-box' style={{ margin: 40 }}>
                    <a href={"/raytracer"}><img src={raytracer} style={{ width: 300, height: 200 }} alt="browser raytracer" /></a>
                </div>
            </div>
        </div>
        <div style={{alignContent: 'center', justifyContent: 'center', display: 'flex'}}>
            <div style={{height: '100vh', width: '100vw', marginLeft: 50, marginRight: 50, alignContent: 'center', zIndex: 3}}>
                <h2>Industry Grade Software</h2>
                <p className='example-text'>At Amazon I helped develop systems that supported customers on a global scale. Read more on the aboutme page.</p>
                <div className='image-box' style={{ margin: 40 }}>
                    <a href={"/aboutme"}><img src={amazonlogo} style={{ width: 300, height: 200 }} alt="more about me" /></a>
                </div>
            </div>
        </div>
    </>

    return <div style={{width: '100%'}}>
        <SunAndMoon currentPercent={currentPercent}/>
        <Hills fill={backgroundColor} className="Hills" style={{ zIndex: 1, position: 'fixed' }}/>
        <div style={{alignContent: 'center', justifyContent: 'center', display: 'flex'}}>
            <div style={{height: '100vh', alignContent: 'center', zIndex: 3}}>
                <h1>Todd Sandberg</h1>
                <h3>Welcome to my website.</h3>
                <p className='pulse-text'>Scroll down</p>
                <DownArrow className={'bounce'} fill={textColor} style={{ width: 100, height: 50, bottom: 0 }} />
            </div>
        </div>
        {content}
        <div style={{ position: 'sticky', bottom: '0', overflow: 'clip', zIndex: 1, height: '40%' }}>
        </div>
    </div>;
}