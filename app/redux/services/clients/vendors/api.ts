import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VendorsReq, VendorsRes } from "./type";

export const vendorsApi = createApi({
  reducerPath: "vendorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3333/back-end/",
  }),
  endpoints: (builder) => ({
    vendors: builder.query<VendorsRes, VendorsReq>({
      query: (args) =>
        `clients/vendors?page=${args.page}&perPage=${args.perPage}`,
    }),
  }),
});

export const { useVendorsQuery } = vendorsApi;
