import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// assets
import dorm from '../../../assets/infopage/d7/d7_map.svg';

// components
import Dday from '../../_common/Dday';
import XBtn from '../../_common/XBtn';
import GreenBorder from '../../_common/GreenBorder';
import InfoBox from '../../_common/InfoBox';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Btn from '../../_common/Btn';
import FloatingBtn from '../../_common/FloatingBtn';

// api
import { GetInfo } from '../../../api/info';

const Info7 = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Header>
                <Dday num='7' isGreen={false} />
                <div className='xbtn'>
                    <XBtn
                        option='default'
                        onClick={() => navigate('/answer/7')}
                    />
                </div>
            </Header>
            <Body>
                <div className='infoTitle'>
                    <GreenBorder text='건물위치&이동경로&소요시간&셔틀' />
                </div>
                <MapImg src={dorm} />
                <InfoBoxWrapper>
                    <InfoBox
                        btnText='건물 간 이동정보'
                        content={<Content1 />}
                    />
                    <InfoBox btnText='지름길' content={<Content2 />} />
                    <InfoBox btnText='셔틀버스' content={<Content3 />} />
                </InfoBoxWrapper>
            </Body>
            <Footer>
                <Btn text='메인페이지로 돌아가기' type='deepGreen' />
            </Footer>
            <FloatingBtn />
        </Wrapper>
    );
};

export default Info7;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;

    width: calc(100% - 48px);
    margin-top: 57px;
    margin-bottom: 32px;

    & > .xbtn {
        margin-top: 2px;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 28px;
    margin-bottom: 10px;

    & > .infoTitle {
        align-self: center;
        width: calc(100% - 48px);
    }
`;

const Footer = styled.div`
    display: flex;
    justify-content: center;

    width: calc(100% - 194px);
    margin-top: 30px;
    margin-bottom: 33.97px;
`;

const MapImg = styled.img`
    align-self: center;

    width: 186px;
    height: 375px;
    margin: 40px 0px;
`;

const InfoBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
