import React, { useState } from 'react';
import styled from 'styled-components';
import '../../../styles/InfoContentStyle.css';
import ewhalogo from '../../../assets/infopage/d1/ewhalogo.png';
import slogan from '../../../assets/infopage/d1/slogan.png';
import cookie from '../../../assets/infopage/d1/cookie.png';
import Title from '../../_common/Title';
import GreenBorder from '../../_common/GreenBorder';
import InfoContent from '../../_common/InfoContent';
import Img from '../../_common/Img';

const Content1 = () => {
    // isImgOpened, closer, img, onClick
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    return (
        <Wrapper>
            <Title num='1.' title='이화 교포 및 슬로건' />
            <GreenBorder type='info' />
            <InfoContent
                text={`이화여자대학교는 1886년 메리 스크랜튼 부인이 세운 한국 최초의 여학교인 이화학당으로부터 시작되었어요.`}
                type='top'
            />
            <div style={{ display: 'flex' }}>
                <InfoContent
                    text={`학교 FM은 “해방이화”, 교포는 배꽃 모양이에요.`}
                    NoRightMargin={true}
                />
                <Img
                    isImgOpened={modal1}
                    closer={() => setModal1(false)}
                    img={ewhalogo}
                    onClick={() => setModal1(true)}
                    color='black'
                />
            </div>
            <InfoContent
                text={`이화여대 학생들은 서로를 ‘벗’이라는 애칭으로 불러요.`}
            />
            <div style={{ display: 'flex' }}>
                <InfoContent
                    text={`이화여대 슬로건으로는 “Where Change Begins”, “세상은 이화에게 물었고 이화는 그대를 답했다” 등이 있으며 현재 공식적으로 
                    사용중인 슬로건은 “그대가 바라는 미래, 이화”예요.`}
                />
                <Img
                    isImgOpened={modal2}
                    closer={() => setModal2(false)}
                    img={slogan}
                    onClick={() => setModal2(true)}
                    color='black'
                />
            </div>
            <Title num='2.' title='기타 정보' />
            <GreenBorder type='info' />
            <InfoContent
                text={`//이화여자대학교 VR 투어//`}
                type='top'
                link='http://www.ewha.ac.kr/ewha_vr'
            />
            <div className='InfoContent' style={{ marginRight: '20px' }}>
                학교 캠퍼스에 아직 가보지 못했는데 너무 궁금하다면 이 링크를
                통해 VR 투어를 떠나보는 건 어떤가요?
            </div>
            <div className='InfoContent' style={{ marginRight: '20px' }}>
                학교의 구석구석을 실제 모습 그대로 체험해 볼 수 있답니다!
            </div>
            <br />
            <InfoContent
                text={`이화여자대학교는 하버드 대학교의 파트너십 대학으로, 하버드 대학 본교와 교류하는 국내 유일의 대학이랍니다.`}
                type='smallDot'
            />
            <InfoContent
                text={`이화여대에서는 2022년 디올이 처음으로 국내 대학 캠퍼스에서 패션쇼를 열었어요. 이화라는 학교가 가지는 의미와 학교 캠퍼스가 얼마나 아름다운지를 증명하는 일이기도 하죠~ 이화여대 대표 커뮤니티는 이화이언이에요. 학교 인증을 지속적으로 요구하기 때문에 이화이언은 이화인들만의 공간이라는 신뢰감이 더 있는 커뮤니티예요. 이화이언에서는 일정 레벨만 넘기면 누구나 쉽게 시험 과목들의 족보를 무료로 열람할 수 있어요.`}
                type='smallDot'
            />
            <div style={{ display: 'flex' }}>
                <InfoContent
                    text={`기말고사 기간마다 열람실에서 공부하는 벗들에게 총장 쿠키를 제공하는 이벤트가 있어요. 매년 구성이 조금씩 달라지는데 이번 연도 기준으로는 총장님 쪽지, 쿠키, 스벅 음료권이 들어있어요. ECC 열람실과 중앙도서관에서 공부하며 앉아있으면 어느 날 깜짝 선물로 찾아온답니다!`}
                    type='smallDot'
                />
                <Img
                    isImgOpened={modal3}
                    closer={() => setModal3(false)}
                    img={cookie}
                    onClick={() => setModal3(true)}
                    color='black'
                />
            </div>
            <InfoContent
                text={`//이화남성교수중창단 공연//`}
                link='https://www.youtube.com/watch?v=b0yW7cPRpYo'
            />
            <InfoContent
                text={`매년 입학식 때마다 열리는 이화남성교수중창단의 공연은 이화의 자랑거리예요. “이대 엑소”라는 별명을 갖고 있기도 하죠. 히트곡이나 대중적으로 유명했던 곡의 메들리를 부르는 교수님들을 만나볼 수 있답니다. 입학식에 오셔서 교수님들의 끼를 구경해 보세요!`}
            />
            <InfoContent
                text={`//이화기념품점//`}
                link='https://ewhagift.ewha.ac.kr/shop'
            />
            <InfoContent
                text={`이화 기념품점에서는 학교의 다양한 굿즈들을 구매할 수 있어요. 머리끈, 텀블러, 공책, 옷 등 아주 많은 종류의 굿즈들이 있으니 한번 구경해 보세요 :)`}
            />
        </Wrapper>
    );
};

export default Content1;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
