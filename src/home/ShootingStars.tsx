import './shootingStars.scss';

function starOpacity(currentPercent: number) {
    return Math.max(0, (100 - currentPercent*2)/100);
}

type Props = {
    currentPercent: number
}

//https://codepen.io/alphardex/pen/RwrVoeL
export default function ShootingStars({currentPercent}: Props) {
    console.log(starOpacity(currentPercent));

    return <div className="stars" style={{ opacity: starOpacity(currentPercent) }}>
        <div className="star"/>
        <div className="star"/>
        <div className="star"/>
        <div className="star"/>
        <div className="star"/>
        <div className="star"/>
        <div className="star"/>
        <div className="star"/>
        <div className="star"/>
        <div className="star"/>
        <div className="star"/>
        <div className="star"/>
    </div>;
}