import { createSlice } from "@reduxjs/toolkit";
export interface UserState {
    user: any;
    token: string | null;
    loading: boolean;
    error: string | null;

}

const initialState: UserState = {

    user: null,
    token: null,
    loading: false,
    error: null,

}
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        setUserSuccess: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.loading = false;
            state.error = null;
        },
        setUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
            state.token = null;
            state.loading = false;
            state.error = null;
        }
    }
})

export const { setUserStart, setUserSuccess, setUserFailure, removeUser } = userSlice.actions;

export default userSlice.reducer;