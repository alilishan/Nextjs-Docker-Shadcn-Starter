import axios from "axios";
import { url } from "inspector";

const UserService = {

    async getUsers() {

        const request = {
            url: 'https://dummyjson.com/users?limit=5&skip=10&select=firstName,age,lastName,hair',
            method: 'GET',
            data: {
            }
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
