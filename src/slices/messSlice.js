import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    class: null,
    message: null
}

const messSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        msg: (state, action) => {
            state.class = action.payload.class
            state.message = action.payload.message
        },
        hideMessage: (state) => {
            state.class = null
            state.message = null
        }
    }
})

export const {msg, hideMessage} = messSlice.actions
export default messSlice.reducer
export const showMessage = (state) => state.message