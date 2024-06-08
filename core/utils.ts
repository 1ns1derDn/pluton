import cookie from "js-cookie";

export const TOKEN_STORAGE_KEY = "token";
export const REFRESH_STORAGE_KEY = "refresh";

export function getTokenFromStorage() {
  return cookie.get(TOKEN_STORAGE_KEY);
}

export function setTokenToStorage(token: string) {
  return cookie.set(TOKEN_STORAGE_KEY, token);
}

export function removeTokenFromStorage() {
  return cookie.remove(TOKEN_STORAGE_KEY);
}

export function getRefreshFromStorage() {
  return cookie.get(REFRESH_STORAGE_KEY);
}

export function setRefreshToStorage(token: string) {
  return cookie.set(REFRESH_STORAGE_KEY, token);
}

export function removeRefreshFromStorage() {
  return cookie.remove(REFRESH_STORAGE_KEY);
}
