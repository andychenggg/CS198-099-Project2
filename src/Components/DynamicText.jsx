import React, { useState, useEffect } from 'react';
import './styles/DynamicText.css'
const DynamicText = ({ text, extraSty, flip, wordPerSecond}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isCursorVisible, setIsCursorVisible] = useState(true);

    useEffect(() => {
        let index = 0;
        const interval = 1000 / wordPerSecond;

        const textInterval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => {
                    return text.substring(0, index);
                });
                index++;
            } else {
                setIsCursorVisible(false); // Stop cursor when text ends
                clearInterval(textInterval);
            }
        }, interval);

        return () => clearInterval(textInterval);
    }, []);

    if(flip === "true"){
        useEffect(() => {
            const cursorInterval = setInterval(() => {
                setIsCursorVisible((vis) => !vis);
            }, 500); // Blinking cursor interval

            return () => clearInterval(cursorInterval);
        }, []);
    }

    return (
        <div style={extraSty}>
            {displayedText}
            {isCursorVisible && <span className="cursor">|</span>}
        </div>
    );
};

export default DynamicText;
