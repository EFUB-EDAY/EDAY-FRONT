import client from './client';

//칭호 get
export const GetTitle = async() => {
    try {
        const response = await client.get(`/titles`);
        return Promise.resolve(response);
       
    } catch (error) {
        return Promise.reject(error);
    }
};
