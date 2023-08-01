import React from 'react';
import styled from 'styled-components';

// assets
import map1 from '../../../assets/infopage/d7/map3_1.svg';
import point1 from '../../../assets/infopage/d7/point3_1.svg';
import map2 from '../../../assets/infopage/d7/map3_2.svg';
import point2 from '../../../assets/infopage/d7/point3_2.svg';

// components
import Title from '../../_common/Title';
import GreenBorder from '../../_common/GreenBorder';
import InfoContent from '../../_common/InfoContent';
import Tip from '../../_common/Tip';

const Content3 = () => {
    return (
        <Wrapper>
            <Title num='1.' title='정규 주간 노선' />
            <GreenBorder type='info' />
            <InfoContent
                text='운행 시간 : 오전 07:50~11:50 / 오후 13:00~21:00'
                type='both'
            />
            <InfoContent
                text={`배차 간격 : 5분
            ※ 19시~21시: 10분(해당 시간 조형예술관 및 공대삼거리 미정차)`}
                type='smallDot'
            />
            <InfoContent
                text='노선 : 정문 - 조형예술관 - 포스코관 - 공대삼거리 - 한우리집 - 산학협력관'
                type='smallDot'
            />
            <InfoContent
                text={`※ 주의할 점
                11:50~13:00 운행 하지 않아요.
                쉬는 시간엔 정문 줄이 길어요.`}
            />

            <Title num='2.' title='정규 야간 노선' />
            <GreenBorder type='info' />
            <InfoContent
                text='운행 시간 : 평일 21:00~23:40 / 토요일 18:00~23:40'
                type='both'
            />
            <InfoContent text='배차 간격 : 10분' type='smallDot' />
            <InfoContent
                text='노선 : 입학관 - 포스코관 - 한우리집 주차장 - 이하우스'
                type='smallDot'
            />
            <InfoContent
                text={`※ 주의할 점
                정문이 아닌 입학관에서 타고 내려요. 
                기숙사 안까지 버스가 들어가요.`}
            />
            <MapContainer margin='8px'>
                <MapImg src={map1} />
                <MapImg className='point' src={point1} />
            </MapContainer>

            <Title num='3.' title='직행 노선' />
            <GreenBorder type='info' />
            <InfoContent
                text='운행 시간 : 오전 08:45~11:15 / 오후 13:30~17:15'
                type='both'
            />
            <InfoContent text='배차 간격 : 20분' type='smallDot' />
            <InfoContent
                text='노선 : 정문 → 포스코관 → 공대삼거리'
                type='smallDot'
            />
            <MapContainer margin='20px'>
                <MapImg src={map2} />
                <MapImg className='point' src={point2} />
            </MapContainer>

            <Tip />
            <InfoContent text='이화여자대학교 앱 셔틀/버스에서 실시간 버스 위치 확인이 가능하니 참고해주세요!' />
        </Wrapper>
    );
};

export default Content3;

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

    width: '336px';
    height: '396px';

    &.point {
        position: absolute;
        z-index: 2;
    }
`;
