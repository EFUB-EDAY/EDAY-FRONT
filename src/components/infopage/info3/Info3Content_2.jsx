import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useBodyScrollLock } from '../useBodyScrollLock';

import InfoContent from '../../_common/InfoContent';
import Title from '../../_common/Title';
import GreenBorder from '../../_common/GreenBorder';
import Img from '../../_common/Img';

//이미지
import momo from '../../../assets/infopage/info3/momo.svg';
import fitness from '../../../assets/infopage/info3/fitness.svg';
import rest from '../../../assets/infopage/info3/rest.svg';
import tomorrow from '../../../assets/infopage/info3/tomorrow.svg';
import ecc_shinhan from '../../../assets/infopage/info3/ecc_shinhan.svg';
import stair from '../../../assets/infopage/info3/stair.svg';
import hm_fitness from '../../../assets/infopage/info3/hm_fitness.svg';
import sleep from '../../../assets/infopage/info3/sleep.svg';
import theLounge from '../../../assets/infopage/info3/theLounge.svg';
import smartLounge from '../../../assets/infopage/info3/smartLounge.svg';
import psc from '../../../assets/infopage/info3/psc.svg';
import ac_ttb from '../../../assets/infopage/info3/ac_ttb.svg';
import ac_lounge from '../../../assets/infopage/info3/ac_lounge.svg';
import jg_lounge from '../../../assets/infopage/info3/jg_lounge.svg';
import cafe from '../../../assets/infopage/info3/cafe.svg';

