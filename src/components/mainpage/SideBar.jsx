import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../_common/Logo';
import Profile from '../_common/Profile';
import GreenBorder from '../_common/GreenBorder';
import StampMenu from './StampMenu';
import { CgClose } from 'react-icons/cg';
import { BsChevronRight } from 'react-icons/bs';

import { GetMember } from '../../api/member';

const SideBar = props => {
    const { isOpen, closer, dDayState } = props;
    const nav = useNavigate();
    useEffect(() => {
        document.body.style.cssText = `
              position: fixed;
              top: -${window.scrollY}px;
              overflow-y: scroll;
              width: 100%;`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);

    const [fadeout, setFadeout] = useState(false);
    const [member, setMember] = useState({});
    const [profile, setProfile] = useState('성이름');
    useEffect(() => {
        setFadeout(false);
        GetMember()
            .then(res => {
                console.log(res);
                // setMember(res.data);
                // setProfile(res.data.profile);
            })
            .catch(err => console.log(err));
        setProfile({
            nickname: '홍길동',
            profileImageUrl: 'example.jpg',
            level: 2,
            dDay: 5,
            titleName: '수강신청 첫날 올클한 이화인',
        });
    }, []);
    const fadeOut = () => {
        setFadeout(true);
        setTimeout(() => {
            closer();
            setFadeout(false);
        }, 300);
    };
    return (
        <Wrapper>
            {isOpen ? (
                <Container className={fadeout ? 'fadeout' : null}>
                    <Background className='background' onClick={fadeOut} />
                    {profile && (
                        <ModalBlock className='modal-block'>
                            <Inner style={{ marginBottom: '15px' }}>
                                <Flex style={{ marginBottom: '20px' }}>
                                    <Logo type='sidebar' />
                                    <CgClose
                                        size='30'
                                        color='var(--white)'
                                        onClick={fadeOut}
                                    />
                                </Flex>
                                <Flex>
                                    <Profile
                                        type='white'
                                        userName={profile.nickname}
                                    />
                                    <Level>{`Lv.${profile.level}`}</Level>
                                </Flex>
                            </Inner>
                            <GreenBorder text={profile.titleName} type='main' />
                            <Right onClick={() => nav('/mypage')}>
                                마이페이지
                                <BsChevronRight
                                    size='14'
                                    color='var(--white)'
                                />
                            </Right>
                            {dDayState && (
                                <StampMenu
                                    dDayState={dDayState}
                                    today={profile.dDay}
                                />
                            )}
                            <Footer>
                                <div
                                    className='text1'
                                    onClick={() => nav('/help')}
                                >
                                    정보 수정 문의하기
                                </div>
                                <div className='border' />
                                <a
                                    className='text2'
                                    href='https://github.com/EFUB'
                                    target='_blank'
                                >
                                    EFUB
                                </a>
                                <br />
                                <a
                                    className='text2'
                                    href='https://github.com/EFUB-EDAY'
                                    target='_blank'
                                >
                                    2023_SWS_TEAM2
                                </a>
                            </Footer>
                        </ModalBlock>
                    )}
                </Container>
            ) : null}
        </Wrapper>
    );
};

export default SideBar;

const Wrapper = styled.div`
    position: fixed;
    width: 100vw;
    z-index: 100;
    display: flex;
    justify-content: center;
    .fadeout {
        .background {
            animation: modal-bg-disappear 0.3s;
            @keyframes modal-bg-disappear {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                }
            }
        }
        .modal-block {
            animation: modal-disappear 0.3s;
            @keyframes modal-disappear {
                from {
                    opacity: 1;
                    margin-right: 0;
                }
                to {
                    opacity: 0;
                    margin-right: -280px;
                }
            }
        }
    }
`;
const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 100;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    @media (min-width: 576px) {
        width: 390px;
    }
`;
const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    animation: modal-bg-show 0.3s;
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @media (min-width: 576px) {
        width: 390px;
    }
`;
const ModalBlock = styled.div`
    position: absolute;
    right: 0;
    width: 280px;
    height: 100vh;
    background-color: var(--green3);
    animation: modal-show 0.3s;
    @keyframes modal-show {
        from {
            opacity: 0;
            margin-right: -280px;
        }
        to {
            opacity: 1;
            margin-right: 0;
        }
    }
    @media (min-width: 576px) {
    }
`;
const Inner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 20px;
`;
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Level = styled.div`
    background-color: var(--green2);
    color: var(--black);
    display: flex;
    width: 40px;
    height: 28px;
    padding: 0 8px;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 500;
`;
const Right = styled.div`
    margin: 15px 18px 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: var(--white);
    font-size: 14px;
    font-weight: 500;
    svg {
        margin-left: 8px;
    }
`;
const Footer = styled.div`
    position: absolute;
    bottom: 0;
    background-color: var(--gray1);
    width: 100%;
    height: 160px;
    .text1 {
        color: var(--lessblack);
        font-weight: 600;
        padding: 15px 0 0 15px;
    }
    .border {
        width: 100%;
        border-bottom: 4px solid var(--green3);
        margin: 10px 0;
    }
    .text2 {
        color: var(--lessblack);
        text-decoration: none;
        font-size: 12px;
        font-weight: 500;
        padding-left: 15px;
    }
`;
