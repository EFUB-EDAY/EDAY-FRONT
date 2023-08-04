import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// assets
import img1 from '../../assets/_common/loading/loading_1.svg';
import img2 from '../../assets/_common/loading/loading_2.svg';
import img3 from '../../assets/_common/loading/loading_3.svg';
import img4 from '../../assets/_common/loading/loading_4.svg';
import img5 from '../../assets/_common/loading/loading_5.svg';
import img6 from '../../assets/_common/loading/loading_6.svg';

const loadingImgs = [img1, img2, img3, img4, img5, img6];

const Loading = () => {
    const [imgNum, setImgNum] = useState(0);

    useEffect(() => {
        let cnt = 0;
        let cntInterval = setInterval(() => {
            setImgNum(cnt++ % 6);
        }, 130);

        return () => clearInterval(cntInterval);
    }, []);

    return (
        <Wrapper>
            <LoadingImg src={loadingImgs[imgNum]} key={imgNum} />
        </Wrapper>
    );
};

export default Loading;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
    background-color: #000000cc;
`;

const LoadingImg = styled.img`
    width: 48px;
    height: 48px;
`;
