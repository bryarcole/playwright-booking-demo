import axios, { AxiosRequestConfig } from "axios";

export class RequestHelper {
    static async sendRequest(config: AxiosRequestConfig){
        try {
            const response = await axios.request(config);
            return response;
        }
        catch (error){
            throw new Error('Request: failed ${error}')
        }
    }
}