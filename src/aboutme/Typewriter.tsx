import { useEffect, useState } from 'react';
import { isSmallDevice } from '../common/CommonFunctions';
import StyledText from '../common/StyledText';

type Props = {
    text: string,
    speed?: number
}

export default function Typewriter({text, speed = 5}: Props) {
    const [ currentText, setCurrentText ] = useState('');
    const [ currentIndex, setCurrentIndex ] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [text, speed, currentIndex]);

    return <p
        style={{zIndex: '2', position: 'relative', fontSize: isSmallDevice() ? '14px' : '20px'}}
    >
        <StyledText text={currentText}/>
        <span className='typewriter-caret'/>
    </p>;
}