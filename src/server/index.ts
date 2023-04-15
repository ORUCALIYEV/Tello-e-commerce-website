import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "https://api.chec.io/v1",
};

export const api: AxiosInstance = axios.create(config);
