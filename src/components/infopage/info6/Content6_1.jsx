import React from 'react';
import styled from 'styled-components';

import InfoContent from '../../_common/InfoContent';
import GreenBorder from '../../_common/GreenBorder';
import Title from '../../_common/Title';

import pic6_1 from '../../../assets/infopage/d6/dDay6_1.svg';
import pic6_2 from '../../../assets/infopage/d6/dDay6_2.svg';

const Content6_1 = () => {
    return (
        <Wrapper>
            <Title num='1.' title='수강해야하는 과목 확인 방법' />
            <GreenBorder type='info' />
            <InfoContent type='top' text='수강신청 사이트에서 확인하기' />
            <InfoContent
                text='① 수강신청 사이트에 로그인합니다.'
                noMargin='true'
            />
            <InfoContent
                text='② 서브메뉴 중 [교과과정 및 교과목 소개]를 클릭해요.'
                noMargin='true'
            />
            <InfoContent
                text=' ③ 본인 전공을 선택하고 출력 버튼을 클릭하면 본인이 수강해야 하는
        과목을 볼 수 있어요!'
            />
            <ImgWrapper>
                <Img src={pic6_1} />
            </ImgWrapper>
            <InfoContent text='학교 홈페이지에서 확인하기' />
            <InfoContent text='① 학교 홈페이지에 들어갑니다.' noMargin='true' />
            <InfoContent
                text=' ② 학사 안내 메뉴 중 [교과과정 및 교과목 소개] 또는 [전공별 교과과정
            보기]를 클릭해서 과목을 확인할 수 있습니다.'
            />
            <ImgWrapper>
                <Img src={pic6_2} />
            </ImgWrapper>
        </Wrapper>
    );
};

export default Content6_1;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ImgWrapper = styled.div`
    padding-left: 20px;
    padding-right: 14px;
    padding-bottom: 20px;
`;

const Img = styled.img`
    width: 100%;
`;
