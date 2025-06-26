// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// get all data
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://full-eccomerce-fullstack-production.up.railway.app/" }),
  endpoints: (builder) => ({
    getproductsByName: builder.query({
      query: (name) => `products`,
    }),
  }),
});
// get only one product
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://full-eccomerce-fullstack-production.up.railway.app/" }),
  endpoints: (builder) => ({
    getproductByName: builder.query({
      query: (name) => `products/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetproductsByNameQuery } = productsApi;
export const { useGetproductByNameQuery } = productApi;
