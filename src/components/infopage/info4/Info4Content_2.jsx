import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { styled } from 'styled-components';

import GreenBorder from '../../_common/GreenBorder';
import InfoContent from '../../_common/InfoContent';
import Title from '../../_common/Title';
import XBtn from '../../_common/XBtn';
import Img from '../../_common/Img';

import { useBodyScrollLock } from '../useBodyScrollLock';

// 이미지
import englishlounge from '../../../assets/infopage/info4/englishlounge.svg';

const Info4Content_2 = () => {
    const [isImgOpened, setIsImgOpened] = useState(false);

    const { lockScroll, openScroll } = useBodyScrollLock();

    const handleOpen = () => {
        lockScroll();
        setIsImgOpened(true);
    };

    const handleClose = () => {
        openScroll();
        setIsImgOpened(false);
    };

    return (
        <div>
            <Title num={'1.'} title={'학교 이메일'} />
            <GreenBorder />
            <Link
                to='https://www.ewha.ac.kr/ewha/life/software.do'
                style={{ color: '#369149' }}
            >
                {' '}
                <InfoContent text={'//공용소프트웨어//'} type={'top'} />
            </Link>
            <InfoContent
                type={'smallDot'}
                text={
                    '학교 이메일을 사용하기만 해도 각종 논문 사이트, Notion, 전자도서관 등 엄청난 혜택들이 주어지는데요, 이메일은 한 번 계정을 만들면 평생 사용할 수 있어요.'
                }
            />
            <InfoContent
                type={'smallDot'}
                text={
                    '교내 와이파이에서 학교 메일로 office 365, 한글 프로그램 등을 다운받아서 언제든 사용할 수 있어요! '
                }
            />
            <InfoContent
                type={'smallDot'}
                text={
                    '교내 컴퓨터에는 Adobe가 설치되어 있어서 이화 메일만 있다면 무료로 사용할 수 있어요.'
                }
            />
            <InfoContent
                type={'smallDot'}
                text={'Microsoft OneDrive도 1TB 용량을 지원한답니다.'}
            />
            {/* 2번 */}
            <Title num={'2.'} title={'학생증 발급'} />
            <GreenBorder />
            <Link
                to='https://www.ewha.ac.kr/ewha/life/student-id.do'
                style={{ color: '#369149' }}
            >
                {' '}
                <InfoContent text={'//학생증 발급//'} type={'top'} />
            </Link>
            <InfoContent
                type={'smallDot'}
                text={
                    '   이대생은 입학 초, 체크카드 기능의 학생증을 발급 받아요. 원하는 사진을 학생증에 넣으려면 학생 서비스센터에서 직접 신청해야 해요. 그렇지 않으면 유레카에 등록된 사진으로 발급되거나 수능 원서 사진이 들어갑니다.'
                }
            />
            <InfoContent
                type={'smallDot'}
                text={
                    '학생증을 분실하면 5,000원을 내고 재발급 받아야 해요. 건물 출입 및 일부 수업의 출석 체크 등 다양한 목적으로 사용되기 때문에 항상 소지하도록 합시다!'
                }
            />
            <InfoContent
                type={'smallDot'}
                text={
                    '만약 교환학생이나 방문학생을 생각 중이라면 주목! 국제 학생증도 발급받을 수 있습니다. 수수료가 낮아서 외국에서 부담 없이 사용할 수 있어요.'
                }
            />
            {/* 3번 */}
            <Title num={'3.'} title={'교내 식당'} />
            <GreenBorder />
            <Link
                to='https://www.ewha.ac.kr/ewha/life/restaurant.do'
                style={{ color: '#369149' }}
            >
                {' '}
                <InfoContent text={'//교내 식당//'} type={'top'} />
            </Link>
            <InfoContent
                type={'smallDot'}
                text={
                    'I-House 식당 : 기숙사에 위치한 식당입니다. 천 원의 아침밥을 제공하는 곳이에요. 천 원의 아침밥은 150명 선착순으로 제공되고, 금요일에는 운영하지 않아요.'
                }
            />
            <InfoContent
                type={'smallDot'}
                text={
                    '진선미관 식당 : 포관이나 종과에서 가까운 진선미관! 이화가배당도 운영하고 있으니 방문해 보세요.'
                }
            />
            <InfoContent
                type={'smallDot'}
                text={
                    '한우리집 식당 : 한우리집 기숙사에 위치한 식당입니다. 한식과 일품식을 제공하고 있으며 매주 다양한 식단이 제공돼요.'
                }
            />
            <InfoContent
                type={'smallDot'}
                text={
                    '공대 식당 : 신공학관 지하 2층에 위치하고 있어 공대생들이 이용하기 편리해요. 학기 중에는 저녁 식사 및 간식(라면)도 운영하고 있어요.'
                }
            />
            <InfoContent
                type={'smallDot'}
                text={
                    '헬렌관 : 한식 외 양식, 덮밥, 분식, take-out 등 메뉴 선택지가 다양하고 양질의 메뉴를 제공해요.'
                }
            />
            <InfoContent
                type={'smallDot'}
                text={`E-House 식당 : 'Health is everything' 이라는 컨셉을 가진  E-House 기숙사 식당은 건강한 학식을 제공해요.`}
            />

            {/* 4번 */}
            <Title num={'4.'} title={'기타 서비스'} />
            <GreenBorder />
            <Link
                to='https://www.ewha.ac.kr/ewha/life/etc-service.do'
                style={{ color: '#369149' }}
            >
                {' '}
                <InfoContent text={'//기타 서비스//'} type={'top'} />
            </Link>
            <InfoContent
                type={'smallDot'}
                text={
                    '학교 와이파이를 사용하기 위해서는 ID에 학번, 비밀번호로 개인의 유레카 비밀번호를 입력하면 됩니다!'
                }
            />
            <InfoContent
                type={'smallDot'}
                text={
                    '분실물/습득 센터 운영 : 분실물을 발견했을 때 학생서비스센터(ECC B303호)로 맡겨주세요. 분실물은 6개월 동안 보관되니 기간 내에 찾아가도록 합시다.'
                }
            />
            <InfoContent
                type={'smallDot'}
                text={
                    'ECC 사물함 : 노트북이나 전공책 들고 다니기 힘든 벗들은 매 학기 ECC 사물함을 신청해서 쓸 수 있어요. 어깨 가볍게 학교 다니자고요~'
                }
            />
            <InfoContent
                type={'smallDot'}
                text={
                    '해외 로밍 서비스 할인 : 이대생이라면 특별 할인된 가격으로 해외 로밍 서비스를 받을 수 있어요!'
                }
            />
            <InfoContent
                type={'smallDot'}
                text={
                    '노트북 대여 가능 (최대 2주) : 유래카 학생서비스에서 신청하고 ECC에서 받을 수 있어요.'
                }
            />
            <InfoContent
                type={'smallDot'}
                text={
                    '건강공제회비로 무료 건강검진을 받을 수 있어요. 학년마다 1학기/ 2학기로 신청 기간이 정해져 있다는 점 유의하세요!'
                }
            />
            <Overlay>
                <InfoContent
                    type={'smallDot'}
                    text={`ECC에는 English Lounge가 있어요. 일정만 잡으면 원어민과
                    자유롭게 영어로 대화할 수 있답니다!`}
                    noMargin={true}
                />
                <ImgWrapper>
                    <Img
                        onClick={handleOpen}
                        closer={handleClose}
                        img={englishlounge}
                        isImgOpened={isImgOpened}
                    />
                </ImgWrapper>
            </Overlay>
            <InfoContent />
            <InfoContent />
        </div>
    );
};

export default Info4Content_2;

//두 컴포넌트가 겹칠 수 있도록 만듬
const ImgWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;

    margin-right: 120px;
    margin-bottom: 2px;
`;

const Overlay = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
`;
