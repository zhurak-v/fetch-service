import { FetchSerice } from '../../lib';

export const api = new FetchSerice({
    baseUrl: 'https://jsonplaceholder.typicode.com',
    options: {
		credentials: 'include'
	}
});

export const abort_api = new FetchSerice({
    baseUrl: 'https://httpbin.org/',
});