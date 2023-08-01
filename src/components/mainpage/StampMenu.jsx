import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import stamp from '../../assets/mainpage/stamp.svg';
import lock from '../../assets/mainpage/lock.svg';

const StampMenu = props => {
    const { dDayState, today } = props;
    return (
        <Container>
            <Title>출석도장</Title>
            <CircleWrapper>
                {dDayState.map(item => (
                    <CircleContainer>
                        <Text>{`D-${item.dDay}`}</Text>
                        <div
                            className='circle'
                            style={{
                                backgroundColor:
                                    item.dDay === today
                                        ? 'var(--pink)'
                                        : item.state === 0
                                        ? 'var(--black)'
                                        : 'var(--white)',
                            }}
                        >
                            {item.state === 0 ? (
                                <img src={lock} />
                            ) : item.state === 1 ? (
                                <img src={stamp} />
                            ) : null}
                        </div>
                    </CircleContainer>
                ))}
                <CircleContainer>
                    <Text style={{ marginTop: '10px' }}>D-Day!</Text>
                </CircleContainer>
            </CircleWrapper>
        </Container>
    );
};

export default StampMenu;

const Container = styled.div`
    padding: 16px;
    margin-top: 25px;
`;
const Title = styled.div`
    color: var(--white);
    font-weight: 600;
    margin-left: 8px;
`;
const CircleWrapper = styled.div`
    margin-top: 15px;
    width: 248px;
    height: 180px;
    display: flex;
    flex-wrap: wrap;
`;
const CircleContainer = styled.div`
    width: calc(248px / 4);
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .circle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-top: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const Text = styled.div`
    width: calc(248px / 4);
    color: var(--white);
    text-align: center;
    font-family: 'GothamBold';
    font-size: 12px;
    font-weight: 700;
`;
