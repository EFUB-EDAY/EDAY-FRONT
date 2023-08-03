import React, { useState } from 'react';
import styled from 'styled-components';

// assets
import map1 from '../../../assets/infopage/d7/map2_1.svg';
import point1 from '../../../assets/infopage/d7/point2_1.svg';
import map2 from '../../../assets/infopage/d7/map2_2.svg';
import point2 from '../../../assets/infopage/d7/point2_2.svg';
import map3 from '../../../assets/infopage/d7/map2_3.svg';
import point3 from '../../../assets/infopage/d7/point2_3.svg';
import engin1 from '../../../assets/infopage/d7/engin_1.png';
import engin2 from '../../../assets/infopage/d7/engin_2.png';
import engin3 from '../../../assets/infopage/d7/engin_3.png';
import engin4 from '../../../assets/infopage/d7/engin_4.png';
import engin5 from '../../../assets/infopage/d7/engin_5.png';
import dorm1 from '../../../assets/infopage/d7/dorm_1.png';
import dorm2 from '../../../assets/infopage/d7/dorm_2.png';
import dorm3 from '../../../assets/infopage/d7/dorm_3.png';
import dorm4 from '../../../assets/infopage/d7/dorm_4.png';
import dorm5 from '../../../assets/infopage/d7/dorm_5.png';
import dorm6 from '../../../assets/infopage/d7/dorm_6.png';
import dorm7 from '../../../assets/infopage/d7/dorm_7.png';
import pool1 from '../../../assets/infopage/d7/pool_1.png';
import pool2 from '../../../assets/infopage/d7/pool_2.png';

// components
import Title from '../../_common/Title';
import GreenBorder from '../../_common/GreenBorder';
import InfoContent from '../../_common/InfoContent';
import Tip from '../../_common/Tip';
import Img from '../../_common/Img';

const Content2 = () => {
    const [imgOpen, setImgOpen] = useState(Array(14).fill(false));

    const editImgOpen = (index, value) => {
        setImgOpen(prevState => {
            const newState = [...prevState];
            newState[index] = value;
            console.log(imgOpen);
            return newState;
        });
    };

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
                <MapObject type='image/svg+xml' data={map1}>
                    <MapImg src={map1} width='calc(100% - 6px)' />
                </MapObject>
                <MapImg
                    className='point'
                    src={point1}
                    width='calc(100% - 6px)'
                />
                <Img
                    type='info7'
                    positionX='187px'
                    positionY='193px'
                    isImgOpened={imgOpen[0]}
                    closer={() => editImgOpen(0, false)}
                    img={engin1}
                    onClick={() => editImgOpen(0, true)}
                    color='white'
                />
                <Img
                    type='info7'
                    positionX='223px'
                    positionY='180px'
                    isImgOpened={imgOpen[1]}
                    closer={() => editImgOpen(1, false)}
                    img={engin2}
                    onClick={() => editImgOpen(1, true)}
                    color='white'
                />
                <Img
                    type='info7'
                    positionX='223px'
                    positionY='142.97px'
                    isImgOpened={imgOpen[2]}
                    closer={() => editImgOpen(2, false)}
                    img={engin3}
                    onClick={() => editImgOpen(2, true)}
                    color='white'
                />
                <Img
                    type='info7'
                    positionX='171px'
                    positionY='113.97px'
                    isImgOpened={imgOpen[3]}
                    closer={() => editImgOpen(3, false)}
                    img={engin4}
                    onClick={() => editImgOpen(3, true)}
                    color='white'
                />
                <Img
                    type='info7'
                    positionX='228px'
                    positionY='58.97px'
                    isImgOpened={imgOpen[4]}
                    closer={() => editImgOpen(4, false)}
                    img={engin5}
                    onClick={() => editImgOpen(4, true)}
                    color='white'
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
                <MapObject type='image/svg+xml' data={map2}>
                    <MapImg src={map2} width='calc(100% - 6px)' />
                </MapObject>
                <MapImg
                    className='point'
                    src={point2}
                    width='calc(100% - 6px)'
                />
                <Img
                    type='info7'
                    positionX='203px'
                    positionY='258px'
                    isImgOpened={imgOpen[5]}
                    closer={() => editImgOpen(5, false)}
                    img={dorm1}
                    onClick={() => editImgOpen(5, true)}
                    color='white'
                />
                <Img
                    type='info7'
                    positionX='274px'
                    positionY='222px'
                    isImgOpened={imgOpen[6]}
                    closer={() => editImgOpen(6, false)}
                    img={dorm2}
                    onClick={() => editImgOpen(6, true)}
                    color='white'
                />
                <Img
                    type='info7'
                    positionX='280px'
                    positionY='187px'
                    isImgOpened={imgOpen[7]}
                    closer={() => editImgOpen(7, false)}
                    img={dorm3}
                    onClick={() => editImgOpen(7, true)}
                    color='white'
                />
                <Img
                    type='info7'
                    positionX='195px'
                    positionY='205px'
                    isImgOpened={imgOpen[8]}
                    closer={() => editImgOpen(8, false)}
                    img={dorm4}
                    onClick={() => editImgOpen(8, true)}
                    color='white'
                />
                <Img
                    type='info7'
                    positionX='248px'
                    positionY='138px'
                    isImgOpened={imgOpen[9]}
                    closer={() => editImgOpen(9, false)}
                    img={dorm5}
                    onClick={() => editImgOpen(9, true)}
                    color='white'
                />
                <Img
                    type='info7'
                    positionX='150px'
                    positionY='216px'
                    isImgOpened={imgOpen[10]}
                    closer={() => editImgOpen(10, false)}
                    img={dorm6}
                    onClick={() => editImgOpen(10, true)}
                    color='white'
                />
                <Img
                    type='info7'
                    positionX='179px'
                    positionY='198px'
                    isImgOpened={imgOpen[11]}
                    closer={() => editImgOpen(11, false)}
                    img={dorm7}
                    onClick={() => editImgOpen(11, true)}
                    color='white'
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
                <MapObject
                    type='image/svg+xml'
                    data={map3}
                    width='198px'
                    height='193px'
                >
                    <MapImg src={map3} width='198px' height='193px' />
                </MapObject>
                <MapImg
                    className='point'
                    src={point3}
                    width='54px'
                    top='59px'
                    left='145px'
                />
                <Img
                    type='info7'
                    positionX='144px'
                    positionY='95px'
                    isImgOpened={imgOpen[12]}
                    closer={() => editImgOpen(12, false)}
                    img={pool1}
                    onClick={() => editImgOpen(12, true)}
                    color='black'
                />
                <Img
                    type='info7'
                    positionX='183px'
                    positionY='59px'
                    isImgOpened={imgOpen[13]}
                    closer={() => editImgOpen(13, false)}
                    img={pool2}
                    onClick={() => editImgOpen(13, true)}
                    color='white'
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

const MapObject = styled.object`
    align-self: center;
`;

const MapImg = styled.img`
    position: relative;
    z-index: 1;
    align-self: center;

    width: ${props => props.width};
    height: ${props => props.height};

    &.point {
        position: absolute;
        z-index: 2;

        top: ${props => props.top};
        left: ${props => props.left};
    }
`;
