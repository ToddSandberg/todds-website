import React, { useEffect, useState } from 'react'

type Props = {
    value: number,
    onChange: (result: number) => void
}

export default function Slider({value, onChange}: Props) {
    const [ sliderValue, setSliderValue ] = useState(value);

    useEffect(() => {
        setSliderValue(value);
    }, [value]);

    return <div className="range-slider" style={{zIndex: 4}}>
        <input
            type="range"
            value={sliderValue}
            min="0"
            max="100"
            onChange={(event) => {
                const newSliderValue = parseInt(event.target.value);

                setSliderValue(newSliderValue);
                onChange(newSliderValue);
            }}
        />
        <span className="range-slider__value">{sliderValue}</span>
    </div>;
}