const Info3Content_2 = () => {
    const [isImgOpened, setIsImgOpened] = useState(Array(16).fill(false));
    const { lockScroll, openScroll } = useBodyScrollLock();

    // 배열의 특정 인덱스의 값을 변경하는 함수
    const setIsImgOpenedAtIndex = (index, value) => {
        setIsImgOpened(prevState => {
            const newState = [...prevState];
            newState[index] = value;
            return newState;
        });
    };

    const opener = index => {
        lockScroll();
        setIsImgOpenedAtIndex(index, true);
    };

    const closer = index => {
        openScroll();
        setIsImgOpenedAtIndex(index, false);
    };

    return (
        <div>
            {/* 1번 */}
            <Title num={'1.'} title={'ECC'} />
            <GreenBorder />
            <InfoContent text={'지하 4층'} type={'both'} />
            <Text_Img>
                <InfoContent
                    text={'a) 아트하우스 모모(독립영화관)'}
                    NoRightMargin={true}
                    noMargin={true}
                />
                <Img
                    onClick={() => opener(0)}
                    closer={() => closer(0)}
                    img={momo}
                    isImgOpened={isImgOpened[0]}
                />
            </Text_Img>
            <InfoContent
                text={
                    '아트하우스 모모에서 영화를 즐겨봐요! 학생증 제시 및 현장 예매 시 1000원 할인을 받을 수 있답니다. 매월 마지막 주 목요일에는 6000원으로 관람 가능합니다.'
                }
            />
            <Text_Img>
                <InfoContent
                    text={'b) 휘트니스센터'}
                    noMargin={true}
                    NoRightMargin={true}
                />
                <Img
                    onClick={() => opener(1)}
                    closer={() => closer(1)}
                    img={fitness}
                    isImgOpened={isImgOpened[1]}
                />
            </Text_Img>
            <InfoContent
                text={
                    ' 개인 PT 및 단체 PT, 클라이밍도 즐겨볼 수 있어요. ECC 휘트니스센터 홈페이지를 이용하여 등록하고 다양한 활동을 체험해 봅시다.'
                }
            />

            <Text_Img>
                <InfoContent
                    text={'c) 잉여마루'}
                    noMargin={true}
                    NoRightMargin={true}
                />
                <Img
                    onClick={() => opener(2)}
                    closer={() => closer(2)}
                    img={rest}
                    isImgOpened={isImgOpened[2]}
                />
            </Text_Img>
            <InfoContent
                text={
                    '편하게 누워있을 수도 있고 밥을 먹어도 되고 공부를 해도 되는 공간이에요.'
                }
            />
            <InfoContent text={'지하 3층'} type={'smallDot'} />

            <Text_Img>
                <InfoContent
                    text={'a) 내일라운지'}
                    noMargin={true}
                    NoRightMargin={true}
                />
                <Img
                    onClick={() => opener(3)}
                    closer={() => closer(3)}
                    img={tomorrow}
                    isImgOpened={isImgOpened[3]}
                />
            </Text_Img>
            <InfoContent
                text={
                    '편안한 분위기 속에서 공강을 즐길 수 있어요. 공부를 해도 좋고 핸드폰으로 밀린 연락에 답장을 해도 좋고 음료를 마시며 공강을 조용하게 즐겨도 좋습니다!'
                }
            />

            <Text_Img>
                <InfoContent
                    text={'b) 열람실'}
                    noMargin={true}
                    NoRightMargin={true}
                />
                <Img
                    onClick={() => opener(4)}
                    closer={() => closer(4)}
                    img={ecc_shinhan}
                    isImgOpened={isImgOpened[4]}
                />
            </Text_Img>
            <InfoContent
                text={`이화 YBM 열람실, 이화 신한 열람실이 있어요!`}
                noMargin={true}
            />
            <InfoContent
                text={
                    '미리 좌석을 발권하여 조용한 분위기 속에서 벗들과 함께 열심히 공부할 수 있는 공간이에요.'
                }
            />
            <InfoContent text={'지하 2층'} type={'smallDot'} />
            <Text_Img>
                <InfoContent
                    text={'a) 열람실'}
                    noMargin={true}
                    NoRightMargin={true}
                />
                <Img
                    onClick={() => opener(5)}
                    closer={() => closer(5)}
                    img={ecc_shinhan}
                    isImgOpened={isImgOpened[5]}
                />
            </Text_Img>
            <InfoContent text={'자유 열람실에서 열심히 공부해보아요.'} />
            <InfoContent text={'b) 잉글리쉬라운지'} noMargin={true} />
            <InfoContent
                text={
                    '교환학생들과 영어로 편하게 이야기를 나누며 영어 실력을 키울 수 있는 공간이에요!'
                }
            />

            <Text_Img>
                <InfoContent
                    text={'c) 잉여계단'}
                    noMargin={true}
                    NoRightMargin={true}
                />
                <Img
                    onClick={() => opener(6)}
                    closer={() => closer(6)}
                    img={stair}
                    isImgOpened={isImgOpened[6]}
                />
            </Text_Img>
            <InfoContent
                text={
                    '편하게 누워있을 수도 있고 밥을 먹어도 되고 공부를 해도 되는 공간이에요!'
                }
            />

            {/* 2번 */}
            <Title num={'2.'} title={'학문관'} />
            <GreenBorder />
            <InfoContent text={'지하 1층'} type={'both'} />
            <Text_Img>
                <InfoContent
                    text={'a) 체력단련실'}
                    noMargin={true}
                    NoRightMargin={true}
                />
                <Img
                    onClick={() => opener(7)}
                    closer={() => closer(7)}
                    img={hm_fitness}
                    isImgOpened={isImgOpened[7]}
                />
            </Text_Img>
            <InfoContent
                text={'이 곳에서 체력을 길러 보아요.'}
                noMargin={true}
            />
            <InfoContent
                text={
                    '※ 유레카 통합 행정에서 사회 체육 프로그램 수강 신청이 가능해요.'
                }
            />
            <InfoContent text={'1층'} type={'smallDot'} />

            <Text_Img>
                <InfoContent
                    text={'a) 수면실'}
                    noMargin={true}
                    NoRightMargin={true}
                />
                <Img
                    onClick={() => opener(8)}
                    closer={() => closer(8)}
                    img={sleep}
                    isImgOpened={isImgOpened[8]}
                />
            </Text_Img>
            <InfoContent
                text={'공강시간에 잠을 잘 수 있어요!'}
                noMargin={true}
            />
            <InfoContent text={'※ 실물 학생증 지참은 필수!'} />

            <Text_Img>
                <InfoContent
                    text={'b) THE라운지'}
                    noMargin={true}
                    NoRightMargin={true}
                />
                <Img
                    onClick={() => opener(9)}
                    closer={() => closer(9)}
                    img={theLounge}
                    isImgOpened={isImgOpened[9]}
                />
            </Text_Img>
            <InfoContent
                text={
                    '편안한 분위기 속에서 공부를 할 수 있어요! 음료를 마시며 밀린 과제를 끝내 보아요.'
                }
            />

            {/* 3번 */}
            <Title num={'3.'} title={'포스코관'} />
            <GreenBorder />
            <InfoContent text={'지하 1층'} type={'both'} />

            <Text_Img>
                <InfoContent
                    text={'a)  스마트라운지'}
                    noMargin={true}
                    NoRightMargin={true}
                />
                <Img
                    onClick={() => opener(10)}
                    closer={() => closer(10)}
                    img={smartLounge}
                    isImgOpened={isImgOpened[10]}
                />
            </Text_Img>
            <InfoContent text={'편안한 분위기 속에서 공강을 즐길 수 있어요.'} />
            <InfoContent text={'6층'} type={'smallDot'} />

            <Text_Img>
                <InfoContent
                    text={'a)  열람실'}
                    noMargin={true}
                    NoRightMargin={true}
                />
                <Img
                    onClick={() => opener(11)}
                    closer={() => closer(11)}
                    img={psc}
                    isImgOpened={isImgOpened[11]}
                />
            </Text_Img>
            <InfoContent text={'밀린 과제 및 공부를 할 수 있어요.'} />

            {/* 4번 */}
            <Title num={'4.'} title={'아산공학관 / 신공학관'} />
            <GreenBorder />
            <InfoContent text={'지하 2층'} type={'both'} />

            <Text_Img>
                <InfoContent
                    text={'a)  팀프로젝트토론방'}
                    noMargin={true}
                    NoRightMargin={true}
                />
                <Img
                    onClick={() => opener(12)}
                    closer={() => closer(12)}
                    img={ac_ttb}
                    isImgOpened={isImgOpened[12]}
                />
            </Text_Img>
            <InfoContent
                text={
                    '식사도 가능하고 토론도 가능하고 대화도 가능한 공간이에요.'
                }
            />
            <InfoContent text={'2층'} type={'smallDot'} />
            <Text_Img>
                <InfoContent
                    text={'a)  유연학습공간, Ewha Learning Space'}
                    noMargin={true}
                    NoRightMargin={true}
                />
                <Img
                    onClick={() => opener(13)}
                    closer={() => closer(13)}
                    img={ac_lounge}
                    isImgOpened={isImgOpened[13]}
                />
            </Text_Img>
            <InfoContent
                text={
                    '라운지에서 편안한 분위기 속에서 공강을 즐길 수 있습니다!'
                }
            />

            {/* 5번 */}
            <Title num={'5.'} title={'종합과학관'} />
            <GreenBorder />
            <Overlay>
                <InfoContent
                    text={
                        'D동 유연학습공간, Ewha Learning Space 라운지에서 공부, 과제 등을 하며 공강 시간을 보낼 수 있어요.'
                    }
                    type={'top'}
                />
                <ImgWrapper>
                    <Img
                        onClick={() => opener(14)}
                        closer={() => closer(14)}
                        img={jg_lounge}
                        isImgOpened={isImgOpened[14]}
                    />
                </ImgWrapper>
            </Overlay>

            {/* 6번 */}
            <Title num={'6.'} title={'국제교육관'} />
            <GreenBorder />
            <Overlay>
                <InfoContent
                    text={
                        '카페 아이엔지에서 맛있는 음료 및 디저트를 먹으며 공강 시간을 보낼 수 있어요.'
                    }
                    type={'top'}
                />
                <ImgWrapper2>
                    <Img
                        onClick={() => opener(15)}
                        closer={() => closer(15)}
                        img={cafe}
                        isImgOpened={isImgOpened[15]}
                    />
                </ImgWrapper2>
            </Overlay>

            {/* 7번 */}
            <Title num={'1.'} title={'헬렌관'} />
            <GreenBorder />
            <InfoContent
                text={
                    '카페 블루포트(bluepot)에서 맛있는 음료 및 디저트를 먹으며 공강 시간을 보낼 수 있어요.'
                }
                type={'top'}
            />
            <InfoContent />
        </div>
    );
};

export default Info3Content_2;

//top에 이미지 들어가야할 때 글자랑 이미지랑 묶기
const Text_top = styled.div`
    display: flex;
    align-items: center;
`;

//그외 이미지 들어갈때 글자랑 이미지랑 묶기
const Text_Img = styled.div`
    display: flex;
`;

//두 컴포넌트가 겹칠 수 있도록 만듬 (5,6번)
const ImgWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;

    margin-right: 110px;
    margin-top: 10px;
`;

const Overlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`;

const ImgWrapper2 = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;

    margin-right: 240px;
    margin-top: 10px;
`;
