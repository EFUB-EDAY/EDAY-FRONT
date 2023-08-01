import React from 'react';
import styled from 'styled-components';

const Dday = props => {
    const { num, isGreen } = props;
    return (
        <Container>
            <Text style={{ color: isGreen ? 'var(--green3)' : 'var(--black)' }}>
                {`D-${num}`}
            </Text>
        </Container>
    );
};

export default Dday;

const Container = styled.div`
    position: relative;
    width: 60px;
    height: 30px;
`;
const Text = styled.div`
    position: absolute;
    /* top: 22px; */
    font-family: 'GothamBold';
    font-size: 24px;
    letter-spacing: 2.4px;
    text-align: center;
`;
