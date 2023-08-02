import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import InfoBox from '../_common/InfoBox';
import Dday from '../_common/Dday';
import XBtn from '../_common/XBtn';
import GreenBorder from '../_common/GreenBorder';
import Btn from '../_common/Btn';
import Title from '../_common/Title';
import Tip from '../_common/Tip';
import InfoContent from '../_common/InfoContent';
import FloatingBtn from '../_common/FloatingBtn';

import map5 from '../../assets/infopage/d5/dDay5_map.svg';
import pic5_1 from '../../assets/infopage/d5/dDay5_1.svg';
import pic5_2 from '../../assets/infopage/d5/dDay5_2.svg';
import pic5_3 from '../../assets/infopage/d5/dDay5_3.svg';
import pic5_4 from '../../assets/infopage/d5/dDay5_4.svg';
import pic5_5 from '../../assets/infopage/d5/dDay5_5.svg';

import { GetInfo } from '../../api/info';

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

const content1 = (
    <>
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
    </>
);

const content2 = (
    <>
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
    </>
);

const content3 = (
    <>
        <Title num='1.' title='무인복합기 현황 및 위치' />
        <GreenBorder type='info' />
        <InfoContent
            type='top'
            text='컬러로 프린트가 안되는 곳들도 있으니 유의해서 보시는 것을 추천해요!'
        />
        <ImgWrapper>
            <Img src={pic5_5} />
        </ImgWrapper>
    </>
);

const Info5 = () => {
    const navigate = useNavigate();
    const { dDay } = useParams();
    const [borderText, setBorderText] = useState({});

    //GreenBorder의 text 가져오기
    useEffect(() => {
        GetInfo(5)
            .then(res => {
                console.log(res.data);
                setBorderText(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <Top>
                <Dday num={dDay} />
                <XBtnContainer>
                    <XBtn
                        onClick={() => {
                            navigate(`/answer/${dDay}`);
                        }}
                    />
                </XBtnContainer>
            </Top>
            <GreenBorder text={borderText.headline} />
            <MapWrapper>
                <img src={map5} alt='d-5 지도' />
            </MapWrapper>
            <InfoBox btnText='대출 서비스' content={content1} />
            <InfoBox btnText='학위논문 이용 서비스' content={content2} />
            <InfoBox btnText='무인복합기' content={content3} />
            <BtnWrapper>
                <Btn
                    text='메인페이지로 돌아가기'
                    type='deepGreen'
                    onClick={() => {
                        navigate('/');
                    }}
                />
            </BtnWrapper>
            <FloatingBtn />
        </>
    );
};

export default Info5;

const Top = styled.div`
    margin-bottom: 79px;
    position: relative;
`;

const XBtnContainer = styled.div`
    position: absolute;
    right: 0;
    top: 22px;
`;

const MapWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;

    & > img {
        width: 172.6px;
        height: 288.52px;
    }
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 37.48px; //임시
`;
