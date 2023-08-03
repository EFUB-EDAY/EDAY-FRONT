import client from './client';

export const help= async (memberId, queryContent, dDay) => {
    try {
        const response = await client.post(`/querys`,{
            memberId: memberId,
            queryContent: queryContent,
            dDay: dDay
        });
        console.log(response);
        return Promise.resolve(response);
        
    } catch (error) {
        return Promise.reject(error);
    }
};