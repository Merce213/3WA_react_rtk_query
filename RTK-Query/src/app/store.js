import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./services/pokemon";
import { pastriesApi } from "./services/pastries";

export default configureStore({
	reducer: {
		[pokemonApi.reducerPath]: pokemonApi.reducer,
		[pastriesApi.reducerPath]: pastriesApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			pokemonApi.middleware,
			pastriesApi.middleware
		),
});
