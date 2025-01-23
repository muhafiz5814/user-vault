// Configure a redux store to manage global states throughout the project.
import { configureStore } from "@reduxjs/toolkit";

import { userApi } from "./APISlice";

const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(userApi.middleware)
});

export default store;