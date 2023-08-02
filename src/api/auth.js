import client from './client';

export const KakaoLogin = async code => {
    try {
        const response = await client.post('/member/auth', { code: `${code}` });

        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error);
    }
};
