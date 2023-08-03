import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/quizpage/Header';
import Btn from '../components/_common/Btn';
import ewhaGreen from '../assets/answerpage/ewhaGreen.svg';
import { AnswerContext } from '../components/answerpage/AnswerProvider';

const AnswerPage = () => {
    const navigate = useNavigate();
    const { dDay } = useParams();
    const { quizDescription } = useContext(AnswerContext);
    const { answerContent } = useContext(AnswerContext);

    // 퀴즈 줄 개수(dDay)에 따라 정답 버튼과 퀴즈 사이의 간격 &
    // 설명 박스와 '추가정보 보러가기'버튼 사이의 간격 다르게 하기
    let answerMargin;
    let btnMargin;
    switch (dDay) {
        case '1': //한줄 일 때
            answerMargin = '54px';
            btnMargin = '52px';
            break;
        case '2': //두줄 일 때
        case '3':
        case '4':
        case '5':
        case '6':
            answerMargin = '78px';
            btnMargin = '51px';
            break;
        case '7': //세줄 일 때
            answerMargin = '77px';
            btnMargin = '26px';
            break;
    }

    return (
        <Wrapper>
            <Header num={dDay} />
            <AnswerWrapper style={{ marginTop: answerMargin }}>
                <CheckAnswer>정답확인 :</CheckAnswer>
                <Answer>{answerContent}</Answer>
                {/* <Answer>초록</Answer> */}
                <AnswerInfo>
                    {quizDescription}
                    {dDay === '1' && (
                        <EwhaGreen>
                            <img src={ewhaGreen} alt='이화 그린' />
                        </EwhaGreen>
                    )}
                </AnswerInfo>
                {/* <AnswerInfo>
            무인복합기는 모든 건물에 있지만 흑백은 약
            50원, 컬러는 약 300~400원 정도의 가격을 지불해야 해요. 용지만
            들고 간다면 무료로 인쇄가 가능한 곳은 학생문화관 최대 네줄
            우하하학
            {dDay === '1' && <img src={ewhaGreen} alt='이화 그린' />}
        </AnswerInfo> */}
            </AnswerWrapper>
            <BtnWrapper style={{ marginTop: btnMargin }}>
                <TopBtn>
                    <Btn
                        text='추가정보 보러가기'
                        type='deepGreen'
                        onClick={() => {
                            navigate(`/info/${dDay}`);
                        }}
                    />
                </TopBtn>
                <Btn
                    text='메인페이지로 돌아가기'
                    onClick={() => {
                        navigate(`/`);
                    }}
                />
            </BtnWrapper>
        </Wrapper>
    );
};

export default AnswerPage;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AnswerWrapper = styled.div`
    width: calc(100% - 48px);
`;

const Answer = styled.div`
    background-color: var(--green2);
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
    margin-bottom: 20px;
    border-radius: 4px;

    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: var(--white);
`;

const CheckAnswer = styled.div`
    color: #000000;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
`;

const AnswerInfo = styled.div`
    background-color: var(--gray1);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    color: var(--black);
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
    text-align: justify;

    & > img {
        height: 70px;
    }
`;

const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 66px;
`;

const TopBtn = styled.div`
    width: (100% - 222px);
    margin-bottom: 16px;
`;

const EwhaGreen = styled.div`
    margin-top: 20px;
`;
