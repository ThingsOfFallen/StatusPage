import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://stats.fallenspirit.dev/api'
});

export interface ApiResponse {
	error: boolean;
	code: string;
	data: any;
}

export default instance;
