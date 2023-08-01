import React from 'react';
import styled from 'styled-components';

//infoPage에서 사용할 경우에는 type에 info,
//mainPage에서 사용할 경우에는 type에 main을 넘겨주면 됩니다.
const GreenBorder = ({ text, type }) => {
    return (
        <>
            <Border className={type}>
                <Text>{text}</Text>
            </Border>
        </>
    );
};

export default GreenBorder;

const Border = styled.div`
    height: 0;
    border-bottom: 4px solid var(--green2);
    border-radius: 2px;
    position: relative;

    &.info {
        border-radius: 0px;
    }

    &.main {
        display: flex;
        justify-content: center;
    }
`;

const Text = styled.div`
    font-family: NanumBarunpen;
    font-weight: 700;
    font-size: 16px;
    line-height: 20.38px;
    color: var(--green2);
    position: absolute;
    bottom: 8px;
`;
