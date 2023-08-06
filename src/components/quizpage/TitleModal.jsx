import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

import Confetti from '../../assets/lottie/Confetti';
import { AnswerContext } from '../../components/answerpage/AnswerProvider';

const TitleModal = () => {
    const { dDay } = useParams();
    const [showConfetti, setShowConfetti] = useState(false);
    const { titleImgUrl } = useContext(AnswerContext);

    useEffect(() => {
        document.body.style.cssText = `
              position: fixed;
              top: -${window.scrollY}px;
              overflow-y: scroll;
              width: 100%;`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);

    // 이미지와 컨페티가 같이 등장(이미지 로딩 시간 고려)
    useEffect(() => {
        setTimeout(() => {
            setShowConfetti(true);
        }, 300);
    }, [dDay]);

    return (
        <>
            <Container>
                <Background />
                <ModalBlock>
                    <TitleImg src={titleImgUrl} />
                    {showConfetti && <Confetti width='342px' />}
                </ModalBlock>
            </Container>
        </>
    );
};

export default TitleModal;

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
`;

const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    animation: modal-bg-show 0.3s;
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @media (min-width: 576px) {
        width: 390px;
    }
`;

const ModalBlock = styled.div`
    position: relative;
    width: calc(100% - 48px);
    animation: modal-show 0.3s;
    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -20px;
        }
        to {
            opacity: 1;
            margin-top: 0;
        }
    }
    @media (min-width: 576px) {
        width: calc(390px - 48px);
    }
`;

const TitleImg = styled.img`
    width: 342px;
    height: 367.37px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
