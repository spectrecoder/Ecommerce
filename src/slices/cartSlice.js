import {createSlice} from '@reduxjs/toolkit'
import data from '../components/data'

const initialState = {}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const item = data.find(item=>item.id===action.payload.id)
            const key = action.payload.id
            state[key] = {...item, amount: action.payload.amount, price: item.price*action.payload.amount}
        },
        removeCart: (state, action) => {
            const key = action.payload.id
            delete state[key]
        },
        removeAll: (state)=>{
            return {}
        }
    }
})

export const {addCart, removeCart, removeAll} = cartSlice.actions
export const cartItems = (state) =>state.cart
export default cartSlice.reducer