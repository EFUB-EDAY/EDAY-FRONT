import imageSrc from '../../assets/_common/img_icon.svg';
import styled from 'styled-components';
import XBtn from './XBtn';
import { useEffect } from 'react';

const Img = ({ isImgOpened, closer, img, onClick }) => {
    return (
        <div>
            <ImgIcon>
                <img src={imageSrc} onClick={onClick} />
            </ImgIcon>

            {isImgOpened ? (
                <Container>
                    <Background onClick={closer} />
                    <Img_Btn>
                        <ModalBlock>
                            <img src={img} />
                            <OverlayBtn>
                                <XBtn option={'sidebar'} onClick={closer} />
                            </OverlayBtn>
                        </ModalBlock>
                    </Img_Btn>
                </Container>
            ) : null}
        </div>
    );
};

export default Img;

const ImgIcon = styled.div`
    margin-left: 10px;
    cursor: pointer;
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
`;

const ModalBlock = styled.div`
    position: relative;
    width: calc(100% - 48px);
    animation: modal-show 0.3s;

    display: flex;
    justify-content: end;

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
`;

const OverlayBtn = styled.div`
    position: absolute;
`;

const Img_Btn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 48px;
`;
