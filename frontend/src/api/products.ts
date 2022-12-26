import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "./config";
import { GetProductsResponse } from "./getProducts";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/products` }),
  endpoints: (builder) => ({
    getProducts: builder.query<
      GetProductsResponse,
      { limit: number; page: number }
    >({
      query: ({ limit, page }) => `/?limit=${limit}&page=${page}`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
