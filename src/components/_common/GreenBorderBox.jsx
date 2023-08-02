import React from 'react';
import styled from 'styled-components';

const GreenBorderBox = props => {
    const { children } = props;
    return <Container>{children}</Container>;
};

export default GreenBorderBox;

const Container = styled.div`
    background-color: var(--green1);
    border-radius: 0.25rem;
    border: 4px solid var(--green2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 20px;
    color: var(--black);
    text-align: center;
    font-family: NanumBarunpen;
    font-size: 1.25rem;
    line-height: 150%;
    word-break: keep-all;
`;
