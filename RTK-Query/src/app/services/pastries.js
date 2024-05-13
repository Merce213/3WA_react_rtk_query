import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pastriesApi = createApi({
	reducerPath: "pastriesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3001",
	}),
	endpoints: (builder) => ({
		getPastries: builder.query({
			query: () => "/game/pastries",
		}),
	}),
});

export const { useGetPastriesQuery } = pastriesApi;
