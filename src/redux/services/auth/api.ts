import { createApi } from "@reduxjs/toolkit/query/react";

import { LogOutRes, SignInReq, SignInRes } from "./type";

import { baseQuery, removeLocalStorage, setLocalStorage } from "@/src/utils/auth";
import { Constants } from "@/src/utils/constnts";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery(),
  endpoints: (builder) => ({
    signIn: builder.mutation<SignInRes, SignInReq>({
      query: (args) => ({
        url: `${Constants.AUTH_ENDPOINT}/login`,
        method: "POST",
        body: args.data,
        validateStatus: (response, result) => {            
          if (response.status === 202 || response.status === 201) {
            if (args.action) args.action();
            return true;
          }
          return false;
        },
      }),
      transformResponse: async (res: SignInRes) => {
        await setLocalStorage(res);
        return res;
      },
    }),
  }),
});

export const logoutApi = createApi({
  reducerPath: "logoutApi",
  baseQuery: baseQuery(),
  endpoints: (builder) => ({
    logOut: builder.mutation({
      query: (arg: { action: () => void }) => ({
        url: `${Constants.AUTH_ENDPOINT}/logout`,
        method: "DELETE",
        validateStatus: (response, result) => {            
          if (response.status === 202 || response.status === 201) {
            if (arg.action) arg.action();
            return true;
          }
          return false;
        },
      }),
      transformResponse: async (res: LogOutRes) => {
        await setTimeout(async () => {
          await removeLocalStorage(true);
        }, 250);
        return res;
      },
    }),
  }),
});

export const { useSignInMutation } = authApi;
export const { useLogOutMutation } = logoutApi;
