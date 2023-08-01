import React, { useState } from 'react';
import styled from 'styled-components';
import AnimateHeight from 'react-animate-height';

// components
import XBtn from './XBtn';
import FloatingBtn from './FloatingBtn';

const InfoBox = ({ btnText, content: Content }) => {
    const [boxClass, setBoxClass] = useState('btn'); // Box 컴포넌트 클래스 이름 ('btn' || 'box)

    // Box 클릭 시 (클래스 이름이 btn일 경우)
    const handleBoxClick = () => {
        boxClass === 'btn' && setBoxClass('box');
    };

    // XBtn 클릭 시
    const handleXBtnClick = () => {
        setBoxClass('btn');
    };

    return (
        <BoxWrapper>
            <AnimateHeight
                duration={300}
                height={boxClass === 'btn' ? 59 : 'auto'}
                easing='ease-in-out '
                animateOpacity={true}
            >
                <Box className={boxClass} onClick={handleBoxClick}>
                    {boxClass === 'btn' ? (
                        <div>{btnText}</div>
                    ) : (
                        <div className='boxContent'>
                            <XBtn option='info' onClick={handleXBtnClick} />
                            <ContentWrapper>{Content}</ContentWrapper>
                        </div>
                    )}
                </Box>
            </AnimateHeight>
        </BoxWrapper>
    );
};

export default InfoBox;

const BoxWrapper = styled.div`
    width: calc(100% - 48px);
    margin-bottom: 20px;
`;

const Box = styled.div`
    position: relative;
    width: 100%;
    min-height: 59px;
    border-radius: 4px;

    &.btn {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 59px;
        background-color: var(--green2);

        font-size: 16px;
        color: rgba(250, 255, 248, 1);
        cursor: pointer;
    }

    &.box {
        background-color: var(--gray1);
    }

    & > .boxContent {
        width: 100%;
        height: 100%;
    }
`;

const ContentWrapper = styled.div`
    width: 100%;
`;
