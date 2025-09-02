import { createSlice } from "@reduxjs/toolkit"

// Define the initial state of the counter
const initialState = {
  value: 0,
}

// Create a slice for the counter with reducers for incrementing, decrementing, and incrementing by a specific amount
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },

    decrement: (state) => {
      state.value -= 1
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Export the action creators and the reducer
export const { increment, decrement, incrementByAmount} = counterSlice.actions

// Default export the reducer to be used in the store
export default counterSlice.reducer