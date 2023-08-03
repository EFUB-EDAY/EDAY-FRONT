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
import Content5_1 from './Content5_1';
import Content5_2 from './Content5_2';
import Content5_3 from './Content5_3';

// images
import map5 from '../../../assets/infopage/d5/dDay5_map.svg';

// api
import { GetInfo } from '../../../api/info';

const Info5 = () => {
    const navigate = useNavigate();
    const { dDay } = useParams();
    const [borderText, setBorderText] = useState({});

    //GreenBorder의 text 가져오기
    useEffect(() => {
        GetInfo(5)
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
                            navigate(`/answer/5`);
                        }}
                    />
                </XBtnContainer>
            </Top>
            <BorderWrapper>
                {/* <GreenBorder text={borderText.headline} /> */}
                <GreenBorder text='학교 내 편의시설(서비스)' />
            </BorderWrapper>
            <MapWrapper>
                <img src={map5} alt='d-5 지도' />
            </MapWrapper>
            <InfoBox btnText='대출 서비스' content={<Content5_1 />} />
            <InfoBox btnText='학위논문 이용 서비스' content={<Content5_2 />} />
            <InfoBox btnText='무인복합기' content={<Content5_3 />} />

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

export default Info5;

const Wrapper = styled.div`
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

const BorderWrapper = styled.div`
    width: calc(100% - 48px);
`;

const XBtnContainer = styled.div`
    margin-top: 2px;
`;

const MapWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;

    & > img {
        width: 172.6px;
        height: 288.52px;
    }
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 37.48px;
    margin-bottom: 34px;
`;
