import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import XBtn from '../components/_common/XBtn';
import GreenBorder from '../components/_common/GreenBorder';
import { hover } from '@testing-library/user-event/dist/hover';
import Btn from '../components/_common/Btn';
import Modal from '../components/_common/Modal';

const HelpPage = () => {
    //옵션 선택
    const [selecedVal, setSelectedVal] = useState('');

    const handleSelect = e => {
        setSelectedVal(e.target.value);
    };

    // 모달 버튼 클릭 유무를 저장할 state
    const [showModal, setShowModal] = useState(false);

    const opener = () => setShowModal(true);
    const closer = () => setShowModal(false);

    //제출하기 버튼 눌렀을 시
    const handleSubmit = () => opener();
    //모달창의 닫기 버튼 눌렀을 시
    const clickBtn = () => setShowModal(!showModal);
    console.log(showModal);

    // const handleOptionMouseOver = e => {
    //     e.target.style.backgroundColor = 'lightgreen'; // 마우스 오버 시 배경색을 초록색으로 변경
    // };

    // const handleOptionMouseOut = e => {
    //     e.target.style.backgroundColor = ''; // 마우스 아웃 시 배경색을 초기값으로 변경 (비워둠)
    // };

    return (
        <>
            <Wrapper>
                <Head>
                    <Title>정보수정 문의하기</Title>
                    <XBtn />
                </Head>
                <GreenBorder />
                <SelectOption vlaue={selecedVal} onChange={handleSelect}>
                    <Option value='' selected disabled hidden>
                        어느 구역의 정보 수정이 필요한가요?
                    </Option>
                    <Option value='option1'>
                        건물위치 & 이동경로 & 소요시간 & 셔틀
                    </Option>
                    <Option value='option2'>채플 및 필수교양</Option>
                    <Option value='option3'>학생지원</Option>
                    <Option value='option4'>학교 내 편의시설 (서비스)</Option>
                    <Option value='option5'>
                        교과과정 확인 & 시간표 & 수강신청
                    </Option>
                    <Option value='option6'>공강을 보내기 좋은 장소</Option>
                    <Option value='option7'>이화 소식</Option>
                </SelectOption>
                <Textarea placeholder='잘못된 정보가 있다면 알려주세요.' />
                <BtnStyle>
                    <Btn
                        text={'제출하기'}
                        type={'deepGreen'}
                        onClick={handleSubmit}
                    />
                </BtnStyle>
                {showModal ? (
                    <Modal
                        isModalOpen={showModal}
                        closer={closer}
                        btn={'1'}
                        btntext1={'확인'}
                        maintext={'제출되었습니다. 소중한 정보 감사합니다!'}
                        onClick1={closer}
                    />
                ) : null}
            </Wrapper>
        </>
    );
};

export default HelpPage;

const Wrapper = styled.div`
    margin-top: 12px;
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
