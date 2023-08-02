import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { GetQuiz, PostAnswer } from '../../api/quiz';
import { AnswerContext } from '../answerpage/AnswerProvider';

//백엔드 연결된 버전
const Option = ({ num }) => {
    const { dDay } = useParams();
    const [options, setOptions] = useState([]);
    const { setIsAnswer } = useContext(AnswerContext);
    const { setQuizDescription } = useContext(AnswerContext);
    const { selectedOption, setSelectedOption } = useContext(AnswerContext);
    const { answerContent, setAnswerContent } = useContext(AnswerContext);

    //퀴즈 선택지 가져오기
    useEffect(() => {
        GetQuiz(num).then(res => {
            console.log(res.data);
            setOptions(res.data.optionList);
        });
    }, [num]);

    //option 1,2,3 에 따라 content 다르게 받기
    const getOptionContent = optionNum => {
        const option = options.find(op => op.optionNumber === optionNum);
        return option ? option.content : null;
    };

    //선택된 option number 찾기
    const handleOptionClick = optionNum => {
        const option = options.find(op => op.optionNumber === optionNum);
        setSelectedOption(option.optionNumber);

        //사용자가 선택한 option을 post
        const requestBody = {
            optionNumber: optionNum,
        };

        PostAnswer(dDay, requestBody)
            .then(res => {
                console.log(res.data);
                setIsAnswer(res.data.answer);
                setQuizDescription(res.data.quizDescription);
                if (res.data.answer) {
                    // 답이 맞을 경우, answerContent에 답안 텍스트 저장
                    setAnswerContent(getOptionContent(optionNum));
                } else {
                    // 답이 틀렸을 경우
                    setAnswerContent('');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <Wrapper>
                <OptionBox
                    onClick={() => handleOptionClick(1)}
                    isselected={selectedOption === 1}
                >
                    {getOptionContent(1)}
                </OptionBox>
                <OptionBox
                    onClick={() => handleOptionClick(2)}
                    isselected={selectedOption === 2}
                >
                    {getOptionContent(2)}
                </OptionBox>
                <OptionBox
                    onClick={() => handleOptionClick(3)}
                    isselected={selectedOption === 3}
                >
                    {getOptionContent(3)}
                </OptionBox>
            </Wrapper>
        </>
    );
};

export default Option;

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
