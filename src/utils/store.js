import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slice"
const store = configureStore({
    reducer: {
        app: appSlice
    }
});
export default store;
