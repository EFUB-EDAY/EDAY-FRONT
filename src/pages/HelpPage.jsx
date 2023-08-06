import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { help } from '../api/query';
import { GetMember } from '../api/member';

import XBtn from '../components/_common/XBtn';
import GreenBorder from '../components/_common/GreenBorder';
import { hover } from '@testing-library/user-event/dist/hover';
import Btn from '../components/_common/Btn';
import Modal from '../components/_common/Modal';

const HelpPage = () => {
    // 모달 버튼 클릭 유무를 저장할 state
    const [showModal, setShowModal] = useState(false);

    const opener = () => setShowModal(true);
    const closer = () => {
        setShowModal(false);
        setQuery('');
        setPostDday('');
    };

    //제출하기 버튼 눌렀을 시 내용 POST
    const [query, setQuery] = useState('');

    //옵션으로 선택된 dDay
    const [postdDay, setPostDday] = useState();

    useEffect(() => {
        console.log(postdDay); // 변경된 postdDay 값을 찍어냄
    }, [postdDay]);

    //옵션 선택 함수
    const handleSelect = e => {
        setPostDday(e.target.value);
        //console.log(postdDay)
    };

    //제출하기 버튼
    const handleSubmit = async e => {
        opener();

        e.preventDefault();

        try {
            const res = await help(query, postdDay);
            console.log(res);
        } catch (err) {
            console.error(err);
        }
    };

    const modalText = () => {
        return (
            <>
                <p>제출되었습니다.</p>
                <p>소중한 정보 감사합니다!</p>
            </>
        );
    };

    const navigate = useNavigate();

    const goMain = () => {
        navigate(`/`);
    };
    return (
        <>
            <Wrapper>
                <Head>
                    <Title>정보수정 문의하기</Title>
                    <XBtn onClick={goMain} />
                </Head>
                <GreenBorder />
                <SelectOption value={postdDay} onChange={handleSelect}>
                    <Option value='' selected disabled hidden>
                        어느 구역의 정보 수정이 필요한가요?
                    </Option>
                    <Option value={7}>
                        건물위치 & 이동경로 & 소요시간 & 셔틀
                    </Option>
                    <Option value={6}>채플 및 필수교양</Option>
                    <Option value={5}>학생지원</Option>
                    <Option value={4}>학교 내 편의시설 (서비스)</Option>
                    <Option value={3}>교과과정 확인 & 시간표 & 수강신청</Option>
                    <Option value={2}>공강을 보내기 좋은 장소</Option>
                    <Option value={1}>이화 소식</Option>
                </SelectOption>

                <form onSubmit={handleSubmit}>
                    <Textarea
                        placeholder='잘못된 정보가 있다면 알려주세요.'
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />

                    <BtnStyle>
                        <Btn
                            text={'제출하기'}
                            type={'deepGreen'}
                            onClick={handleSubmit}
                        />
                    </BtnStyle>
                </form>

                {showModal ? (
                    <Modal
                        isModalOpen={showModal}
                        closer={closer}
                        btn={'1'}
                        btntext1={'확인'}
                        maintext={modalText()}
                        onClick1={closer}
                    />
                ) : null}
            </Wrapper>
        </>
    );
};

export default HelpPage;

const Wrapper = styled.div`
    margin-top: 57px;
    margin-right: 24px;
    margin-left: 24px;
    text-align: center;
`;

const Title = styled.p`
    font-family: NanumBarunpen;
    font-weight: 700;
    font-size: 20px;
`;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 55px;
`;

const SelectOption = styled.select`
    margin-top: 8px;
    width: 342px;
    border: none;
    background-color: var(--gray1);
    font-family: Pretendard;
    font-weight: 500;
    font-size: 12px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 16px;
    border-radius: 4px 4px 0 0;
    margin-bottom: 44px;
    outline: none;
`;

const Option = styled.option`
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: Pretendard;
    font-weight: 500;
    font-size: 12px;
    padding-left: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    background-color: var(--white);
    border: none;

    &:hover {
        background: lightgreen; /* 마우스 오버 시 배경색을 초록색으로 변경 */
    }
`;

const Textarea = styled.textarea`
    width: 310px;
    height: 328px;
    background-color: #eaf3e7;
    padding: 16px 16px 16px 16px;
    resize: none;
    border: none;
    outline: none;

    &::placeholder {
        color: #37ae75;
    }

    margin-bottom: 91px;
`;

const BtnStyle = styled.div`
    margin-bottom: 130px;
`;
