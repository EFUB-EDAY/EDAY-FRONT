import React, { useState } from 'react';
import { styled } from 'styled-components';

import InfoContent from '../../_common/InfoContent';
import Title from '../../_common/Title';
import GreenBorder from '../../_common/GreenBorder';
import Img from '../../_common/Img';
import { useBodyScrollLock } from '../useBodyScrollLock';

// 이미지
import lib_1f from '../../../assets/infopage/info3/lib_1f.svg';
import lib_34f from '../../../assets/infopage/info3/lib_34f.svg';
import lib_sgsg from '../../../assets/infopage/info3/lib_sgsg.svg';
import lib_5f from '../../../assets/infopage/info3/lib_5f.svg';

const Info3Content_1 = () => {
    const [isImgOpened, setIsImgOpened] = useState(Array(5).fill(false));
    const { lockScroll, openScroll } = useBodyScrollLock();

    // 배열의 특정 인덱스의 값을 변경하는 함수
    const setIsImgOpenedAtIndex = (index, value) => {
        setIsImgOpened(prevState => {
            const newState = [...prevState];
            newState[index] = value;
            return newState;
        });
    };

    const handleOpen = index => {
        lockScroll();
        setIsImgOpenedAtIndex(index, true);
    };

    const handleClose = index => {
        openScroll();
        setIsImgOpenedAtIndex(index, false);
    };

    return (
        <div>
            <Title num={'1.'} title={'중앙 도서관'} />
            <GreenBorder />

            <Text_top>
                <InfoContent
                    type={'top'}
                    text={'1층 시청각실'}
                    NoRightMargin={true}
                />
                <ImgWrapper>
                    <Img
                        onClick={() => handleOpen(0)}
                        closer={() => handleClose(0)}
                        img={lib_1f}
                        isImgOpened={isImgOpened[0]}
                    />
                </ImgWrapper>
            </Text_top>

            <InfoContent
                type={'smallDot'}
                text={
                    '왓챠, 웨이브 등의 OTT 서비스와 VR 체험, 영화 DVD, 블루레이와 IPTV 등 모두 시청 가능한 공간입니다.'
                }
            />
            <Text_Img>
                <InfoContent
                    text={'3층, 4층 창의학습실'}
                    NoRightMargin={true}
                />
                <Img
                    onClick={() => handleOpen(1)}
                    closer={() => handleClose(1)}
                    img={lib_34f}
                    isImgOpened={isImgOpened[1]}
                />
            </Text_Img>
            <InfoContent
                type={'smallDot'}
                text={
                    '팀 프로젝트, 그룹 스터디를 위한 협업 공간으로 노트북, 미러링 모니터, 화이트보드 등을 이용할 수 있습니다.'
                }
            />

            <Text_Img>
                <InfoContent
                    text={'4층 소곤소곤 라운지'}
                    NoRightMargin={true}
                />
                <Img
                    onClick={() => handleOpen(2)}
                    closer={() => handleClose(2)}
                    img={lib_sgsg}
                    isImgOpened={isImgOpened[2]}
                />
            </Text_Img>
            <InfoContent
                type={'smallDot'}
                text={'예약 없이 자유롭게 토론 및 협업 가능합니다.'}
            />
            <Text_Img>
                <InfoContent text={'5층 서가'} NoRightMargin={true} />
                <Img
                    onClick={() => handleOpen(3)}
                    closer={() => handleClose(3)}
                    img={lib_5f}
                    isImgOpened={isImgOpened[3]}
                />
            </Text_Img>
            <InfoContent
                type={'smallDot'}
                text={
                    '탁트인 전경이 아름다운 곳으로 조용한 분위기 속에서 밀린 과제를 끝내보아요!.'
                }
            />

            {/* 2번 */}
            <Title num={'2.'} title={'음악도서관'} />
            <GreenBorder />
            <InfoContent type={'top'} text={'위치 : 음악관 2층'} />
            <InfoContent text={'이용시간'} />
            <InfoContent
                text={
                    '학기 중 : 월요일~목요일 09:00-19:00 / 금요일 09:00-17:00'
                }
                noMargin={true}
            />
            <InfoContent text={'방학 중 : 평일 09:00-17:00'} noMargin={true} />
            <InfoContent text={'※ 평일 12-13시, 토, 일, 공휴일 휴관'} />
            <InfoContent
                text={
                    '[음악감상코너] 학기 중/방학 중 : 월요일~금요일 09:00-17:00'
                }
            />
            <InfoContent text={'소장자료'} />
            <InfoContent
                text={'음악 전 분야의 단행본, 정기간행물, 비도서자료'}
                type={'smallDot'}
                noMargin={true}
            />
            <InfoContent
                text={'이화여자대학교 음악 분야 석박사 학위논문'}
                type={'smallDot'}
                noMargin={true}
            />
            <InfoContent text={'다양한 형태의 악보 자료'} type={'smallDot'} />

            {/* 3번 */}
            <Title num={'3.'} title={'신학도서관'} />
            <GreenBorder />
            <InfoContent text={'위치 : 대학교회 1층'} type={'top'} />
            <InfoContent text={'이용시간'} />
            <InfoContent
                text={'학기 중 : 평일 09:00-20:30 (수요일 09:00-17:00)'}
                noMargin={true}
            />
            <InfoContent text={'방학 중 : 평일 09:00-17:00'} noMargin={true} />
            <InfoContent text={'※ 평일 12-13시, 토, 일, 공휴일 휴관'} />
            <InfoContent text={'소장자료'} />
            <InfoContent
                text={'신학 관련 단행본, 정기간행물, 비도서자료'}
                type={'smallDot'}
                noMargin={true}
            />
            <InfoContent
                text={'이화여자대학교 신학 관련 학위논문'}
                type={'smallDot'}
                noMargin={true}
            />
            <InfoContent
                text={'성경(언어별, 판본별), 성서주석서, 설교집'}
                type={'smallDot'}
            />

            {/* 4번 */}
            <Title num={'4.'} title={'공학도서관'} />
            <GreenBorder />
            <InfoContent text={'위치 : 신공학관 2층'} type={'top'} />
            <InfoContent text={'이용시간'} />
            <InfoContent
                text={'학기 중 / 방학 중 : 평일 09:00-17:00'}
                noMargin={true}
            />
            <InfoContent text={'※ 평일 12-13시, 토, 일요일, 공휴일 휴관'} />
            <InfoContent text={'소장자료'} />
            <InfoContent
                text={'공학 관련 단행본, 정기간행물, 비도서자료'}
                noMargin={true}
                type={'smallDot'}
            />
            <InfoContent
                text={'이화여자대학교 공학 분야 석박사 학위논문'}
                type={'smallDot'}
            />

            {/* 5번 */}
            <Title num={'5.'} title={'법학도서관'} />
            <GreenBorder />
            <InfoContent text={'위치 : 중앙도서관 5층'} type={'top'} />
            <InfoContent text={'이용시간'} />
            <InfoContent text={'학기 중 : 평일 09:00-22:00'} noMargin={true} />
            <InfoContent
                text={
                    '방학 중 : 평일 09:00-19:00(하계) / 평일 09:00-17:00(동계)'
                }
                noMargin={true}
            />
            <InfoContent text={'토요일 : 09:00-15:00'} noMargin={true} />
            <InfoContent text={'※ 일요일, 공휴일 휴관'} />
            <InfoContent text={'소장자료'} />
            <InfoContent
                text={'법학 관련 단행본, 정기간행물, 비도서자료'}
                type={'smallDot'}
                noMargin={true}
            />
            <InfoContent
                text={'이화여자대학교 법학 관련 학위논문'}
                type={'smallDot'}
                noMargin={true}
            />
            <InfoContent
                text={'법전, 법령집, 판례집, 법률신문'}
                type={'smallDot'}
            />

            <InfoContent text={'  '} />
        </div>
    );
};

export default Info3Content_1;

//top에 이미지 들어가야할 때 글자랑 이미지랑 묶기
const Text_top = styled.div`
    display: flex;
    align-items: center;
`;

//그외 이미지 들어갈때 글자랑 이미지랑 묶기
const Text_Img = styled.div`
    display: flex;
`;

//맨 처음 이미지 위치 조정
const ImgWrapper = styled.div`
    margin-bottom: 5px;
`;
