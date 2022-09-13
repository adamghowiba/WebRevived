/* eslint-disable dot-notation */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import fetch, { RequestInit } from 'node-fetch';

type RequestMethod = 'get' | 'post' | 'put' | 'delete';

export default class ClickUpRequest {
	method!: RequestMethod;

	clickUpUrl: string;

	token: string;

	constructor(token: string) {
		this.token = token;
		this.clickUpUrl = 'https://api.clickup.com/api/v2';
	}

	async request<T = unknown>(
		endpoint: string,
		method: RequestMethod,
		params?: { [key: string]: string },
		data = {}
	): Promise<T> {
		const requestData: RequestInit = {
			method,
			headers: {
				Authorization: this.token,
				'Content-Type': 'application/json'
			}
		};

		if (Object.values(data).length) requestData['body'] = JSON.stringify(data);

		const urlParams = new URLSearchParams();
		if (params) Object.entries(params).forEach(([key, value]) => urlParams.set(key, value));

		const response = await fetch(`${this.clickUpUrl}${endpoint}?${urlParams.toString()}`, requestData);

		const contentType = response.headers.get('Content-Type');

		const isJsonResponse = contentType && contentType.split(';')[0] === 'application/json';
		const result: T = await (isJsonResponse ? response.json() : response.text());

		return result;
	}

	async get<T>(route: string, params?: { [key: string]: string }) {
		return this.request<T>(route, 'get', params);
	}

	async post<T>(route: string, body?: { [key: string]: any }, params?: { [key: string]: string }) {
		return this.request<T>(route, 'post', params, body);
	}
}
