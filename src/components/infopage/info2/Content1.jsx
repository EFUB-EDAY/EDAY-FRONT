import React from 'react';
import styled from 'styled-components';
import '../../../styles/InfoContentStyle.css';
import table1 from '../../../assets/infopage/d2/table1.png';
import Title from '../../_common/Title';
import GreenBorder from '../../_common/GreenBorder';
import InfoContent from '../../_common/InfoContent';
import Tip from '../../_common/Tip';

const Content1 = () => {
    return (
        <>
            <Wrapper>
                <Title num='1.' title='채플이 뭔가요?' />
                <GreenBorder type='info' />
                <InfoContent
                    text={`채플은 훈련학점이라고도 하는데요. 졸업 전까지 총 8학점을 취득해야 합니다. 다만, 훈련학점은 졸업학점에 포함되지는 않아요! 졸업학점과는 별개로 충족해야 하는 졸업 요건 중 하나입니다.`}
                    type='top'
                />
                <InfoContent
                    text={`한 학기에 1학점씩 매 학기 수강하는 것이 원칙이에요. 이전 학기에 수강하지 않은 경우에만 다음 학기에 추가로 들을 수 있습니다. 하지만, 다음 학기에 예정된 채플을 미리 듣진 못해요!`}
                />
                <InfoContent
                    text={`힐링 채플, 명상 채플, 성탄 채플 등 매주 주제에 따라 다양한 채플이 진행됩니다. 뮤지컬 채플, 공연 채플이 열리면 초청 배우나 벗들의 공연을 볼 수도 있어요.`}
                />
                <Title num='2.' title='채플은 어떻게 진행되나요?' />
                <GreenBorder type='info' />
                <InfoContent
                    text={`채플은 일반적으로 3월 말부터 5월까지 총 8주 동안 진행돼요. 중간고사 기간(2주)과 공휴일에는 채플이 없습니다. 매일 오전 10시 또는 11시 30분부터 30분 동안 진행돼요.`}
                    type='top'
                />
                <img src={table1} />
                <br />
                <InfoContent
                    text={`장소는 대강당! 정시에 대강당 문이 닫혀요. 지각생은 받아주지 않으니 일찍 오는 걸 추천해요. 이대역과 대강당은 생각보다 멀어요.`}
                />
                <InfoContent
                    text={`들어가면서 입구에 있는 카드 리더기에 학생증을 태깅하고, 지정된 좌석에 앉으면 출석이 인정돼요. 채플에 갈 때는 꼭 학생증을 챙기고 지정 좌석에 앉았는지 확인하세요!`}
                />
                <InfoContent
                    text={`※ 의과대학 의학과 학생의 경우 월요일 12:40~13:10, 마곡 의과대학 3동 대강당(계림홀)에서 진행됩니다.`}
                />
                <Title num='3.' title='채플도 수강신청해야 하나요?' />
                <GreenBorder type='info' />
                <InfoContent
                    text={`채플은 단과대와 학년에 따라 정해진 시간대로 자동 수강신청됩니다. 따라서 직접 수강신청할 필요는 없어요! 다만, 채플 시간을 바꾸고 싶거나 저번 학기에 미뤄둔 채플을 추가로 들어야 하는 경우에는 따로 수강신청하면 됩니다.`}
                    type='top'
                />
            </Wrapper>
            <Tip />
            <Wrapper>
                <InfoContent
                    text={`최대한 채플을 적게 듣고 싶다면, 공휴일이 가장 많은 요일을 노려보세요!`}
                />
            </Wrapper>
            <Tip />
            <Wrapper>
                <InfoContent
                    text={`채플 좌석은 랜덤으로 배정돼요. 좌석이 마음에 들지 않는다면 수강 취소와 신청을 반복해 원하는 좌석이 나올 때까지 도전해 보세요.`}
                />
                <Title num='4.' title='채플을 빠질 수는 없나요?' />
                <GreenBorder type='info' />
                <InfoContent
                    text={`채플은 한 학기에 최대 2번까지 빠질 수 있습니다. 4학년은 예외적으로 3번까지 가능해요.`}
                    type='top'
                />
                <InfoContent
                    text={`만약 2번 넘게 빠졌더라도 기회는 있어요! 일일보충과 특별보충을 신청하면 됩니다. 일일보충은 다른 정규채플 요일에 채플을 듣는 것으로 최대 2번까지 가능해요. 특별보충은 정규채플이 끝나고 추가 기간 동안 진행됩니다.`}
                />
                <div className='InfoContent' style={{ marginRight: '20px' }}>
                    ※ 일일보충 신청 위치
                </div>
                <div className='InfoContent' style={{ marginRight: '20px' }}>
                    [이화포탈정보시스템 - 유레카통합행정 - 수강/채플 - 훈련학점
                    일일보충 신청]
                </div>
                <br />
            </Wrapper>
            <Tip />
            <Wrapper>
                <InfoContent
                    text={`중간고사 이후 일일보충 신청자가 많으니, 결석이 생기면 바로바로 신청하세요! 자리가 없으면 보충을 듣지 못해요.`}
                />
            </Wrapper>
            <Tip />
            <Wrapper>
                <InfoContent
                    text={`결석 기회를 적절히 써먹는 것도 좋지만 성실하게 출석해서 개근상을 노려보는 것도 좋아요. 개근하면 예쁘고 실용적인 이화 굿즈를 받을 수 있습니다.`}
                />
            </Wrapper>
        </>
    );
};

export default Content1;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    img {
        width: calc(100% - 40px);
        margin-left: 20px;
    }
`;
