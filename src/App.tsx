import { useState } from 'react';
import './App.css';
import Tabs from './common/Tabs';
import Slider from './common/Slider';
import { background1, background2 } from './constants/colors';

function fetchColorFromPercent(colorValue1: number, colorValue2: number, sliderValue: number): number {
  return ((colorValue2 - colorValue1)*(sliderValue/100))+colorValue1;
}

function fetchSunTop(percent: number, startingTop: number, endingTop: number) {
  return ((endingTop - startingTop)*(percent/100))+startingTop;
}

function fetchSunLeft(percent: number) {
  const startingLeft = 10;
  const endingLeft = 40;

  // Parabolic function where 100% = 1, 50% = 0, 0% = 1
  return endingLeft*(Math.pow(percent-50, 2)/2500) + startingLeft;
}

function App() {
  const [ colorR, setColorR ] = useState(background1.r);
  const [ colorG, setColorG ] = useState(background1.g);
  const [ colorB, setColorB ] = useState(background1.b);

  const [ currentPercent, setCurrentPercent ] = useState(0);

  return (
    <div className="App" style={{ backgroundColor: '#5E687A' }}>
      <header className="App-header" style={{color: `rgb(${colorR}, ${colorG}, ${colorB})`}}>
        <div className="Sun" style={{
          top: fetchSunTop(currentPercent, 750, 50),
          left: `${fetchSunLeft(currentPercent)}%`
        }}></div>
        <div className="Moon" style={{
          top: fetchSunTop(currentPercent, 50, 750),
          right: `${fetchSunLeft(currentPercent)}%`
        }}></div>
        <Tabs color={`rgb(${colorR}, ${colorG}, ${colorB})`}/>
        <Slider
          value={currentPercent}
          onChange={(value) => {
            setColorR(fetchColorFromPercent(background1.r, background2.r, value));
            setColorG(fetchColorFromPercent(background1.g, background2.g, value));
            setColorB(fetchColorFromPercent(background1.b, background2.b, value));
            setCurrentPercent(value);
          }}
        />
      </header>
    </div>
  );
}

export default App;
