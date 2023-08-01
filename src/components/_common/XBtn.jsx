import React from 'react';
import styled from 'styled-components';

// assets
import defaultbtn from '../../assets/_common/xbtn_default.svg';
import infobtn from '../../assets/_common/xbtn_info.svg';
import sidebarbtn from '../../assets/_common/xbtn_sidebar.svg';

const XBtn = ({ option, onClick }) => {
    let imageSrc;

    switch (option) {
        // 정보 페이지 정보 창
        case 'info':
            imageSrc = infobtn;
            break;
        // 사이드바
        case 'sidebar':
            imageSrc = sidebarbtn;
            break;
        default:
            imageSrc = defaultbtn;
    }

    return <Btn className={option} src={imageSrc} onClick={onClick} />;
};

export default XBtn;

const Btn = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;

    &.info {
        position: absolute;
        top: 0px;
        right: 0px;
    }
`;
