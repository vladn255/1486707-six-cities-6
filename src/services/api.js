import axios from "axios";

const URL = `https://6.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
  PAGE_NOT_FOUND: 404
};

export const createAPI = (onUnauthorized, onServerError) => {
  const api = axios.create({
    baseURL: URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    } else {
      onServerError();
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
