import React from 'react';
import styled from 'styled-components';

import GreenBorder from '../../_common/GreenBorder';
import InfoContent from '../../_common/InfoContent';
import Title from '../../_common/Title';
import Tip from '../../_common/Tip';

import pic5_1 from '../../../assets/infopage/d5/dDay5_1.svg';
import pic5_2 from '../../../assets/infopage/d5/dDay5_2.svg';

const Content5_1 = () => {
    return (
        <Wrapper>
            <Title num='1.' title='분관 대출 서비스' />
            <GreenBorder type='info' />
            <InfoContent
                type='top'
                text='분관 대출을 신청하면 해당 자료가 소장되어 있는 도서관에 직접 가지 않고 본인이 지정한 도서관(중앙도서관, 공학도서관, 의학도서관)에서 자료를 대출할 수 있어요.'
            />
            <InfoContent text='책은 하루에 최대 5권 신청할 수 있어요. 해당 자료가 도착했다는 카톡 알림을 받고, 도서관에서 3일 이내에 자료를 대출해야 해요.' />

            <Title num='2.' title='e-Book 대출 방법' />
            <GreenBorder type='info' />
            <InfoContent
                type='top'
                text='① [홈페이지 - 전자자료 - e-Book/오디오북]으로 들어갑니다.'
                noMargin='true'
            />
            <InfoContent
                text='② [목록]을 클릭하여 각 제공처에서 이용 가능한 자료 리스트를 확인하고 원하는 자료를 검색해 볼 수 있어요.'
                noMargin='true'
            />
            <InfoContent text='③ 그 다음 [바로가기]를 클릭하면 각 사이트에 연결이 돼서 PC 전용 뷰어로 자료를 열람할 수 있고, 모바일로 이용을 원할 경우 앱을 설치하여 열람할 수 있어요.' />
            <ImgWrapper>
                <Img src={pic5_1} />
            </ImgWrapper>

            <Title num='3.' title='전자책 단말기 대출 방법' />
            <GreenBorder type='info' />
            <InfoContent
                type='top'
                text='① 도서관 홈페이지에서 [크레마]를 검색합니다.'
                noMargin='true'
            />
            <InfoContent
                text='② 상세정보확인을 통해 대출 가능 여부를 확인합니다.'
                noMargin='true'
            />
            <InfoContent text='③ 중앙도서관 2층 대출실에 방문하여 전자책 단말기를 대출할 수 있습니다.' />
            <ImgWrapper>
                <Img src={pic5_2} />
            </ImgWrapper>
            <Tip />
            <InfoContent text='모바일로 이용할 때도 최초 1회는 반드시 PC에서 도서관 홈페이지를 통해 접속한 후 [바로가기]를 클릭해야 계정이 생성됩니다!' />
            <Tip />
            <InfoContent text='대출 가능한 도서 수 및 기간은 제공처마다 상이하니 확인 후 이용하길 바라요.' />
            <Tip />
            <InfoContent text='전자책 단말기의 경우 학부생은 최대 14일까지 대출이 가능해요.' />
        </Wrapper>
    );
};

export default Content5_1;

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
