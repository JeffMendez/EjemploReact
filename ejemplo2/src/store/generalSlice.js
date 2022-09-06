import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 10,
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        increment: (state, {payload}) => {
            state.value += payload
        },
    },
})

export const { increment } = generalSlice.actions