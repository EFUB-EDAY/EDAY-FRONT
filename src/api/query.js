import client from './client';

export const help= async (queryContent, dday) => {
    try {
        const response = await client.post(`/querys`,{
            
            queryContent: queryContent,
            dday: dday
        });
        console.log(response);
        return Promise.resolve(response);
        
    } catch (error) {
        return Promise.reject(error);
    }
};