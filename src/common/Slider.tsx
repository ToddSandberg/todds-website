import React, { useEffect, useState } from 'react';

type Props = {
    value: number,
    onChange: (result: number) => void,
    min?: number,
    max?: number,
    ariaLabel?: string
}

export default function Slider({value, onChange, min, max, ariaLabel}: Props) {
    const [ sliderValue, setSliderValue ] = useState(value);

    useEffect(() => {
        setSliderValue(value);
    }, [value]);

    return <div className="range-slider" style={{zIndex: 4}}>
        <input
            type="range"
            value={sliderValue}
            min={min !== undefined ? min : 0}
            max={max !== undefined ? max : 100}
            aria-label={ariaLabel}
            onChange={(event) => {
                const newSliderValue = Number.parseInt(event.target.value);

                setSliderValue(newSliderValue);
                onChange(newSliderValue);
            }}
        />
        <span className="range-slider__value">{sliderValue}</span>
    </div>;
}