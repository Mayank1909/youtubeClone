import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slice"
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
    }
});
export default store;
