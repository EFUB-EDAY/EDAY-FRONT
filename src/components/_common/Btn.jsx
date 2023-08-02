import '../../styles/BtnStyle.css';

const Btn = ({ text, type, onClick }) => {
    const btnType = ['deepGreen', 'lightGreen'].includes(type)
        ? type
        : 'default';
    //회색 버튼이 default type 안 넣으면 자동 회색 버튼.

    return (
        <button
            className={['Btn', `Btn_${btnType}`].join(' ')}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

Btn.defaultProps = {
    type: 'default',
};

export default Btn;
