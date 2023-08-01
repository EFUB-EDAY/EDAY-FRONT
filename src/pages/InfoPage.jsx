import React from 'react';
import { useParams } from 'react-router-dom';

import Info1 from '../components/infopage/Info1';
import Info2 from '../components/infopage/Info2';
import Info3 from '../components/infopage/info3/Info3';
import Info4 from '../components/infopage/info4/Info4';
import Info5 from '../components/infopage/Info5';
import Info6 from '../components/infopage/Info6';
import Info7 from '../components/infopage/Info7';

const InfoPage = () => {
    const { dDay } = useParams();
    return (
        <>
            {dDay === '1' ? (
                <Info1 />
            ) : dDay === '2' ? (
                <Info2 />
            ) : dDay === '3' ? (
                <Info3 />
            ) : dDay === '4' ? (
                <Info4 />
            ) : dDay === '5' ? (
                <Info5 />
            ) : dDay === '6' ? (
                <Info6 />
            ) : dDay === '7' ? (
                <Info7 />
            ) : null}
        </>
    );
};

export default InfoPage;
