import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/userSlice";
const store = configureStore({
    reducer: {
        users: UserSlice
    }
}
);
export default store;
