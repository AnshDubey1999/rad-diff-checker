import axios, { AxiosResponse } from "axios"

// Flask API runs on port 5000
axios.defaults.baseURL = "http://localhost:5000"

export const parseResponse = <T>(response: AxiosResponse<T>): T => response.data;

export type Template = {
    id: number;
    templateText: string;
}

export const getTemplateFromId = (id: string): Promise<Template> => {
    return axios.get<Template>(`/templates/${id}`)
    .then(parseResponse<Template>);
}