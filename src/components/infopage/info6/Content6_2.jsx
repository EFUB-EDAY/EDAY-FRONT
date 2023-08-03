import React from 'react';
import styled from 'styled-components';

import InfoContent from '../../_common/InfoContent';
import GreenBorder from '../../_common/GreenBorder';
import Title from '../../_common/Title';
import Tip from '../../_common/Tip';

import pic6_3 from '../../../assets/infopage/d6/dDay6_3.svg';
import pic6_4 from '../../../assets/infopage/d6/dDay6_4.svg';

const Content6_2 = () => {
    return (
        <Wrapper>
            <Title num='1.' title='수강 신청 사이트 안내' />
            <GreenBorder type='info' />
            <InfoContent type='top' text='수강 가능 학점 확인' />
            <InfoContent
                type='smallDot'
                text='수강 신청 페이지 접속 후 좌측 상단의 이름 클릭 시 신청 가능 학점 확인 가능해요.'
            />
            <InfoContent text='새로고침' />
            <InfoContent
                type='smallDot'
                text='브라우저 및 키보드 새로고침(F5) 금지! 반드시 사이트 내의
        새로고침(refresh) 버튼을 사용해야 해요.'
                noMargin='true'
            />
            <InfoContent
                type='smallDot'
                text='수강 신청 도중 서비스 접속 대기 창이 뜰 때 새로고침 하지 말고
        기다려야 해요.'
            />
            <ImgWrapper>
                <Img src={pic6_3} />
            </ImgWrapper>
            <InfoContent text='자동 로그아웃' />
            <InfoContent
                type='smallDot'
                text='10분 간 움직임이 없으면 자동으로 로그아웃 돼요! 수강신청 사이트에서 제공하는 10분 타이머가 다 지나기 전에 사이트 내의 새로고침 버튼을 누르도록 합시다.'
            />
            <InfoContent text='중복 로그인 불가' />
            <InfoContent
                type='smallDot'
                text='다중 로그인 시 마지막으로 로그인 한 페이지를 제외한 모든 페이지가 로그아웃이 되니 주의해주세요.'
            />

            <Title num='2.' title='수강 신청 용어' />
            <GreenBorder type='info' />
            <InfoContent type='top' text='학년별 TO' />
            <InfoContent
                type='smallDot'
                text='학년별 TO는 과목에 배정된 각 학년의 수강 가능 인원 수입니다. 권장 학년일수록 배정 비율이 높기 때문에 권장 학년의 수업을 신청하는 것이 수강신청에 유리하겠죠?'
            />
            <InfoContent text='대기순번제' />
            <InfoContent
                type='smallDot'
                text='정원이 마감된 교과목을 신청하는 경우, 선착순으로 대기 순번을 받게 됩니다. 취소석이 생기면 대기번호 1번부터 자동으로 자리가 돌아가요.'
                noMargin='true'
            />
            <InfoContent
                type='smallDot'
                text='대기번호는 해당 학년의 수강신청 기간(e.g. 오전 9시~12시)이 끝나면 리셋되므로 수강신청 기회가 여러번 있을 때마다 수강 신청에 도전해야 합니다.'
            />
            <InfoContent text='취소지연제' />
            <InfoContent
                type='smallDot'
                text='정원이 마감된 교과목의 수강 취소자가 발생하여 잔여석이 생기더라도 그 즉시 수강 신청이 가능한 것이 아니라, 일정 기간 이후에 수강 신청이 가능한 제도예요.'
                noMargin='true'
            />
            <InfoContent
                type='smallDot'
                text='잔여석은 9시~17시 동안 매 시간 30분 단위로 오픈됩니다.'
                noMargin='true'
            />
            <InfoContent
                type='smallDot'
                text='e.g. 2시 25분에 취소석이 발생하면 2시 30분에 수강신청!'
            />
            <InfoContent text='우선수강신청' />
            <InfoContent
                type='smallDot'
                text='수강신청 경쟁률이 높은 전공에 한해서 전공선택 및 전공필수 과목을 먼저 수강신청하는 우선수강신청 제도를 운영해요. 단과대 홈페이지 공지사항에 우선수강신청 과목 공지가 올라오므로 확인 가능합니다. 다만, 우선수강신청도 학년별 티오가 분배되어 있어요.'
            />
            <Tip />
            <InfoContent text='수강신청 경쟁률이 높은 전공에 한해서 전공선택 및 전공필수 과목을 먼저 수강신청하는 우선수강신청 제도를 운영해요. 단과대 홈페이지 공지사항에 우선수강신청 과목 공지가 올라오므로 확인 가능합니다. 다만, 우선수강신청도 학년별 티오가 분배되어 있어요.' />

            <Title num='3.' title='수강신청 팁' />
            <GreenBorder type='info' />
            <TipMargin>
                <Tip />
            </TipMargin>
            <InfoContent text='초시계로 네이버 시계, 네이비즘을 많이 써요.' />
            <Tip />
            <InfoContent text='신입생 수강신청은 대기순번제, 취소지연제 적용되지 않아요.' />
            <Tip />
            <InfoContent text='수강신청 일주일 전, 당일 30분 전에 장바구니가 열려요! 장바구니 페이지에서 듣고 싶은 과목명, 학수번호 등을 검색해서 장바구니에 추가했다가 빠르게 수강신청 가능합니다. 최대 15과목까지 담을 수 있어요.' />
            <Tip />
            <InfoContent text='신입생은 ‘전체학년’ 채플 때 신청하는 게 아니라 ‘신입생 교과목 / 채플 / 학점교류’ 수강신청 기간 때 신청이 가능해요.' />
            <Tip />
            <InfoContent text='크롬 팝업 허용' />
            <InfoContent
                text='① 오른쪽 상단의 설정을 클릭합니다.'
                noMargin='true'
            />
            <InfoContent
                text='② 개인 정보 보호 및 보안을  클릭하고 사이트 설정에 들어갑니다.'
                noMargin='true'
            />
            <InfoContent text='③ 팝업 및 리디렉션을 클릭하고, 기본 동작을 ‘사이트에서 팝업을 전송하고 리디렉션을 사용할 수 없음’을 눌러 팝업을 허용합니다.' />
            <ImgWrapper>
                <Img src={pic6_4} />
            </ImgWrapper>
            <Tip />
            <InfoContent text='한 학기에 최대 18학점(세미나/실험까지 포함하면 19학점)까지 수강 신청이 가능해요! 직전학기 학점이 3.75이상이면 21학점을 들을 수 있답니다. 직전학기에 18학점보다 적게 들었다면, 해당 여유 학점이 이월되어 다음 학기에 추가로 들을 수 있어요. 각자의 상황에 맞게 수강 가능 학점을 확인해둡시다!' />
        </Wrapper>
    );
};

export default Content6_2;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 14px;
`;

const Img = styled.img`
    width: 100%;
`;

const TipMargin = styled.div`
    margin-top: 12px;
`;