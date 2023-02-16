import http, {ApiResponse} from './http';

export const all = (): Promise<AllStatus> => {
	return new Promise((resolve, reject) => {
		http.get('/status').then((data) => resolve(data.data)).catch(reject);
	});
};

interface AllStatus extends ApiResponse {
	data: Status[];
}

export interface Status {
	id: number;
	time: number;
	alive: boolean;
	monitorId: number;
	monitorName: string;
}
