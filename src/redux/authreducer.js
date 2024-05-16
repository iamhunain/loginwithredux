import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
}


export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginuser: (state = initialState, action) => {
            switch (action.payload.type) {
                case 'LOGIN':
                    return {
                        ...state,
                        isAuthenticated: true,
                    };
                case 'LOGOUT':
                    return {
                        ...state,
                        isAuthenticated: false,
                    };
                default:
                    return state;
            }
        }
    }
})


export const { loginuser } = auth.actions


export default auth.reducer