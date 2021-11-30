import {createSlice} from '@reduxjs/toolkit'
import data from '../components/data'

const initialState = [...data]

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filtering: (state, action) => {
            return data.filter(item => item.category.includes(action.payload))
        }
    }
})

export const {filtering} = filterSlice.actions
export default filterSlice.reducer
export const filterItems = (state) => state.filter 