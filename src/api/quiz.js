import client from './client';

// 퀴즈 데이터 get
export const GetQuiz = async dDay => {
    try {
        const response = await client.get(`/quiz/${dDay}`);
        return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error);
    }
};

// 정답 확인
export const PostAnswer= async (dDay,requestBody) => {
    try {
        const response = await client.post(`/quiz/${dDay}`,requestBody);
        return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error);
    }
};
