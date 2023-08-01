import Lottie from 'lottie-react';
import src from './lottieconfetti.json';

const Confetti = props => {
    const { width } = props;
    const style = {
        width: width,
    };
    return (
        <div style={style}>
            <Lottie animationData={src} />
        </div>
    );
};

export default Confetti;
