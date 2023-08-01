import React, { useEffect } from 'react';
import styled from 'styled-components';
import GreenBorderBox from './GreenBorderBox';
import SmallBtn from './SmallBtn';

const Modal = React.memo(props => {
    const {
        isModalOpen,
        closer,
        btn,
        btntext1,
        btntext2,
        maintext,
        onClick1,
        onClick2,
    } = props;
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
    return (
        <>
            {isModalOpen ? (
                <Container>
                    <Background onClick={closer} />
                    <ModalBlock>
                        <GreenBorderBox>
                            <Text>{maintext}</Text>
                            {btn === '2' ? (
                                <BtnContainer>
                                    <SmallBtn
                                        isRed={true}
                                        text={btntext1}
                                        onClick={onClick1}
                                    />
                                    <SmallBtn
                                        isRed={false}
                                        text={btntext2}
                                        onClick={onClick2}
                                    />
                                </BtnContainer>
                            ) : btn === '1' ? (
                                <SmallBtn
                                    isRed={true}
                                    text={btntext1}
                                    onClick={onClick1}
                                />
                            ) : null}
                        </GreenBorderBox>
                    </ModalBlock>
                </Container>
            ) : null}
        </>
    );
});

export default Modal;

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
const Text = styled.div`
    color: var(--black);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 600;
`;
const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;
