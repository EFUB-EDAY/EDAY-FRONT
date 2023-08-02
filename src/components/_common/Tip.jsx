import imageSrc from '../../assets/_common/tip_icon.svg';
import styled from 'styled-components';

const Tip = () => {
    return (
        <TipStyle>
            <img src={imageSrc} />
        </TipStyle>
    );
};

export default Tip;

const TipStyle = styled.div`
    margin-left: 20px;
    margin-right: 14px;
`;
