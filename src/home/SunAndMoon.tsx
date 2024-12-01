function fetchSunTop(percent: number, startingTop: number, endingTop: number) {
    return ((endingTop - startingTop)*(percent/100))+startingTop;
}

function fetchSunLeft(percent: number) {
    const startingLeft = 10;
    const endingLeft = 40;

    // Parabolic function where 100% = 1, 50% = 0, 0% = 1
    return endingLeft*((percent-50) ** 2/2500) + startingLeft;
}

type Props = {
    currentPercent: number
}

export default function SunAndMoon({currentPercent}: Props) {

    return <div style={{position: 'sticky', top:0, width: '100%', height: '100%'}}>
        <div className="Sun" style={{
            top: fetchSunTop(currentPercent, window.innerHeight - (window.innerHeight * 0.15), window.innerHeight * 0.15),
            left: `${fetchSunLeft(currentPercent)}%`,
            zIndex: '0'
        }} />
        <div className="Moon" style={{
            top: fetchSunTop(currentPercent, window.innerHeight * 0.15, window.innerHeight - (window.innerHeight * 0.15)),
            right: `${fetchSunLeft(currentPercent)}%`,
            zIndex: '0'
        }} />
    </div>;
}