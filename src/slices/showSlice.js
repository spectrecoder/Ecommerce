import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    image: null,
    price: null,
    sale: null,
    id: null,
    active: null
}

const showSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        showItem: (state, action) => {
             return {...action.payload, active:'active'}
        },
        hideItem: (state, action) => {
            return  {
                image: null,
                price: null,
                sale: null,
                id: null,
                active: null
            }
         }
    }
})
export const item = (state) => state.show
export const {showItem, hideItem} = showSlice.actions
export default showSlice.reducer