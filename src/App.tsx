import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Tabs from './common/Tabs';
import { background1, blueBackground, darkBlue, orangeBackground, peach, slightlyDarkerBackground1, whitishColor } from './constants/colors';
import Home from './home/Home';

/*function fetchColorFromPercent(colorValue1: number, colorValue2: number, sliderValue: number): number {
    return ((colorValue2 - colorValue1)*(sliderValue/100))+colorValue1;
}*/

function fetchColorFromPercent3(colorValue1: number, colorValue2: number, colorValue3: number, sliderValue: number): number {
    if (sliderValue < 50) {
        return ((colorValue2 - colorValue1)*(sliderValue/50))+colorValue1;
    }

    return ((colorValue3 - colorValue2)*((sliderValue-50)/50))+colorValue2;
}

function App() {
    const [ color1, setColor1 ] = useState({
        r: slightlyDarkerBackground1.r,
        g: slightlyDarkerBackground1.g,
        b: slightlyDarkerBackground1.b
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
            r: fetchColorFromPercent3(slightlyDarkerBackground1.r, whitishColor.r, peach.r, value),
            g: fetchColorFromPercent3(slightlyDarkerBackground1.g, whitishColor.g, peach.g, value),
            b: fetchColorFromPercent3(slightlyDarkerBackground1.b, whitishColor.b, peach.b, value)
        });
        setBackground({
            r: fetchColorFromPercent3(background1.r, orangeBackground.r, blueBackground.r, value),
            g: fetchColorFromPercent3(background1.g, orangeBackground.g, blueBackground.g, value),
            b: fetchColorFromPercent3(background1.b, orangeBackground.b, blueBackground.b, value)
        });
        setTextColor({
            r: fetchColorFromPercent3(whitishColor.r, darkBlue.r, background1.r, value),
            g: fetchColorFromPercent3(whitishColor.g, darkBlue.g, background1.g, value),
            b: fetchColorFromPercent3(whitishColor.b, darkBlue.b, background1.b, value)
        });
        setCurrentPercent(value);
    }, []);

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
                <Home
                    backgroundColor={`rgb(${color1.r}, ${color1.g}, ${color1.b})`}
                    textColor={`rgb(${textColor.r}, ${textColor.g}, ${textColor.b})`}
                    currentPercent={currentPercent}
                />
            </Tabs>
        </header>
    </div>;
}

export default App;
