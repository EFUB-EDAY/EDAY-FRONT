import React from 'react';
import styled from 'styled-components';

// assets
import background from '../assets/loginpage/background_login.svg';
import logo from '../assets/loginpage/logo_shadow.svg';
import bear from '../assets/loginpage/bear_shadow.svg';

// components
import LoginBtn from '../components/loginpage/LoginBtn';

const LoginPage = () => {
    return (
        <Wrapper>
            <LogoImg src={logo} />
            <BearImg src={bear} />
            <LoginBtn />
        </Wrapper>
    );
};

export default LoginPage;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100vh;

    background-image: url(${background});
    background-size: cover;
`;

const LogoImg = styled.img`
    width: calc(100% - 190px);
    margin-top: 214px;
    margin-bottom: 169.56px;
`;

const BearImg = styled.img`
    width: calc(100% - 290px);
    margin: 46px 0;
`;
