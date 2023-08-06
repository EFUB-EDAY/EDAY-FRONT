import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { GetTitle } from '../api/title';
import { Logout } from '../api/auth';

import XBtn from '../components/_common/XBtn';
import GreenBorder from '../components/_common/GreenBorder';
import Profile from '../components/_common/Profile';
import Modal from '../components/_common/Modal';
import TitleImg from '../components/mypage/TitleImg';

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

    useEffect(() => {
        isLogout && setTimeout(() => Logout(), 300);
    }, [isLogout]);

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

    //모달 이미지 오픈 여부
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

    // 칭호 관련
    const [title, setTitle] = useState(''); // 유저 프로필
    const [titleList, setTitleList] = useState([]);
    const [titleImg, setTitleImg] = useState([]); // 획득한 칭호 작은 이미지
    const [isGetTitle, setIsGetTitle] = useState([]); // 칭호 획득 여부
    const [titleBigImgs, setTitleBigImgs] = useState([]); // 칭호 큰 이미지

    useEffect(() => {
        GetTitle()
            .then(res => {
                setTitle(res.data.profile);
                setTitleList(res.data.titleList);
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        // 획득한 칭호 작은 이미지
        setTitleImg(
            titleList.map(it => (it.getTitle ? it.titleThumbnailUrl : null)),
        );

        // 칭호 획득 여부
        setIsGetTitle(titleList.map(it => (it.getTitle ? true : false)));

        // 칭호 큰 이미지
        setTitleBigImgs(titleList.map(it => it?.titleImageUrl));
    }, [titleList]);

    return (
        <>
            <Wrapper>
                <Head>
                    <Profile userName={title?.nickname} />

                    <XBtn onClick={goMain} />
                </Head>
                <GreenBorder />
                <Container>
                    <Title>획득한 칭호</Title>
                    {/* {titleName[5]} */}

                    <ImgDay>
                        <TitleImg
                            smallImg={titleImg[0]}
                            bigimg={titleBigImgs[0]}
                            day={7}
                            isActive={isGetTitle[0]}
                            isImgOpened={isImgOpened[0]}
                            onClick={() => imgopener(0)}
                            closer={() => imgcloser(0)}
                        />
                        <TitleImg
                            smallImg={titleImg[1]}
                            bigimg={titleBigImgs[1]}
                            day={6}
                            isActive={isGetTitle[1]}
                            isImgOpened={isImgOpened[1]}
                            onClick={() => imgopener(1)}
                            closer={() => imgcloser(1)}
                        />
                        <TitleImg
                            smallImg={titleImg[2]}
                            bigimg={titleBigImgs[2]}
                            day={5}
                            isActive={isGetTitle[2]}
                            isImgOpened={isImgOpened[2]}
                            onClick={() => imgopener(2)}
                            closer={() => imgcloser(2)}
                        />
                    </ImgDay>
                    <ImgDay>
                        <TitleImg
                            smallImg={titleImg[3]}
                            bigimg={titleBigImgs[3]}
                            day={4}
                            isActive={isGetTitle[3]}
                            isImgOpened={isImgOpened[3]}
                            onClick={() => imgopener(3)}
                            closer={() => imgcloser(3)}
                        />

                        <TitleImg
                            smallImg={titleImg[4]}
                            bigimg={titleBigImgs[4]}
                            day={3}
                            isActive={isGetTitle[4]}
                            isImgOpened={isImgOpened[4]}
                            onClick={() => imgopener(4)}
                            closer={() => imgcloser(4)}
                        />

                        <TitleImg
                            smallImg={titleImg[5]}
                            bigimg={titleBigImgs[5]}
                            day={2}
                            isActive={isGetTitle[5]}
                            isImgOpened={isImgOpened[5]}
                            onClick={() => imgopener(5)}
                            closer={() => imgcloser(5)}
                        />
                    </ImgDay>

                    <TitleImg
                        smallImg={titleImg[6]}
                        bigimg={titleBigImgs[6]}
                        day={1}
                        isActive={isGetTitle[6]}
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
    margin-top: 57px;
    margin-right: 24px;
    margin-left: 24px;
    /* text-align: center; */
`;

const Title = styled.p`
    font-weight: 500;

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
    width: 100%;
`;

const Text = styled.p`
    margin-left: 24px;
    margin-bottom: 10px;

    font-weight: 600;
    font-size: 16px;
`;

const ImgDay = styled.div`
    display: flex;
`;
