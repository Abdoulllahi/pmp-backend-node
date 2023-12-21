export enum BusinessType {
    "Home"
}

export interface IResponse<T> {
    success: boolean,
    message?: unknown,
    data?: T,
}