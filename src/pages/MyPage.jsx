import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetTitle } from '../api/mypage';
import { GetMember } from '../api/member';

import XBtn from '../components/_common/XBtn';
import GreenBorder from '../components/_common/GreenBorder';
import Profile from '../components/_common/Profile';
import Modal from '../components/_common/Modal';
import TitleImg from '../components/mypage/TitleImg';

// 이미지
// import d7 from '../assets/mypage/d7.svg';
// import d6 from '../assets/mypage/d6.svg';
// import d5 from '../assets/mypage/d5.svg';
// import d4 from '../assets/mypage/d4.svg';
// import d3 from '../assets/mypage/d3.svg';
// import d2 from '../assets/mypage/d2.svg';
// import d1 from '../assets/mypage/d1.svg';

import pd7 from '../assets/mypage/pd7.svg';
import pd6 from '../assets/mypage/pd6.svg';
import pd5 from '../assets/mypage/pd5.svg';
import pd4 from '../assets/mypage/pd4.svg';
import pd3 from '../assets/mypage/pd3.svg';
import pd2 from '../assets/mypage/pd2.svg';
import pd1 from '../assets/mypage/pd1.svg';

const byeModal = () => {
    return (
        <>
            <p>탈퇴 완료!</p>
            <p>E-day를 이용해주셔서 감사합니다.</p>
        </>
    );
};

