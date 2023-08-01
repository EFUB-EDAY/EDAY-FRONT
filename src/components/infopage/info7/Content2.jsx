import React from 'react';
import styled from 'styled-components';

// assets
import map1 from '../../../assets/infopage/d7/map2_1.svg';
import point1 from '../../../assets/infopage/d7/point2_1.svg';
import map2 from '../../../assets/infopage/d7/map2_2.svg';
import point2 from '../../../assets/infopage/d7/point2_2.svg';
import map3 from '../../../assets/infopage/d7/map2_3.svg';
import point3 from '../../../assets/infopage/d7/point2_3.svg';

// components
import Title from '../../_common/Title';
import GreenBorder from '../../_common/GreenBorder';
import InfoContent from '../../_common/InfoContent';
import Tip from '../../_common/Tip';

const Content2 = () => {
    return (
        <Wrapper>
            <Title num='1.' title='공학관 올라가기' />
            <GreenBorder type='info' />
            <InfoContent text='정문에서 출발하기' type='top' />
            <InfoContent
                text={`① 포스코관 1층으로 들어가요.
                ② 포스코관에서 엘리베이터를 타고 4층에서 내려요.
                ③ 오른쪽으로 돈 다음 계단 쪽 문을 열고 나가면 바로 앞에 종합과학관이 있어요. (해당 층은 종합과학관 지하 2층이에요.)
                ④ 종합과학관으로 들어가 엘리베이터를 타고 4층으로 올라가요
                ⑤ 오른쪽 문으로 나가 내리막길을 따라 내려가면 공학관이 나와요.`}
            />
            <InfoContent text='후문에서 출발하기' />
            <InfoContent
                text={`① 학교 안이 아닌 학교 밖 큰길을 따라 이대부고 방향으로 걸어요.
            ② 공대 후문(쪽문)으로 들어가요.`}
            />
            <InfoContent text='이대역에서 출발하기' />
            <InfoContent
                text={`① 이대역 4번 출구로 나가요.
            ② 742, 7017번 버스를 타고 이대부고에서 내려요.
            ③ 공대 후문으로 들어가요.`}
            />
            <MapContainer margin='8px'>
                <object type='image/svg+xml' data={map1}>
                    <MapImg src={map1} width='calc(100% - 6px)' />
                </object>
                <MapImg
                    className='point'
                    src={point1}
                    width='calc(100% - 6px)'
                />
            </MapContainer>

            <Title num='2.' title='기숙사(E-House) 올라가기' />
            <GreenBorder type='info' />
            <InfoContent text='정문에서 출발하기' type='top' />
            <InfoContent text='a) 법학관 루트' />
            <InfoContent
                text={`① ECC 지하 4층에서 엘리베이터를 타고 1층으로 올라가요.
            ② 헬렌관 뒤쪽 계단을 올라간 후, 법학관 1층으로 들어가요.
            ③ 엘리베이터를 타고 법학관 4층에서 내려서 출입문으로 나가요.
            ④ 한우리집 쪽으로 걸어가요.`}
            />
            <InfoContent text='b) 포스코관 루트' />
            <InfoContent
                text={`① ECC 지하 4층에서 엘리베이터를 타고 1층으로 올라가요.
            ② 포스코관까지 걸어가요.
            ③ 포스코관 루트를 따라 공대 오르막길을 올라가요.`}
            />
            <InfoContent text='후문에서 출발하기' />
            <InfoContent
                text={`① 후문에서 학생문화관 건물로 들어가요.
            ② 학생문화관 2층으로 올라가 밖으로 나가면 포스코관이 보여요.
            ③ 포스코관 루트를 따라 공대 오르막길을 올라가요.`}
            />
            <MapContainer margin='20px'>
                <object type='image/svg+xml' data={map2}>
                    <MapImg src={map2} width='calc(100% - 6px)' />
                </object>
                <MapImg
                    className='point'
                    src={point2}
                    width='calc(100% - 6px)'
                />
            </MapContainer>

            <Tip />
            <InfoContent text='셔틀 없는 날 기숙사 나가는 법' />
            <InfoContent
                text={`① 이하우스 301동 쪽 나무계단 타고 내려가요.
            ② 오뚜기 국제관 후문으로 나가서 길을 따라 내려가요.
            ③ 서대문 05번 버스 타고 아현역으로!`}
            />
            <InfoContent
                text={`※ 주의할 점
            종착역이라 지도 앱에서 도착 정보를 알 수 없어요.
            배차간격은 7분이에요.`}
            />

            <Title num='3.' title='수영장길' />
            <GreenBorder type='info' />
            <InfoContent
                text='후문 쪽 생활관 아래를 지나는 터널이 바로 수영장길이에요. ECC 주차장 입구와 수영장 간판으로 찾을 수 있어요. 포스코관 주변 건물에서 수업을 듣고 이화 신세계(경영)관, 이화 SK텔레콤관 주변 건물로 갈 때 유용한 지름길이에요!'
                type='top'
            />
            <MapContainer margin='20px'>
                <object type='image/svg+xml' data={map3}>
                    <MapImg src={map3} width='198px' />
                </object>
                <MapImg
                    className='point'
                    src={point3}
                    width='54px'
                    top='59px'
                    left='147px'
                />
            </MapContainer>
        </Wrapper>
    );
};

export default Content2;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
`;

const MapContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    margin-bottom: ${props => (props.margin ? props.margin : '0px')};
`;

const MapImg = styled.img`
    position: relative;
    z-index: 1;
    align-self: center;

    width: ${props => props.width};

    &.point {
        position: absolute;
        z-index: 2;

        top: ${props => props.top};
        left: ${props => props.left};
    }
`;
