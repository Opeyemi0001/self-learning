import { useState } from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "./store/features/counterSlice"


function App() {
const count = useSelector((state) => state.counter.value)
const dispatch = useDispatch()
const [inputAmount, setInputAmount] = useState('')

function handleIncrement() {
  dispatch(increment())
}

function handleDecrement() {
  dispatch(decrement())
}

function handleIncrementByAmount() {
  const number = Number(inputAmount)
  if (!isNaN(number)) {
    dispatch(incrementByAmount(number)) // we are sending the number as payload
    setInputAmount('')
  }
}

  return (
    <>
    <h2>Redux ToolKit Counter</h2>

    <button onClick={handleIncrement}> + </button>
    <p>count {count}</p>
    <button onClick={handleDecrement}> - </button>

    <input 
    type="number"
    value={inputAmount}
    onChange={(e) => setInputAmount(e.target.value)}
    placeholder="Enter amount"
    />
    <button onClick={handleIncrementByAmount}>Increment by Amount</button>
    </>
  )
}

export default App
