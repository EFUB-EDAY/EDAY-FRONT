import React from 'react';
import styled from 'styled-components';

import InfoContent from '../../_common/InfoContent';
import GreenBorder from '../../_common/GreenBorder';
import Title from '../../_common/Title';
import Tip from '../../_common/Tip';

import pic6_5 from '../../../assets/infopage/d6/dDay6_5.svg';

const Content6_3 = () => {
    return (
        <Wrapper>
            <Title num='1.' title='수업시간' />
            <GreenBorder type='info' />
            <InfoContent
                type='top'
                text='수업시간은 75분이고, 휴식 및 이동시간은 15분입니다.'
            />
            <ImgWrapper>
                <Img src={pic6_5} />
            </ImgWrapper>

            <Title num='2.' title='시간표 짤 때 팁' />
            <GreenBorder type='info' />
            <TipMargin>
                <Tip />
            </TipMargin>
            <InfoContent text='아침 수업 괜찮을지 생각해보기, 통학한다면 특히 더!' />
            <Tip />
            <InfoContent text='식사 시간 고려하기!' />
            <Tip />
            <InfoContent text='공강 시간 길거나 애매하진 않은지 확인하기!' />
            <Tip />
            <InfoContent text='건물 간 이동거리 살펴보기!' />
            <Tip />
            <InfoContent text='시험 시간, 날짜가 겹치진 않는지 보기!' />
            <Tip />
            <InfoContent text='강의평 확인해보기!' />
        </Wrapper>
    );
};

export default Content6_3;

const Wrapper = styled.div`
    width: 100%;
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

const TipMargin = styled.div`
    margin-top: 12px;
`;
