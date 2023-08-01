import React, { useState } from 'react';
import styled from 'styled-components';

//백엔드 연결 전 퍼블리싱 확인용
const OptionTemp = ({ num }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isSelected, setIsSelected] = useState('');

    const handleOptionClick = option => {
        setIsSelected(option);
    };

    return (
        <>
            <Wrapper>
                <OptionBox
                    onClick={() => handleOptionClick(1)}
                    isselected={isSelected === 1}
                >
                    ecc
                </OptionBox>
                <OptionBox
                    onClick={() => handleOptionClick(2)}
                    isselected={isSelected === 2}
                >
                    학문관
                </OptionBox>
                <OptionBox
                    onClick={() => handleOptionClick(3)}
                    isselected={isSelected === 3}
                >
                    종과
                </OptionBox>
            </Wrapper>
        </>
    );
};

export default OptionTemp;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 78px;
`;

const OptionBox = styled.div`
    background-color: ${props =>
        props.isselected ? 'var(--green2)' : 'var(--green1)'};
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 100ms ease-in;

    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: ${props => (props.isselected ? 'var(--white)' : 'var(--black)')};

    &.last {
        margin-bottom: 0;
    }
`;
