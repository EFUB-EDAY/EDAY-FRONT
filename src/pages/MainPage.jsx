import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../components/_common/Logo';
import { HiOutlineMenu } from 'react-icons/hi';
import Dday from '../components/_common/Dday';
import Btn from '../components/_common/Btn';
import Map from '../components/mainpage/Map';
import SideBar from '../components/mainpage/SideBar';

import infobefore from '../assets/mainpage/info_before.svg';
import infoafter from '../assets/mainpage/info_after.svg';
import background from '../assets/mainpage/background.svg';
import emptymap from '../assets/mainpage/empty_map.svg';

import { GetMember } from '../api/member';

const MainPage = () => {
    const nav = useNavigate();
    const [info, setInfo] = useState(false);
    const [quiz, setQuiz] = useState({});
    const [today, setToday] = useState(0);
    const [isTodayDone, setIsTodayDone] = useState(false);
    const [openRow, setOpenRow] = useState([]);
    const [doneRow, setDoneRow] = useState([]);
    const [closeRow, setCloseRow] = useState([]);
    useEffect(() => {
        GetMember()
            .then(res => {
                setQuiz(res.data.quiz);
                setToday(res.data.profile.dday);
            })
            .catch(err => console.log(err));
        // 테스트 코드
        // setToday(5);
        // setOpenRow(
        //     [{ dDay: 7 }, { dDay: 6 }, { dDay: 5 }].map(row => row.dDay),
        // );
        // setDoneRow([{ dDay: 7 }, { dDay: 6 }].map(row => row.dDay));
        // setCloseRow(
        //     [{ dDay: 4 }, { dDay: 3 }, { dDay: 2 }, { dDay: 1 }].map(
        //         row => row.dDay,
        //     ),
        // );
    }, []);
    useEffect(() => {
        if (quiz.openList) setOpenRow(quiz.openList.map(row => row.dday));
    }, [quiz.openList]);
    useEffect(() => {
        if (quiz.doneList) setDoneRow(quiz.doneList.map(row => row.dday));
    }, [quiz.doneList]);
    useEffect(() => {
        if (quiz.closeList) setCloseRow(quiz.closeList.map(row => row.dday));
    }, [quiz.closeList]);

    // 0 - closeList (src close)
    // 1 - openList (src done)
    // 2 - open, not done (src pink)
    const [dDayState, setDDayState] = useState([
        { dDay: 7, state: 0 },
        { dDay: 6, state: 0 },
        { dDay: 5, state: 0 },
        { dDay: 4, state: 0 },
        { dDay: 3, state: 0 },
        { dDay: 2, state: 0 },
        { dDay: 1, state: 0 },
    ]);

    useEffect(() => {
        openRow.map(item => {
            let copyDDay = [...dDayState];
            copyDDay[dDayState.findIndex(dday => dday.dDay === item)].state = 1;
            setDDayState(copyDDay);
        });
    }, [openRow]);
    useEffect(() => {
        closeRow.map(item => {
            let copyDDay = [...dDayState];
            copyDDay[dDayState.findIndex(dday => dday.dDay === item)].state = 0;
            setDDayState(copyDDay);
        });
    }, [closeRow]);
    useEffect(() => {
        if (doneRow.includes(today)) setIsTodayDone(true);
        openRow
            .filter(item => {
                return !doneRow.includes(item);
            })
            .map(item => {
                if (!isTodayDone) {
                    let copyDDay = [...dDayState];
                    copyDDay[
                        dDayState.findIndex(dday => dday.dDay === item)
                    ].state = 2;
                    setDDayState(copyDDay);
                }
            });
    }, [doneRow]);
    useEffect(() => {}, [isTodayDone]);

    useEffect(() => {
        // console.log(dDayState);
    });

    const [isSidebar, setIsSidebar] = useState(false);
    const opener = () => setIsSidebar(true);
    const closer = () => setIsSidebar(false);

    return (
        <Wrapper>
            <HeaderContainer>
                <div className='inner'>
                    <Logo type='main' />
                    <HiOutlineMenu
                        size='10%'
                        color='var(--green3)'
                        onClick={opener}
                    />
                </div>
                <div className='text'>그대가 바라는 미래, 이화</div>
            </HeaderContainer>
            <MapContainer>
                <InfoContainer>
                    <img src={info ? infoafter : infobefore} />
                    <div className='click' onClick={() => setInfo(!info)} />
                </InfoContainer>
                <BackImg src={background} />
                <MapImg src={emptymap} />
                {today && (
                    <Map
                        today={today}
                        isTodayDone={isTodayDone}
                        dDayState={dDayState}
                    />
                )}
            </MapContainer>
            {today && (
                <FooterContainer>
                    <Dday type='main' />
                    <div style={{ height: '10px' }} />
                    <Btn
                        type='deepGreen'
                        text='오늘의 퀴즈 풀기'
                        onClick={() =>
                            !isTodayDone
                                ? nav(`/quiz/${today}`)
                                : nav(`/info/${today}`)
                        }
                    />
                </FooterContainer>
            )}
            {isSidebar ? (
                <SideBar
                    isOpen={isSidebar}
                    closer={closer}
                    dDayState={dDayState}
                />
            ) : null}
        </Wrapper>
    );
};

export default MainPage;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .partial-map {
        opacity: 0;
        position: absolute;
        z-index: 10;
    }
`;
const HeaderContainer = styled.div`
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    .inner {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 35px;
    }
    .text {
        font-family: 'NanumBarunpen';
        font-size: 16px;
        color: var(--green3);
        margin: 10px 0 20px 0;
    }
`;
const InfoContainer = styled.div`
    position: absolute;
    z-index: 20;
    margin-right: 90px;
    top: 20px;
    .click {
        position: absolute;
        top: 39px;
        right: 10px;
        width: 60px;
        height: 60px;
    }
`;
const MapContainer = styled.div`
    position: relative;
    width: 100%;
    height: 560px;
    display: flex;
    justify-content: center;
`;
const BackImg = styled.img`
    position: absolute;
    z-index: -1;
    width: 390px;
    height: 700px;
`;
const MapImg = styled.img`
    position: absolute;
    z-index: 0;
    width: 347px;
    height: 409px;
    margin: 0 auto;
    top: 75px;
`;
const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;
