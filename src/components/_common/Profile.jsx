import React from 'react';
import styled from 'styled-components';
import userImg from '../../assets/_common/user_img.svg';

const Profile = ({ type, userName }) => {
    return (
        <Wrapper>
            <UserImg src={userImg} alt='profile' />
            <UserName className={type}>{userName}</UserName>
        </Wrapper>
    );
};

export default Profile;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const UserImg = styled.img`
    width: 40px;
    height: 40px;
`;

const UserName = styled.div`
    font-family: 'NanumBarunpen';
    font-weight: 700;
    font-size: 20px;
    line-height: 25.48px;
    margin-left: 11px;

    //흰 버전
    &.white {
        color: #fafff8;
    }
    //검은 버전
    &.black {
        color: #151515;
    }
`;
