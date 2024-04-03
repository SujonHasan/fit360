import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Constants } from "./constnts";

export const setLocalStorage = async (cookie: SignInRes) => {
  await localStorage.setItem(
    Constants.USER_INFO,
    JSON.stringify(cookie.data.user)
  );

  return cookie;
};

export const removeLocalStorage = async (reload = false) => {
  await localStorage.removeItem(Constants.USER_INFO);
};

export const baseQuery = () => {
  return fetchBaseQuery({
    baseUrl: Constants.BASE_ENDPOINT,
  });
};
