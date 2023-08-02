import React from 'react';
import styled from 'styled-components';

import XBtn from '../../_common/XBtn';
import GreenBorder from '../../_common/GreenBorder';
import Dday from '../../_common/Dday';
import InfoBox from '../../_common/InfoBox';
import InfoContent from '../../_common/InfoContent';
import Info4Content_1 from './Info4Content_1';
import Info4Content_2 from './Info4Content_2';
import Btn from '../../_common/Btn';
import { useNavigate } from 'react-router-dom';

//img
import D_4 from '../../../assets/infopage/info4/D_4.svg';

const Info4 = () => {
    const navigate = useNavigate();

    const goMain = () => {
        navigate(`/`);
    };

    return (
        <>
            <Wrapper>
                <Head>
                    <Dday num={'4'} />

                    <XBtn />
                </Head>
                <GreenBorder text={'학생 지원'} />
                <img
                    src={D_4}
                    style={{
                        marginTop: '40px',
                        marginLeft: '66px',
                        marginBottom: '40px',
                    }}
                />
                <InfoBox
                    btnText={'학생 지원 서비스'}
                    content={<Info4Content_1 />}
                />
                <InfoBox btnText={'기타 서비스'} content={<Info4Content_2 />} />

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

export default Info4;

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
    margin-bottom: 22px;
    margin-top: 186.98px;
`;
