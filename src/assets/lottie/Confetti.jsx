import Lottie from 'lottie-react';
import src from './lottieconfetti.json';

const Confetti = props => {
    const { width } = props;
    const style = {
        width: width,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    return (
        <div style={style}>
            <Lottie animationData={src} />
        </div>
    );
};

export default Confetti;
