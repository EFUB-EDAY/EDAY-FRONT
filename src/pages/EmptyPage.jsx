import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// assets
import empty from '../assets/_common/empty.gif';

// components
import XBtn from '../components/_common/XBtn';

const EmptyPage = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Nav>
                <XBtn onClick={() => navigate('/')} />
            </Nav>
            <Body>
                <Img src={empty} />
                <BigText>빈 페이지</BigText>
                <SmallText>문제 해결 중!</SmallText>
            </Body>
        </Wrapper>
    );
};

export default EmptyPage;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`;

const Nav = styled.div`
    //position: absolute;
    align-self: flex-end;
    width: 24px;
    height: 24px;
    margin-top: 57px;
    margin-right: 16px;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    margin-top: 144px;
    margin-bottom: 230px;
`;

const Img = styled.img`
    width: calc(100% - 130px);
    //width: 260px;
    //height: 260px;
`;

const BigText = styled.p`
    font-family: 'NanumBarunpen';
    font-weight: 700;
    font-size: 20px;
    line-height: 25.48px;
    color: var(--green3);

    margin-top: 64px;
    margin-bottom: 16px;
`;

const SmallText = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: var(--green2);
`;
