import React from 'react';
import styled from 'styled-components';

import GreenBorder from '../../_common/GreenBorder';
import InfoContent from '../../_common/InfoContent';
import Title from '../../_common/Title';

import pic5_3 from '../../../assets/infopage/d5/dDay5_3.svg';
import pic5_4 from '../../../assets/infopage/d5/dDay5_4.svg';

const Content5_1 = () => {
    return (
        <Wrapper>
            <Title num='1.' title='교내 학위 논문' />
            <GreenBorder type='info' />
            <InfoContent
                type='top'
                text='[자료 검색 - 유형별 검색 - 학위 논문]으로 들어가면 우리 학교 학위 논문을 학과별로 열람해 볼 수 있어요.'
            />
            <ImgWrapper>
                <Img src={pic5_3} />
            </ImgWrapper>

            <Title num='2.' title='타 학교 학위 논문' />
            <GreenBorder type='info' />
            <InfoContent
                type='top'
                text='① 도서관 홈페이지 하단의 [자주 찾는 사이트]에서 학술연구정보서비스 [RISS]를 찾아 클릭해요.'
                noMargin='true'
            />
            <InfoContent
                text='② 검색창에 찾고 싶은 자료의 서명, 저자, 발행처 등의 키워드를 입력하여 전체를 대상으로 검색하거나 [상세 검색] 버튼을 클릭하여 다양한 검색 필드의 입력어를 [AND/OR/NOT] 으로 조합하여 검색할 수 있어요.'
                noMargin='true'
            />
            <InfoContent
                text='③ 왼쪽의 옵션들을 조정하여 검색 결과를 좁힐 수도 있어요.'
                noMargin='true'
            />
            <InfoContent text='④ 원하는 자료를 찾으면 [원문보기]를 클릭하여 PDF 원문을 이용할 수 있어요!' />
            <ImgWrapper>
                <Img src={pic5_4} />
            </ImgWrapper>
        </Wrapper>
    );
};

export default Content5_1;

const Wrapper = styled.div`
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
