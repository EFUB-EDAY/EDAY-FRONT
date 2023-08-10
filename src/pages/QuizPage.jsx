import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

// components
import Header from '../components/quizpage/Header';
import Option from '../components/quizpage/Option';
import Btn from '../components/_common/Btn';
import { AnswerContext } from '../components/answerpage/AnswerProvider';
import TitleModal from '../components/quizpage/TitleModal';

const QuizPage = () => {
    const { dDay } = useParams();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showRetry, setShowRetry] = useState(false);
    const { isAnswer } = useContext(AnswerContext);

    const handleCheckAnswer = () => {
        if (isAnswer) {
            //modal+confetti 띄우기
            setIsModalOpen(true);
            setTimeout(() => {
                setIsModalOpen(false);
                navigate(`/answer/${dDay}`);
            }, 5000);
        } else {
            setShowRetry(true);
            setTimeout(() => {
                setShowRetry(false);
            }, 1200);
        }
    };

    //퀴즈 줄 개수(dDay)에 따라 '정답 확인하기' 버튼과 선택지들 사이의 간격 다르게 하기
    let btnMargin;
    //'정답 확인하기' 버튼+'다시 생각해보세요(16px)'를 감싼 wrapper를 기준으로 한 margin-top
    switch (dDay) {
        case '1': //한 줄 일때
            btnMargin = '103px';
            break;
        case '3': //두 줄 일때
        case '4':
        case '5':
        case '6':
            btnMargin = '78px';
            break;
        case '7': //세 줄 일때
        case '2':
            btnMargin = '53px';
            break;
        default:
            btnMargin = '78px';
            break;
    }

    return (
        <Wrapper>
            <Header num={dDay} />
            <Option num={dDay} />
            <BtnWrapper style={{ marginTop: btnMargin }}>
                {showRetry ? (
                    <Retry showRetry={showRetry}>다시 생각해보세요!</Retry>
                ) : (
                    <Retry />
                )}
                {isModalOpen && <TitleModal />}
                <Btn
                    type='deepGreen'
                    text='정답 확인하기'
                    onClick={handleCheckAnswer}
                />
            </BtnWrapper>
        </Wrapper>
    );
};

export default QuizPage;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const BtnWrapper = styled.div`
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 130px;
`;

const Retry = styled.div`
    width: 100px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    font-size: 12px;
    font-weight: 500;
    color: var(--pink);
    animation: shake 1s infinite;
    opacity: ${({ showRetry }) => (showRetry ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
    @keyframes shake {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-2px);
        }
        50% {
            transform: translateX(2px);
        }
        75% {
            transform: translateX(-2px);
        }
        100% {
            transform: translateX(0);
        }
    }
`;
