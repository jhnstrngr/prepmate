import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/common/Button';

import { MyContext } from '../../components/state/Context';
import Steps from '../steps/Steps';

function pad(num: number, size: number): string {
    let s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
}

export const Timer = () => {
    const { state } = useContext(MyContext);
    const { items } = state;

    const [timerTime, setTimerTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const toggle = () => {
        if (timerTime === 0) {
            // Show toast saying add an item
            return;
        } else {
            setIsActive(!isActive);
        }
    };

    useEffect(() => {
        let interval: any = null;
        if (isActive) {
            interval = setInterval(() => {
                setTimerTime((timerTime) => timerTime - 1);
            }, 1000);
        } else if (!isActive && timerTime !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, timerTime]);

    const ButtonBorder = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 18%;
    `;

    useEffect(() => {
        let array: [number] = [0];
        items.forEach((item) => array.push(item.time));
        let total = Math.max(...array);
        setTimerTime(total);
    }, [items]);

    return (
        <>
            <div className="timer-rectangle">
                <div className="time-border">
                    <div className="time">
                        {pad(Math.floor(timerTime / 60), 2)}:
                        {pad(timerTime % 60, 2)}
                    </div>
                </div>
            </div>
            <ButtonBorder>
                <Button onClick={toggle} size="large">
                    {!isActive ? 'Start' : 'Stop'}
                </Button>
            </ButtonBorder>
            <Steps timeT={timerTime} />
        </>
    );
};

export default Timer;
