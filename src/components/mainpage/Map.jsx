import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import d1done from '../../assets/mainpage/partialmap/d1_done.svg';
import d2done from '../../assets/mainpage/partialmap/d2_done.svg';
import d3done from '../../assets/mainpage/partialmap/d3_done.svg';
import d4done from '../../assets/mainpage/partialmap/d4_done.svg';
import d5done from '../../assets/mainpage/partialmap/d5_done.svg';
import d6done from '../../assets/mainpage/partialmap/d6_done.svg';
import d7done from '../../assets/mainpage/partialmap/d7_done.svg';
import d1pink from '../../assets/mainpage/partialmap/d1_pink.svg';
import d2pink from '../../assets/mainpage/partialmap/d2_pink.svg';
import d3pink from '../../assets/mainpage/partialmap/d3_pink.svg';
import d4pink from '../../assets/mainpage/partialmap/d4_pink.svg';
import d5pink from '../../assets/mainpage/partialmap/d5_pink.svg';
import d6pink from '../../assets/mainpage/partialmap/d6_pink.svg';
import d7pink from '../../assets/mainpage/partialmap/d7_pink.svg';
import d1close from '../../assets/mainpage/partialmap/d1_close.svg';
import d2close from '../../assets/mainpage/partialmap/d2_close.svg';
import d3close from '../../assets/mainpage/partialmap/d3_close.svg';
import d4close from '../../assets/mainpage/partialmap/d4_close.svg';
import d5close from '../../assets/mainpage/partialmap/d5_close.svg';
import d6close from '../../assets/mainpage/partialmap/d6_close.svg';
import d1 from '../../assets/mainpage/partialmap/d1.svg';
import d2 from '../../assets/mainpage/partialmap/d2.svg';
import d3 from '../../assets/mainpage/partialmap/d3.svg';
import d4 from '../../assets/mainpage/partialmap/d4.svg';
import d5 from '../../assets/mainpage/partialmap/d5.svg';
import d6 from '../../assets/mainpage/partialmap/d6.svg';
import d7 from '../../assets/mainpage/partialmap/d7.svg';

const Map = ({ today, isTodayDone, dDayState }) => {
    const nav = useNavigate();

    // src return function
    const done = num => {
        if (num === 1 || num === '1') return d1done;
        else if (num === 2 || num === '2') return d2done;
        else if (num === 3 || num === '3') return d3done;
        else if (num === 4 || num === '4') return d4done;
        else if (num === 5 || num === '5') return d5done;
        else if (num === 6 || num === '6') return d6done;
        else if (num === 7 || num === '7') return d7done;
    };
    const pink = num => {
        if (num === 1 || num === '1') return d1pink;
        else if (num === 2 || num === '2') return d2pink;
        else if (num === 3 || num === '3') return d3pink;
        else if (num === 4 || num === '4') return d4pink;
        else if (num === 5 || num === '5') return d5pink;
        else if (num === 6 || num === '6') return d6pink;
        else if (num === 7 || num === '7') return d7pink;
    };
    const close = num => {
        if (num === 1 || num === '1') return d1close;
        else if (num === 2 || num === '2') return d2close;
        else if (num === 3 || num === '3') return d3close;
        else if (num === 4 || num === '4') return d4close;
        else if (num === 5 || num === '5') return d5close;
        else if (num === 6 || num === '6') return d6close;
    };
    const d = num => {
        if (num === 1 || num === '1') return d1;
        else if (num === 2 || num === '2') return d2;
        else if (num === 3 || num === '3') return d3;
        else if (num === 4 || num === '4') return d4;
        else if (num === 5 || num === '5') return d5;
        else if (num === 6 || num === '6') return d6;
        else if (num === 7 || num === '7') return d7;
    };

    const style = [
        { top: '184px', marginLeft: '260px' },
        { top: '247px', marginLeft: '103px' },
        { top: '341px', marginLeft: '244px' },
        { top: '311px', marginLeft: '86px' },
        { top: '305px', marginRight: '38px' },
        { top: '359px', marginRight: '73px' },
        { top: '358px', marginLeft: '42px' },
    ];

    return (
        <>
            {dDayState &&
                dDayState.map(item => (
                    <PartialMapImg
                        src={
                            item.state === 0
                                ? close(item.dDay)
                                : item.state === 1
                                ? done(item.dDay)
                                : item.state === 2
                                ? pink(item.dDay)
                                : null
                        }
                        key={item.dDay}
                    />
                ))}
            {dDayState &&
                dDayState.map((item, idx) => {
                    if (item.state !== 0)
                        return (
                            <img
                                src={d(item.dDay)}
                                style={style[idx]}
                                className='partial-map'
                                onClick={() =>
                                    item.state === 2
                                        ? nav(`/quiz/${item.dDay}`)
                                        : nav(`/info/${item.dDay}`)
                                }
                            />
                        );
                })}
        </>
    );
};

export default Map;

const PartialMapImg = styled.img`
    position: absolute;
    top: 75px;
    z-index: 1;
`;
