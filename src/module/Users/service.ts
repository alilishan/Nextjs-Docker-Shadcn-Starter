import axios from "axios";
import { url } from "inspector";

const UserService = {

    async getUsers(data: { limit: number, skip: number, key?: string, value?: string }) {

        console.log('data', data);


        const params = new URLSearchParams({
            limit: data.limit.toString(),
            skip: data.skip.toString(),
            ...(data.key && { key: data.key }),
            ...(data.value && { value: data.value }),
        }).toString();

        const request = {
            url: data.key ? `https://dummyjson.com/users/filter?${params}` : `https://dummyjson.com/users?${params}`,
            method: 'GET',
        }


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
