import React from 'react';
import styled from 'styled-components';

// assets
import up from '../../assets/_common/floating_up.svg';
import down from '../../assets/_common/floating_down.svg';

const FloatingBtn = () => {
    // up 버튼 클릭 시
    const handleScrollUp = () => {
        window.scrollTo({ top: 0 });
    };

    // down 버튼 클릭 시
    const handleScrollDown = () => {
        window.scrollTo({ top: document.body.scrollHeight });
    };

    return (
        <Wrapper>
            <Btn src={up} onClick={handleScrollUp} />
            <Btn src={down} onClick={handleScrollDown} />
        </Wrapper>
    );
};

export default FloatingBtn;

const Wrapper = styled.div`
    z-index: 20;
    position: fixed;
    bottom: 41px;
    right: 24px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 88px;
`;

const Btn = styled.img`
    width: 40px;
    height: 40px;

    cursor: pointer;
`;
