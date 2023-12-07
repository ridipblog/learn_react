import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";
const UserSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            state.splice(action.payload, 1);
        },
        // deleteUsers(state, action) {
        //     return [];
        // }
    },
    // extraReducers(builder) {
    //     builder.addCase(UserSlice.actions.deleteUsers, () => {
    //         return [];
    //     })
    // }

    extraReducers(builder) {
        builder.addCase(clearAllUsers, () => {
            return [];
        })
    }
});
export default UserSlice.reducer;
export const { addUser } = UserSlice.actions;
export const { removeUser } = UserSlice.actions;
export const { deleteUsers } = UserSlice.actions;
