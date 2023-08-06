import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// components
import XBtn from '../_common/XBtn';
import Dday from '../_common/Dday';
import GreenBorder from '../_common/GreenBorder';
import GreenBorderBox from '../_common/GreenBorderBox';

// api
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
        <Wrapper>
            <Top>
                <Dday num={dDay} />
                <XBtnContainer>
                    <XBtn onClick={() => navigate(-1)} />
                </XBtnContainer>
            </Top>
            <BorderWrapper>
                {/* <GreenBorder text='이화 소식' /> */}
                <GreenBorder text={borderText.topic} />
            </BorderWrapper>
            <BoxWrapper>
                <GreenBorderBox>{question.quizContent}</GreenBorderBox>
                {/* <GreenBorderBox>
               이화여대 공식 색상은 __이다.
                </GreenBorderBox> */}
            </BoxWrapper>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Top = styled.div`
    width: calc(100% - 48px);
    display: flex;
    justify-content: space-between;

    margin-top: 57px;
    margin-bottom: 57px;
`;

const BorderWrapper = styled.div`
    width: calc(100% - 48px);
`;
const BoxWrapper = styled.div`
    width: calc(100% - 48px);
    margin-top: 76px;
`;

const XBtnContainer = styled.div`
    width: (100% - 238px);
`;
