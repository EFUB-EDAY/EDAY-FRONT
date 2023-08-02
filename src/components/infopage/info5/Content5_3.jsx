import React from 'react';
import styled from 'styled-components';

import GreenBorder from '../../_common/GreenBorder';
import InfoContent from '../../_common/InfoContent';
import Title from '../../_common/Title';

import pic5_5 from '../../../assets/infopage/d5/dDay5_5.svg';

const Content5_1 = () => {
    return (
        <Wrapper>
            <Title num='1.' title='무인복합기 현황 및 위치' />
            <GreenBorder type='info' />
            <InfoContent
                type='top'
                text='컬러로 프린트가 안되는 곳들도 있으니 유의해서 보시는 것을 추천해요!'
            />
            <ImgWrapper>
                <Img src={pic5_5} />
            </ImgWrapper>
        </Wrapper>
    );
};

export default Content5_1;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 14px;
`;

const Img = styled.img`
    width: 100%;
`;
