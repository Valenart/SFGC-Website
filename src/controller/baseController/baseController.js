import { axios } from 'axios';

export class BaseController {

    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async get(endpoint, params = {}) {
        try {
            const response = await this.api.get(endpoint, { params });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async post(endpoint, data = {}) {
        try {
            const response = await this.api.post(endpoint, data);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async put(endpoint, data = {}) {
        try {
            const response = await this.api.put(endpoint, data);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async delete(endpoint) {
        try {
            const response = await this.api.delete(endpoint);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }
}