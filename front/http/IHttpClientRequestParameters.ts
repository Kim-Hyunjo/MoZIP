export interface IHttpClientRequestParameters<T> {
    url: string
    requiresToken: boolean
    payload?: T
}