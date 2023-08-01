import React from 'react';
import '../../styles/common.css';
import logo from '../../assets/_common/logo.svg';
import styled from 'styled-components';

const Logo = ({ type }) => {
    return <LogoImg className={type} src={logo} alt='logo' />;
};

export default Logo;

const LogoImg = styled.img`
    //메인 페이지
    &.main {
        width: 146.53px;
        height: 56px;
    }
    //사이드바
    &.sidebar {
        width: 94.2px;
        height: 36px;
    }
`;
