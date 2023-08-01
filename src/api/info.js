import client from './client';

// 추가 정보 get

export const GetInfo = async dday => {
    try {
        const response = await client.get(`/infos/${dday}`);
        return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error);
    }
};
