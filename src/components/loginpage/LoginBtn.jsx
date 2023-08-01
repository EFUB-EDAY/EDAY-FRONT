import React from 'react';
import styled from 'styled-components';

// assets
import kakao from '../../assets/loginpage/btn_kakao.svg';

const LoginBtn = () => {
    const CLIENT_ID = `${process.env.REACT_APP_API_KEY}`;
    const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };

    return <Btn src={kakao} onClick={handleLogin} />;
};

export default LoginBtn;

const Btn = styled.img`
    width: 300px;
    height: 44px;

    cursor: pointer;
`;
