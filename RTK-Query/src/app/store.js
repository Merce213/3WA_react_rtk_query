import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./services/pokemon";

export default configureStore({
	reducer: {
		[pokemonApi.reducerPath]: pokemonApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(pokemonApi.middleware),
});
