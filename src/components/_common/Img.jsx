import imageSrc from '../../assets/_common/img_icon.svg';
import styled from 'styled-components';
import XBtn from './XBtn';
import { useEffect } from 'react';

const Img = ({ isImgOpened, closer, img, onClick, color }) => {
    useEffect(() => {
        if (isImgOpened) {
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
        }
    }, [isImgOpened]);
    return (
        <>
            <ImgIcon>
                <img src={imageSrc} onClick={onClick} />
            </ImgIcon>
            {isImgOpened ? (
                <Container>
                    <Background onClick={closer} />
                    <ModalBlock>
                        <img src={img} />
                        <OverlayBtn>
                            <XBtn
                                option={
                                    color === 'white'
                                        ? 'sidebar'
                                        : color === 'black'
                                        ? undefined
                                        : null
                                }
                                onClick={closer}
                            />
                        </OverlayBtn>
                    </ModalBlock>
                </Container>
            ) : null}
        </>
    );
};

export default Img;

const ImgIcon = styled.div`
    cursor: pointer;
    margin-left: 10px;
`;
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
    display: flex;
    justify-content: center;
    @keyframes modal-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @media (min-width: 576px) {
        width: calc(390px - 48px);
    }
    img {
        width: 100%;
    }
`;
const OverlayBtn = styled.div`
    position: absolute;
    right: 0;
`;
