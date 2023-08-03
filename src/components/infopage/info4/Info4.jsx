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
import FloatingBtn from '../../_common/FloatingBtn';

//img
import D_4 from '../../../assets/infopage/info4/D_4.svg';

const Info4 = () => {
    const navigate = useNavigate();

    const goMain = () => {
        navigate(`/`);
    };

    const goQuiz = () => {
        navigate('/answer/4');
    };

    return (
        <>
            <Wrapper>
                <Head>
                    <Dday num={'4'} />

                    <XBtn onClick={goQuiz}/>
                </Head>
                <InfoTitle>
                <GreenBorder text={'학생 지원'} />
                </InfoTitle>
                <img
                    src={D_4}
                    style={{
                        marginTop: '40px',
                       
                        marginBottom: '40px',
                    }}
                />
                <InfoBox
                    btnText={'학생 지원 서비스'}
                    content={<Info4Content_1 />}
                />
                <InfoBox btnText={'기타 서비스'} content={<Info4Content_2 />} />
                <FloatingBtn />
            </Wrapper>
                <BtnStyle>
                    <Btn
                        text={'메인페이지로 돌아가기'}
                        type={'deepGreen'}
                        onClick={goMain}
                    />
                </BtnStyle>
              
        </>
    );
};

export default Info4;

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
    margin-top: 12px;
    //margin-bottom: 27px;
    display: flex;
    justify-content: space-between;

`;

const BtnStyle = styled.div`
    text-align: center;
   // margin-bottom:34px;
    height: 110px;
    transform: translatY(-100%);
`;

const InfoTitle = styled.div`
    width: calc(100% - 48px);
    margin-top:54px;
`