import axios from "axios";

export function httpClient() {
  const config = useRuntimeConfig();

  return axios.create({
    baseURL: config.public.apiUrl,
    withCredentials: true,
    withXSRFToken: true,
  });
}
