import { createReducer } from "@reduxjs/toolkit";

export const DataReducer = createReducer({}, (builder) => {
	builder
		.addCase("DATA_REQUEST", (state) => {})
		.addCase("DATA_SUCCESS", (state, action) => {
			state.allTickets = action.payload.tickets;
			state.allUser = action.payload.users;
		})
		.addCase("DATA_FAILURE", (state) => {
			state.allTickets = [];
			state.allUser = [];
		});
});

export const SelectDataReducer = createReducer({}, (builder) => {
	builder
		.addCase("SELECT_DATA_REQUEST", (state) => {
			state.showData = [];
		})
		.addCase("SELECT_DATA_SUCCESS", (state, action) => {
			state.showData = action.payload.showData;
			state.user = action.payload.user;
		})
		.addCase("SELECT_DATA_FAILURE", (state, action) => {
			state.showData = [];
			state.message = action.payload.message;
		});
});
