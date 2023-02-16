import http, {ApiResponse} from './http';

export const all = (): Promise<AllMonitor> => {
	return new Promise((resolve, reject) => {
		http.get('/monitors').then((data) => resolve(data.data)).catch(reject);
	});
};

interface AllMonitor extends ApiResponse {
	data: Monitor[];
}

export interface Monitor {
	_id: number;
	name: string;
	host: string;
	type: number;
	maintenance: boolean;
}
