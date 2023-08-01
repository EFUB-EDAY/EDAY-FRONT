import styled from 'styled-components';

const Title = ({ num, title }) => {
    return (
        <TitleStyle>
            <Title_p>{num}</Title_p>
            <Title_p>{title}</Title_p>
        </TitleStyle>
    );
};

export default Title;

const TitleStyle = styled.div`
    display: flex;
    font-family: 'Pretendard-regular';
    font-weight: 600;
    font-size: 16px;
    margin-top: 12px;
    /* margin-bottom: 7.9px; */
    margin-left: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 30px;
`;

const Title_p = styled.p`
    margin-right: 7px;
`;
