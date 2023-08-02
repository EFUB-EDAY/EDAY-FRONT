import React, { useEffect } from 'react';
import styled from 'styled-components';

// api
import { KakaoLogin } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const LoginHandler = () => {
    const navigate = useNavigate();
    const code = new URLSearchParams(window.location.search).get('code');

    useEffect(() => {
        KakaoLogin(code)
            .then(() => {
                navigate('/');
                window.location.reload();
            })
            .catch(error => {
                alert('로그인에 실패하였습니다.');
                console.log(error);
            });
    }, []);

    return <Wrapper>Loading...</Wrapper>;
};

export default LoginHandler;

const Wrapper = styled.div`
    width: 100%;
`;
