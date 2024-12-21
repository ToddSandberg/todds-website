import './clouds.css';
import Cloud from './cloud.svg?react';


//https://codepen.io/Mark_Bowley/pen/LYZEBq
export default function Clouds() {

    return <div className="clouds" style={{overflow: 'hidden', width: '99vw', position: 'fixed'}}>
        <div style={{width: '150vw', left: '-600px', position: 'relative'}}>
            <div className="x1"><Cloud className="cloud"/></div>
            <div className="x2"><Cloud className="cloud"/></div>
            <div className="x3"><Cloud className="cloud"/></div>
            <div className="x4"><Cloud className="cloud"/></div>
            <div className="x5"><Cloud className="cloud"/></div>
        </div>
    </div>;
}