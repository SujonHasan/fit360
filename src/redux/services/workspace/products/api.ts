import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductsRes, ProductsReq } from "./type";
import { Constants } from "@/src/utils/constnts";
import { baseQuery } from "@/src/utils/auth";

export const wspProductsApi = createApi({
    reducerPath: "wspProductsApi",
    baseQuery: baseQuery(),
    endpoints: (builder) =>({
        products: builder.query<ProductsRes,ProductsReq>({
            query: (args) => `${Constants.WORK_SPACE}/products?page=${args.page}&perPage=${args.perPage}`
        })
    })
})

export const {
    useProductsQuery

} = wspProductsApi;