import { createSlice } from '@reduxjs/toolkit';
import {asyncHolder, asyncSearch, asyncTitle} from "./asyncAction";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        data: [],
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(asyncSearch.fulfilled,
                (state, action) => {
                    state.data = action.payload;
                })
    },
});


export default searchSlice.reducer;
