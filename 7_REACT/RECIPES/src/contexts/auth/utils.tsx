import { jwtDecode } from "jwt-decode";

export const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }

  const decoded = jwtDecode(accessToken);

  if (!decoded?.exp) {
    return false;
  }

  const currentTime = Date.now() / 1000;
  return decoded.exp > currentTime;
};

export function setLocalStorage(key: string, payload: unknown) {
  const payloadJsonToString = JSON.stringify(payload);
  localStorage.setItem(key, payloadJsonToString);
}

export function getLocalStorage(key: string) {
  const localData: string | null = localStorage.getItem(key);
  if (typeof localData == "string") {
    return JSON.parse(localData);
  } else {
    return [];
  }
}
