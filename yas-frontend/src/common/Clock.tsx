import React, { useState } from 'react';
import Format from '../utils/Format';
import './Clock.css';

const Clock: React.FunctionComponent<{}> = () => {
    const [time, setTime] = useState(() => {
        window.setInterval(() => {
            setTime(Format.currentTime());
        }, 1000);
        return Format.currentTime();
    });
    return (
        <div className="Clock">
            {time}
        </div>
    );
};

export default Clock;