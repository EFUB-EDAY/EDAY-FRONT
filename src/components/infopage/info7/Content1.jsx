import React from 'react';
import styled from 'styled-components';

// assets
import table1 from '../../../assets/infopage/d7/table1_1.png';
import table2 from '../../../assets/infopage/d7/table1_2.png';

// components
import Title from '../../_common/Title';
import GreenBorder from '../../_common/GreenBorder';

const Content1 = () => {
    return (
        <Wrapper>
            <Title num='1.' title='건물 약어' />
            <GreenBorder type='info' />
            <TableImg src={table1} width='308px' height='545px' />
            <Title num='2.' title='건물 간 소요 시간' />
            <GreenBorder type='info' />
            <TableImg src={table2} width='308px' height='434px' />
        </Wrapper>
    );
};

export default Content1;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
`;

const TableImg = styled.img`
    align-self: center;

    width: ${props => props.width};
    height: ${props => props.height};
    margin-top: 12px;
    margin-bottom: 20px;
`;
