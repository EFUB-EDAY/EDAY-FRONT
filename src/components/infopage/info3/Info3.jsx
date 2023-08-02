import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

    return (
        <>
            <Wrapper>
                <Head>
                    <Dday num={'3'} />

                    <XBtn />
                </Head>
                <GreenBorder text={'공강을 보내기 좋은 장소'} />
                <MapImg>
                    <img
                        src={D_3}
                        style={{
                            marginTop: '40px',
                            marginBottom: '40px',
                        }}
                    />
                </MapImg>
                <FloatingBtn />
                <InfoBox btnText={'도서관'} content={<Info3Content_1 />} />
                <InfoBox btnText={'기타 장소'} content={<Info3Content_2 />} />

                <BtnStyle>
                    <Btn
                        text={'메인페이지로 돌아가기'}
                        type={'deepGreen'}
                        onClick={goMain}
                    />
                </BtnStyle>
            </Wrapper>
        </>
    );
};

export default Info3;

const Wrapper = styled.div`
    margin-top: 12px;
    margin-right: 24px;
    margin-left: 24px;
`;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 55px;
`;

const BtnStyle = styled.div`
    text-align: center;
    margin-top: 166.98px;
    margin-bottom: 22px;
`;

const MapImg = styled.div`
    text-align: center;
`;
