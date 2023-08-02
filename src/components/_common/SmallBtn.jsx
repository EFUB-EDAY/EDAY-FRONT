import React from 'react';
import styled from 'styled-components';

const SmallBtn = props => {
    const { isRed, text, onClick } = props;
    return (
        <Container
            style={{ backgroundColor: isRed ? 'var(--pink)' : 'var(--gray2)' }}
            onClick={onClick}
        >
            <Text>{text}</Text>
        </Container>
    );
};

export default SmallBtn;

const Container = styled.div`
    width: 56px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-top: 10px;
`;
const Text = styled.div`
    color: var(--white);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 600;
`;
