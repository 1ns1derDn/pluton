import axios from "axios";

import { GetServerSidePropsContext } from "next";

import {
  getRefreshFromStorage,
  getTokenFromStorage,
  REFRESH_STORAGE_KEY,
  removeRefreshFromStorage,
  removeTokenFromStorage,
  setRefreshToStorage,
  setTokenToStorage,
  TOKEN_STORAGE_KEY,
} from "./utils";

import { makeUseAxios } from "axios-hooks";

export const enum StatusCode {
  Unauthorized = 401,
  Success = 200,
  InternalServerError = 500,
  Locked = 423,
  BadRequest = 400,
  NotConfirmed = 412,
  NotFound = 404,
  NoResourceAccess = 403,
  Blocked = 421,
}

export interface IToken {
  access: string;
  refresh: string;
}

export const urls = {
  test: process.env.NEXT_PUBLIC_TEST as string,
  development: process.env.NEXT_PUBLIC_DEVELOPMENT as string,
  production: process.env.NEXT_PUBLIC_PRODUCTION as string,
};

export const http = axios.create({
  baseURL: urls[process.env.NODE_ENV],
});

export const https = axios.create({
  baseURL: urls[process.env.NODE_ENV],
});

export const useAxios = makeUseAxios({
  axios: https,
});

let context = <GetServerSidePropsContext>{
  req: {
    cookies: {},
  },
};

export const setContext = (_context: GetServerSidePropsContext) => {
  context = _context;
};

https.interceptors.request.use((request) => {
  const token = getTokenFromStorage() || context.req.cookies?.[TOKEN_STORAGE_KEY];

  if (token && request.headers) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});

https.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originRequest = error.config;
    const refresh = getRefreshFromStorage() || context.req.cookies?.[REFRESH_STORAGE_KEY];

    if (
      (error.response?.status === StatusCode.Unauthorized ||
        error.response?.status === StatusCode.NoResourceAccess) &&
      refresh
    ) {
      try {
        const {
          data: { access, refresh },
        } = await axios.post<IToken>(`${urls[process.env.NODE_ENV]}/api/v1/token/refresh/`, {
          refresh: getRefreshFromStorage(),
        });

        console.log("data", access, refresh);
        

        setTokenToStorage(access);
        setRefreshToStorage(refresh);

        return https.request(originRequest);
      } catch (error) {
        console.log("error", error.response);
        
        removeRefreshFromStorage();
        removeTokenFromStorage();
        throw error;
      }
    } else {
      throw error;
    }
  }
);
