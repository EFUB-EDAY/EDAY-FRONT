import React from 'react';
import styled from 'styled-components';
import '../../../styles/InfoContentStyle.css';
import table1 from '../../../assets/infopage/d2/table2_1.png';
import table2 from '../../../assets/infopage/d2/table2_2.png';
import table3 from '../../../assets/infopage/d2/table2_3.png';
import table4 from '../../../assets/infopage/d2/table2_4.png';
import Title from '../../_common/Title';
import GreenBorder from '../../_common/GreenBorder';
import InfoContent from '../../_common/InfoContent';
import Tip from '../../_common/Tip';

const Content2 = () => {
    return (
        <>
            <Wrapper>
                <Title num='1.' title='무슨 교양을 들어야 하나요?' />
                <GreenBorder type='info' />
                <InfoContent
                    text={`교양 과목은 기초교양, 핵심교양, 일반교양으로 구분할 수 있어요! 이 중에서 기초교양과 핵심교양은 졸업을 위해 꼭 수강해야 하는 필수 교양이에요. 주로 필교 또는 교필이라고 부릅니다.`}
                    type='top'
                />
                <InfoContent
                    text={`기초교양은 입학 연도와 단과대에 따라 들어야 하는 과목의 종류, 수강 시기, 분반이 정해져 있어요! 미리 알아두고 놓치지 않고 수강신청합시다!`}
                />
                <InfoContent
                    text={`대학별 기초교양 이수 기준 (2023년도)`}
                    type='smallDot'
                />
                <img src={table1} />
                <br />
                <InfoContent
                    text={`과목들도 보통 줄임말로 불러요. 예를 들어 기세는 기독교와세계, 통글은 통합적사고와글쓰기, 대영은 College English, 고영은 Advanced English를 뜻합니다!`}
                />
                <InfoContent
                    text={`대학별 기초교양 지정 수강 학년 / 학기`}
                    type='smallDot'
                />
                <img src={table2} />
                <br />
                <InfoContent
                    text={`핵심교양은 다시 융복합교양과 큐브 과목으로 나뉘어요. 기초교양과 달리 원하는 학기에 수강할 수 있습니다. 졸업 전까지 이수 기준만 충족하면 됩니다.`}
                />
                <InfoContent
                    text={`대학별 융복합교양 이수 기준`}
                    type='smallDot'
                />
                <img src={table3} />
                <br />
                <InfoContent
                    text={`대학별 큐브 과목 이수 기준`}
                    type='smallDot'
                />
                <img src={table4} />
                <br />
                <InfoContent
                    text={`※ 교양과목에 대한 자세한 내용은 아래 경로에서 확인할 수 있어요!`}
                />
                <div className='InfoContent' style={{ marginRight: '20px' }}>
                    ① [이화포탈정보시스템 - 유레카통합행정 - 학사행정 - 교과 -
                    교과과정안내]
                </div>
                <span className='InfoContent' style={{ marginRight: '20px' }}>
                    ② [이화여자대학교 - 학사안내 - 교과과정 - 교과과정 및 교과목
                    소개 -&nbsp;
                    <a
                        href='https://cmsfox.ewha.ac.kr/cms/etcResourceOpen.do?site=$cms$BYew1gtghkA&key=$cms$EwBlFpWBmB9AZAlgIwKYCcCGAbWBBdAFwGdYBhAewFd1jViAKGASlgDNEA7AOgAcATNkA'
                        target='_blank'
                        style={{ color: '#369149' }}
                    >
                        //2020학년도~2023학년도 입학생의 교양과목 이수//
                    </a>
                </span>
                <br />
            </Wrapper>
            <Tip />
            <Wrapper>
                <InfoContent
                    text={`한 분반에 수강인원이 적은 통글, 대영, 고영 같은 과목은 수강신청 경쟁률이 매우 높아요! 듣고 싶은 교수님이 있다면 1순위로 두는 게 좋아요.`}
                />
            </Wrapper>
            <Tip />
            <Wrapper>
                <InfoContent
                    text={`필교를 지정 학기에 듣지 않아도 계절학기에 수강할 수 있어요. 나는 짧고 굵게 끝내는 게 좋다! 라면 계절학기를 이용해 보세요. 하지만 대영과 고영은 지정 학기를 놓치면 3학년 여름 계절학기부터 다시 들을 수 있으니 주의하세요!`}
                />
            </Wrapper>
            <Tip />
            <Wrapper>
                <InfoContent
                    text={`필교는 교재 중고 거래가 활발해요. 한 학기만 사용할 책이니 이왕이면 중고로 싸게 사는걸 추천해요.`}
                />
                <Title num='2.' title='필교를 면제받을 수도 있다고요?' />
                <GreenBorder type='info' />
                <InfoContent
                    text={`대영(College English)과 고영(Advanced English)은 어학 성적을 제출하면 면제받을 수 있어요! 면제받기 위해서는 어학 성적이 아래 조건을 만족해야 해요.`}
                    type='top'
                />
                <div className='InfoContent InfoContent_smallDot'>
                    대영 : 토플 105 이상 또는 아이엘츠 7.5 이상 8 이하
                </div>
                <div className='InfoContent InfoContent_smallDot'>
                    고영 : 토플 115 이상 또는 아이엘츠 8.5 이상
                </div>
                <br />
                <InfoContent
                    text={`꼭 입학 전에 성적표를 제출해야 면제가 가능하다는 사실 기억해 주세요! 면제자는 귀찮은 필교를 안 들어도 될 뿐만 아니라 해당 학기에 최대 21학점까지 수강신청이 가능하다는 장점 아닌 장점도 있어요. 조건이 충족된다면 잊지 말고 면제받는게 좋겠죠?`}
                />
            </Wrapper>
        </>
    );
};

export default Content2;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    img {
        width: calc(100% - 40px);
        margin-left: 20px;
    }
`;
