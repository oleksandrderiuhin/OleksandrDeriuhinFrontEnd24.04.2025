import { configureStore } from "@reduxjs/toolkit";
import swapiReducer from "./todoSlice";

export const store = configureStore({
    reducer: {
        swapi: swapiReducer,
    },
});

