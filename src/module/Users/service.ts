import axios from "axios";
import { url } from "inspector";

const UserService = {

    async getUsers(data: { limit: number, skip: number }) {

        const params = new URLSearchParams({
            limit: data.limit.toString(),
            skip: data.skip.toString(),
            select: 'firstName,age,lastName,hair'
        }).toString();

        const request = {
            url: `https://dummyjson.com/users?${params}`,
            method: 'GET',
            data: {
            }
        }

        console.log('request', request.url);


        try {
            const response = await axios.request(request);
            const data = response.data;
            return data;
        } catch (error: any) {
            console.log('Error getting users', error?.response?.data);
            return null;
        }

    }

}


export default UserService;
