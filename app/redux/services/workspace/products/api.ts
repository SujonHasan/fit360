import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductsRes, ProductsReq } from "./type";

export const wspProductsApi = createApi({
    reducerPath: "wspProductsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3333/back-end/',
    }),
    endpoints: (builder) =>({
        products: builder.query<ProductsRes,ProductsReq>({
            query: (args) => `work-space/products?page=${args.page}&perPage=${args.perPage}`
        })
    })
})

export const {
    useProductsQuery

} = wspProductsApi;