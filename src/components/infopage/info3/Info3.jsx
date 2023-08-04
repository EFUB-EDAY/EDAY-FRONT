import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import XBtn from '../../_common/XBtn';
import GreenBorder from '../../_common/GreenBorder';
import Dday from '../../_common/Dday';
import InfoBox from '../../_common/InfoBox';
import Btn from '../../_common/Btn';
import Info3Content_1 from './Info3Content_1';
import Info3Content_2 from './Info3Content_2';
import FloatingBtn from '../../_common/FloatingBtn';

// 이미지
import D_3 from '../../../assets/infopage/info3/D_3.svg';

const Info3 = () => {
    const navigate = useNavigate();

    const goMain = () => {
        navigate(`/`);
    };
    const goQuiz = () => {
        navigate('/answer/4');
    };
    //cinfoBox 버튼 눌렸는지
    const [isBtnClicked, setIsBtnClicked] = useState(false);

    return (
        <>
            <Wrapper>
                <Head>
                    <Dday num={'3'} />

                    <XBtn onClick={goQuiz} />
                </Head>
                <InfoTitle>
                    <GreenBorder text={'공강을 보내기 좋은 장소'} />
                </InfoTitle>
                <MapImg>
                    <img
                        src={D_3}
                        style={{
                            marginTop: '40px',
                            marginBottom: '40px',
                        }}
                    />
                </MapImg>

                <InfoBox
                    btnText={'도서관'}
                    content={<Info3Content_1 />}
                    onClick1={() => setIsBtnClicked(!isBtnClicked)}
                />
                <InfoBox
                    btnText={'기타 장소'}
                    content={<Info3Content_2 />}
                    onClick1={() => setIsBtnClicked(!isBtnClicked)}
                />
                <FloatingBtn />
            </Wrapper>

            <BtnStyle isClicked={isBtnClicked}>
                <Btn
                    text={'메인페이지로 돌아가기'}
                    type={'deepGreen'}
                    onClick={goMain}
                />
            </BtnStyle>
        </>
    );
};

export default Info3;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 110px);
`;

const Head = styled.div`
    width: calc(100% - 48px);
    margin-top: 57px;
    /* margin-bottom: 27px; */
    display: flex;
    justify-content: space-between;
`;
const InfoTitle = styled.div`
    width: calc(100% - 48px);
    margin-top: 54px;
`;

const BtnStyle = styled.div`
    text-align: center;

    // margin-bottom: 22px;
    height: 110px;
    transform: translatY(-100%);
`;

const MapImg = styled.div`
    text-align: center;
`;
