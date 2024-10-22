import { configureStore } from "@reduxjs/toolkit";
import { DataReducer, SelectDataReducer } from "./Data/DataReducer";

const fetcher = configureStore({
	reducer: {
		DataReducer,
		SelectDataReducer,
	},
});

export default fetcher;
