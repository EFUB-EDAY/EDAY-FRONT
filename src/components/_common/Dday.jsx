import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GetMember } from '../../api/member';
import m1 from '../../assets/_common/ddaytext/mainpage/d1.svg';
import m2 from '../../assets/_common/ddaytext/mainpage/d2.svg';
import m3 from '../../assets/_common/ddaytext/mainpage/d3.svg';
import m4 from '../../assets/_common/ddaytext/mainpage/d4.svg';
import m5 from '../../assets/_common/ddaytext/mainpage/d5.svg';
import m6 from '../../assets/_common/ddaytext/mainpage/d6.svg';
import m7 from '../../assets/_common/ddaytext/mainpage/d7.svg';
import s1 from '../../assets/_common/ddaytext/sidebar/d1.svg';
import s2 from '../../assets/_common/ddaytext/sidebar/d2.svg';
import s3 from '../../assets/_common/ddaytext/sidebar/d3.svg';
import s4 from '../../assets/_common/ddaytext/sidebar/d4.svg';
import s5 from '../../assets/_common/ddaytext/sidebar/d5.svg';
import s6 from '../../assets/_common/ddaytext/sidebar/d6.svg';
import s7 from '../../assets/_common/ddaytext/sidebar/d7.svg';
import s8 from '../../assets/_common/ddaytext/sidebar/dday.svg';
import i1 from '../../assets/_common/ddaytext/infopage/d1.svg';
import i2 from '../../assets/_common/ddaytext/infopage/d2.svg';
import i3 from '../../assets/_common/ddaytext/infopage/d3.svg';
import i4 from '../../assets/_common/ddaytext/infopage/d4.svg';
import i5 from '../../assets/_common/ddaytext/infopage/d5.svg';
import i6 from '../../assets/_common/ddaytext/infopage/d6.svg';
import i7 from '../../assets/_common/ddaytext/infopage/d7.svg';

const Dday = props => {
    const { type, num } = props;
    // type
    // 1. main (24px deepgreen)
    // 2. sidebar (12px white)
    // 3. 전달 생략시 quiz/info (24px lessblack)
    // num
    // 사이드바에서 사용, 생략시 get member api를 통해 가져온 dday 출력

    const [today, setToday] = useState(0);
    useEffect(() => {
        GetMember()
            .then(res => {
                setToday(res.data.profile.dday);
            })
            .catch(err => console.log(err));
    }, []);

    const getSrc = (type, dday) => {
        if (type === 'main') {
            if (dday === 1) return m1;
            else if (dday === 2) return m2;
            else if (dday === 3) return m3;
            else if (dday === 4) return m4;
            else if (dday === 5) return m5;
            else if (dday === 6) return m6;
            else if (dday === 7) return m7;
        } else if (type === 'sidebar') {
            if (dday === 1) return s1;
            else if (dday === 2) return s2;
            else if (dday === 3) return s3;
            else if (dday === 4) return s4;
            else if (dday === 5) return s5;
            else if (dday === 6) return s6;
            else if (dday === 7) return s7;
            else if (dday === 8) return s8;
        } else if (type === null) {
            if (dday === 1) return i1;
            else if (dday === 2) return i2;
            else if (dday === 3) return i3;
            else if (dday === 4) return i4;
            else if (dday === 5) return i5;
            else if (dday === 6) return i6;
            else if (dday === 7) return i7;
        }
    };

    return (
        <>
            {type !== 'sidebar' ? (
                <Container1>
                    <img src={getSrc(type, today)} />
                </Container1>
            ) : (
                <Container2 style={{ marginTop: num === 8 ? '20px' : '0' }}>
                    <img src={getSrc('sidebar', num)} />
                </Container2>
            )}
        </>
    );
};

export default Dday;

const Container1 = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 50px;
    height: 20px;
    margin-bottom: 10px;
`;
const Container2 = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 25px;
    height: 13px;
`;
