import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import XBtn from '../_common/XBtn';
import Dday from '../_common/Dday';
import GreenBorder from '../_common/GreenBorder';
import GreenBorderBox from '../_common/GreenBorderBox';

import { GetQuiz } from '../../api/quiz';

const Header = ({ num }) => {
    const navigate = useNavigate();
    const { dDay } = useParams();

    const [borderText, setBorderText] = useState({});
    const [question, setQuestion] = useState({});

    //Quiz 내용 & 주제 가져오기
    useEffect(() => {
        GetQuiz(num)
            .then(res => {
                console.log(res.data);
                setBorderText(res.data);
                setQuestion(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <Top>
                <Dday num={dDay} />
                <XBtnContainer>
                    <XBtn onClick={() => navigate(-1)} />
                </XBtnContainer>
            </Top>
            <GreenBorder text='이화 소식' />
            {/* <GreenBorder text={borderText.topic} /> */}
            <BoxWrapper>
                <GreenBorderBox>
                    {question.quizContent}이화여대 공식 색상은 __이다.
                </GreenBorderBox>
            </BoxWrapper>
        </>
    );
};

export default Header;

const Top = styled.div`
    margin-bottom: 79px;
    position: relative;
`;

const BoxWrapper = styled.div`
    margin-top: 76px;
`;

const XBtnContainer = styled.div`
    position: absolute;
    right: 0;
    top: 22px;
`;
