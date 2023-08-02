import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import map from '../../../assets/infopage/d2/d2_map.svg';
import Dday from '../../_common/Dday';
import XBtn from '../../_common/XBtn';
import GreenBorder from '../../_common/GreenBorder';
import InfoBox from '../../_common/InfoBox';
import Content1 from './Content1';
import Content2 from './Content2';
import Btn from '../../_common/Btn';
import FloatingBtn from '../../_common/FloatingBtn';

const Info2 = () => {
    const nav = useNavigate();
    return (
        <>
            <Wrapper>
                <Header>
                    <Dday num={2} />
                    <div className='xbtn'>
                        <XBtn
                            option='default'
                            onClick={() => nav('/answer/2')}
                        />
                    </div>
                </Header>
                <Body>
                    <div className='infoTitle'>
                        <GreenBorder text='채플 및 필수교양' />
                    </div>
                    <MapImg src={map} />
                    <InfoBoxWrapper>
                        <InfoBox btnText='이화 소식' content={<Content1 />} />
                    </InfoBoxWrapper>
                </Body>
                <FloatingBtn />
            </Wrapper>
            <Footer>
                <Btn
                    text='메인페이지로 돌아가기'
                    type='deepGreen'
                    onClick={() => nav('/')}
                />
            </Footer>
        </>
    );
};

export default Info2;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 110px);
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Header = styled.div`
    width: calc(100% - 48px);
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
`;
const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 28px;
    margin-bottom: 10px;
    .infoTitle {
        align-self: center;
        width: calc(100% - 48px);
    }
`;
const Footer = styled.div`
    transform: translatY(-100%);
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MapImg = styled.img`
    align-self: center;
    width: 80%;
    margin: 40px 0px;
`;
const InfoBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
