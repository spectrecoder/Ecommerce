import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import showReducer from './slices/showSlice'
import filterReducer from './slices/filterSlice'
import messageReducer from './slices/messSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        show: showReducer,
        filter: filterReducer,
        message: messageReducer
    }
})

export default store