const MyPage = () => {
    //탈퇴하기 모달
    const [isModalOpen, setIsModalOpen] = useState(false);
    const opener = () => setIsModalOpen(true);
    const closer = () => setIsModalOpen(false);

    //탈퇴 확인용 모달
    const [isByebye, setIsByebye] = useState(false);
    const opener3 = () => setIsByebye(true);
    const closer3 = () => setIsByebye(false);

    //로그아웃 모달
    const [isLogout, setIsLogout] = useState(false);
    const opener2 = () => setIsLogout(true);
    const closer2 = () => setIsLogout(false);

    //탈퇴 함수 (Delete)
    const yes = () => {
        opener3();
        closer();

        console.log('탈퇴 함수');
    };

    const navigate = useNavigate();
    const goMain = () => {
        navigate(`/`);
    };
    const [isImgOpened, setIsImgOpened] = useState(Array(8).fill(false));

    // 배열의 특정 인덱스의 값을 변경하는 함수
    const setIsImgOpenedAtIndex = (index, value) => {
        setIsImgOpened(prevState => {
            const newState = [...prevState];
            newState[index] = value;
            return newState;
        });
    };

    const imgopener = index => {
        setIsImgOpenedAtIndex(index, true);
    };

    const imgcloser = index => {
        setIsImgOpenedAtIndex(index, false);
    };

    //칭호 관리
    // const [isActive, setIsActive] = useState(Array(8).fill(true));

    // //이미지 열렸는지 여부
    // const [isImgOpened, setIsImgOpened] = useState(Array(8).fill(false));

    // //칭호 배열의 특정 인덱스의 값을 변경하는 함수
    // const setIsImgOpenedAtIndex = (index, value) => {
    //     setIsImgOpened(prevState => {
    //         const newState = [...prevState];
    //         newState[index] = value;
    //         return newState;
    //     });
    // };

    // const imgopener = index => {
    //     setIsImgOpenedAtIndex(index, true);
    // };

    // const imgcloser = index => {
    //     setIsImgOpenedAtIndex(index, false);
    // };

    // const [isActive_7, setIsActive_7] = useState(true);

    // const [isImgOpened_7, setIsImgOpened_7] = useState(false);
    // const imgopener_7 = setIsImgOpened_7(true);
    // const imgcloser_7 = setIsImgOpened_7(false);

    const [title, setTitle] = useState('');
    useEffect(() => {
        GetTitle()
            .then(res => {
                console.log(res.data);
                setTitle(res.data.profile);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <Wrapper>
                <Head>
                    <Profile userName={'이화연'} />

                    <XBtn onClick={goMain} />
                </Head>
                <GreenBorder />
                <Container>
                    <Title>획득한 칭호</Title>
                    {title.nickname}
                    <Img_Day>
                        <TitleImg
                            // smallImg={d7}
                            bigimg={pd7}
                            day={7}
                            isActive={true}
                            isImgOpened={isImgOpened[0]}
                            onClick={() => imgopener(0)}
                            closer={() => imgcloser(0)}
                        />
                        <TitleImg
                            // smallImg={d6}
                            bigimg={pd6}
                            day={6}
                            isActive={true}
                            isImgOpened={isImgOpened[1]}
                            onClick={() => imgopener(1)}
                            closer={() => imgcloser(1)}
                        />
                        <TitleImg
                            // smallImg={d5}
                            bigimg={pd5}
                            day={5}
                            isActive={true}
                            isImgOpened={isImgOpened[2]}
                            onClick={() => imgopener(2)}
                            closer={() => imgcloser(2)}
                        />
                    </Img_Day>
                    <Img_Day>
                        <TitleImg
                            // smallImg={d4}
                            bigimg={pd4}
                            day={4}
                            isActive={true}
                            isImgOpened={isImgOpened[3]}
                            onClick={() => imgopener(3)}
                            closer={() => imgcloser(3)}
                        />
                        <TitleImg
                            // smallImg={d3}
                            bigimg={pd3}
                            day={3}
                            isActive={true}
                            isImgOpened={isImgOpened[4]}
                            onClick={() => imgopener(4)}
                            closer={() => imgcloser(4)}
                        />
                        <TitleImg
                            // smallImg={d2}
                            bigimg={pd2}
                            day={2}
                            isActive={true}
                            isImgOpened={isImgOpened[5]}
                            onClick={() => imgopener(5)}
                            closer={() => imgcloser(5)}
                        />
                    </Img_Day>

                    <TitleImg
                        // smallImg={d1}
                        bigimg={pd1}
                        day={1}
                        isActive={true}
                        isImgOpened={isImgOpened[6]}
                        onClick={() => imgopener(6)}
                        closer={() => imgcloser(6)}
                    />
                </Container>
            </Wrapper>

            <Footer>
                <Text onClick={opener2}>로그아웃</Text>

                {isLogout ? (
                    <Modal
                        isModalOpen={isLogout}
                        closer={closer2}
                        maintext='로그아웃 완료!'
                    />
                ) : null}

                <Text onClick={opener}>회원 탈퇴하기</Text>
                {isModalOpen ? (
                    <Modal
                        isModalOpen={isModalOpen}
                        closer={closer}
                        btn='2'
                        btntext1='아니요'
                        btntext2='네'
                        maintext='정말 탈퇴하시겠습니까?'
                        onClick1={closer}
                        onClick2={yes}
                    />
                ) : null}

                {isByebye ? (
                    <Modal
                        isModalOpen={isByebye}
                        closer={closer3}
                        maintext={byeModal()}
                    />
                ) : null}
            </Footer>
        </>
    );
};

export default MyPage;

const Wrapper = styled.div`
    margin-top: 12px;
    margin-right: 24px;
    margin-left: 24px;
    /* text-align: center; */
`;

const Title = styled.p`
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 8px;
`;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`;

//칭호 이미지 묶여있는 컨테이너
const Container = styled.div`
    margin-top: 40px;
    margin-left: 48px;
    margin-right: 2px;
    margin-bottom: 85px;
    /* border: 1px solid gray; */
    padding-left: 0px;
    padding-right: 0px;
`;

const Footer = styled.div`
    background-color: #37ae75;
    color: white;
    height: 180px;
    padding-top: 16px;
`;

const Text = styled.p`
    margin-left: 24px;
    margin-bottom: 10px;

    font-weight: 600;
    font-size: 16px;
`;

const Img_Day = styled.div`
    display: flex;
`;
