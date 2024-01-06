import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Tabs from './common/Tabs';
import Slider from './common/Slider';
import { background1, background2, blueBackground, orangeBackground, whitishColor } from './constants/colors';
import { getRandomInt } from './common/CommonFunctions';
import Home from './home/Home';

function fetchColorFromPercent(colorValue1: number, colorValue2: number, sliderValue: number): number {
  return ((colorValue2 - colorValue1)*(sliderValue/100))+colorValue1;
}

function fetchColorFromPercent3(colorValue1: number, colorValue2: number, colorValue3: number, sliderValue: number): number {
  if (sliderValue < 50) {
    return ((colorValue2 - colorValue1)*(sliderValue/50))+colorValue1;
  } else {
    return ((colorValue3 - colorValue2)*((sliderValue-50)/50))+colorValue2;
  }
}

function App() {
  const [ color1, setColor1 ] = useState({
    r: background1.r,
    g: background1.g,
    b: background1.b
  });

  const [ background, setBackground ] = useState({
    r: background1.r,
    g: background1.g,
    b: background1.b
  });

  const [ textColor, setTextColor ] = useState({
    r: whitishColor.r,
    g: whitishColor.g,
    b: whitishColor.b
  });

  const [ currentPercent, setCurrentPercent ] = useState(0);

  const handleScroll = () => {
      const position = window.pageYOffset;

      // 0 should be window.inngerHeight
      changePercentage((position / (window.document.body.offsetHeight - window.innerHeight)) * 100);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const changePercentage = useCallback((value: number) => {
    setColor1({
      r: fetchColorFromPercent(background1.r, background2.r, value),
      g: fetchColorFromPercent(background1.g, background2.g, value),
      b: fetchColorFromPercent(background1.b, background2.b, value)
    });
    setBackground({
      r: fetchColorFromPercent3(background1.r, orangeBackground.r, blueBackground.r, value),
      g: fetchColorFromPercent3(background1.g, orangeBackground.g, blueBackground.g, value),
      b: fetchColorFromPercent3(background1.b, orangeBackground.b, blueBackground.b, value)
    });
    setTextColor({
      r: fetchColorFromPercent(whitishColor.r, background1.r, value),
      g: fetchColorFromPercent(whitishColor.g, background1.g, value),
      b: fetchColorFromPercent(whitishColor.b, background1.b, value)
    });
    setCurrentPercent(value);
  }, [setColor1, setBackground, setTextColor, setCurrentPercent]);

  // Random starting location
  /*useEffect(() => {
    changePercentage(getRandomInt(100));
  }, [ changePercentage ]);*/

  return <div className="App">
      <header className="App-header" style={{
        color: `rgb(${textColor.r}, ${textColor.g}, ${textColor.b})`,
        backgroundColor: `rgb(${background.r}, ${background.g}, ${background.b})`
      }}>
        <Tabs
          backgroundColor={`rgb(${color1.r}, ${color1.g}, ${color1.b})`}
          textColor={`rgb(${textColor.r}, ${textColor.g}, ${textColor.b})`}
        >
          <Home backgroundColor={`rgb(${color1.r}, ${color1.g}, ${color1.b})`} currentPercent={currentPercent}/>
        </Tabs>
      </header>
    </div>;
}

export default App;
