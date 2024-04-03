import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VendorsReq, VendorsRes } from "./type";
import { Constants } from "@/src/utils/constnts";
import { baseQuery } from "@/src/utils/auth";

export const vendorsApi = createApi({
  reducerPath: "vendorApi",
  baseQuery: baseQuery(),
  endpoints: (builder) => ({
    vendors: builder.query<VendorsRes, VendorsReq>({
      query: (args) =>
        `${Constants.CLIENTS}/vendors?page=${args.page}&perPage=${args.perPage}`,
    }),
  }),
});

export const { useVendorsQuery } = vendorsApi;
