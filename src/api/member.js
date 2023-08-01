import client from './client';

// 계정 정보 get

export const GetMember = async () => {
    try {
        const response = await client.get('/member');
        return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error);
    }
};
