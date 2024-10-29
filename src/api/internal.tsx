import { API_URL } from "../utils/config";

type ApiBaseResponse = {
  status: 200 | 201 | 204 | 400 | 500;
  message?: string;
};

export type TData = {
  name: string;
  surname: string;
  middle_name: string;
  school: string;
  adress: string;
  email: string;
  phone_number: string;
  city: string;
  status: string;
};

function parseResponse<T>(res: Response): Promise<T> {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}

export const sendRequest = async (body: TData): Promise<ApiBaseResponse> => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/user`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => parseResponse(res));
};



export const getSettings = async () => {
  return await fetch(`${API_URL}/api/v1/settings`)
    .then(response => response.json());
};

export const getProjects = async () => {
  return await fetch(`${API_URL}/api/v1/projects`, { next: {revalidate: 10 }})
    .then(response => response.json());
};

export const getGallery = async () => {
  return await fetch(`${API_URL}/api/v1/gallery`, { next: {revalidate: 10 }})
    .then(response => response.json());
};

