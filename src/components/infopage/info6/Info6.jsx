import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

// components
import InfoBox from '../../_common/InfoBox';
import Dday from '../../_common/Dday';
import XBtn from '../../_common/XBtn';
import GreenBorder from '../../_common/GreenBorder';
import Btn from '../../_common/Btn';
import FloatingBtn from '../../_common/FloatingBtn';

// Content components
import Content6_1 from './Content6_1';
import Content6_2 from './Content6_2';
import Content6_3 from './Content6_3';

// images
import map6 from '../../../assets/infopage/d6/dDay6_map.svg';

// api
import { GetInfo } from '../../../api/info';

const Info6 = () => {
    const navigate = useNavigate();
    const { dDay } = useParams();
    const [borderText, setBorderText] = useState({});

    //GreenBorder의 text 가져오기
    useEffect(() => {
        GetInfo(6)
            .then(res => {
                console.log(res.data);
                setBorderText(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Wrapper>
            <Top>
                <Dday num={dDay} />
                <XBtnContainer>
                    <XBtn
                        onClick={() => {
                            navigate(`/answer/6`);
                        }}
                    />
                </XBtnContainer>
            </Top>
            <Body>
                <BorderWrapper>
                    {/* <GreenBorder text={borderText.headline} /> */}
                    <GreenBorder text='교과과정 확인 & 시간표 & 수강신청' />
                </BorderWrapper>
                <MapWrapper>
                    <img src={map6} alt='d-6 지도' />
                </MapWrapper>
                <InfoBoxWrapper>
                    <InfoBox btnText='교과과정 확인' content={<Content6_1 />} />
                    <InfoBox btnText='수강신청' content={<Content6_2 />} />
                    <InfoBox btnText='시간표' content={<Content6_3 />} />
                </InfoBoxWrapper>
            </Body>
            <BtnWrapper>
                <Btn
                    text='메인페이지로 돌아가기'
                    type='deepGreen'
                    onClick={() => {
                        navigate('/');
                    }}
                />
            </BtnWrapper>
            <FloatingBtn />
        </Wrapper>
    );
};

export default Info6;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Top = styled.div`
    width: calc(100% - 48px);
    display: flex;
    justify-content: space-between;

    margin-top: 57px;
    margin-bottom: 55px;
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const BorderWrapper = styled.div`
    width: calc(100% - 48px);
    align-self: center;
`;

const XBtnContainer = styled.div`
    margin-top: 2px;
`;

const MapWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 39.6px;

    & > img {
        width: 274px;
        height: 281.34px;
    }
`;

const InfoBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BtnWrapper = styled.div`
    width: calc(100% - 194px);
    display: flex;
    justify-content: center;

    margin-top: 45px;
    margin-bottom: 34px;
`;
