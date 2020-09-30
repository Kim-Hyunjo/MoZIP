import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { DevelopUrl, TestUrl } from './HttpUrl';
import { IHttpClient } from './IHttpClient';
import { IHttpClientRequestParameters } from './IHttpClientRequestParameters';

export class HttpClient implements IHttpClient {
    // default Http URL
    httpUrl: string = TestUrl;

    get<T>(parameters: IHttpClientRequestParameters<T>): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            // extract the individual parameters
            const { url, requiresToken } = parameters

            // axios request options like headers etc
            const options: AxiosRequestConfig = {
                headers: {}
            }

            // if API endpoint requires a token, we'll need to add a way to add this.
            if (requiresToken) {
                // const token = this.getToken()
                // options.headers.RequestVerificationToken = token
            }

            // finally execute the GET request with axios:
            axios
                .get(this.httpUrl + url, options)
                .then((response: any) => {
                    resolve(response.data as T)
                })
                .catch((response: any) => {
                    reject(response)
                })
        })
    }

    post<T>(parameters: IHttpClientRequestParameters<T>): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const { url, payload, requiresToken } = parameters

            // axios request options like headers etc
            const options: AxiosRequestConfig = {
                headers: {}
            }

            // if API endpoint requires a token, we'll need to add a way to add this.
            if (requiresToken) {
                // const token = this.getToken()
                // options.headers.RequestVerificationToken = token
            }

            // finally execute the GET request with axios:
            axios
                .post(url, payload, options)
                .then((response: any) => {
                    resolve(response.data as T)
                })
                .catch((response: any) => {
                    reject(response)
                })
        })
    }
}

export const httpClient = new HttpClient();