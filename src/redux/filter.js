import { createSlice } from '@reduxjs/toolkit';

export const filter = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        change(state, action) {
            return action.payload;
        },
    },
});

export const { change } = filter.actions;