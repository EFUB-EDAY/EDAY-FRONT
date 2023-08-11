import client from './client';

// 카카오 로그인
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

// 로그아웃
export const Logout = async () => {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');

    window.location.replace('/login');
};
