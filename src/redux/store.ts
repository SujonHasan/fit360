import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";
import { vendorsApi } from "./services/clients/vendors/api";
import { wspProductsApi } from "./services/workspace/products/api";
import { authApi, logoutApi } from "./services/auth/api"

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [logoutApi.reducerPath]: logoutApi.reducer,
    [wspProductsApi.reducerPath]: wspProductsApi.reducer,
    [vendorsApi.reducerPath]: vendorsApi.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(
      authApi.middleware,
      logoutApi.middleware,
      wspProductsApi.middleware,
      vendorsApi.middleware
    ),
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
