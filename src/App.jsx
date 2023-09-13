import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import counterReducer from './reducers/counterReducer'

function App() {
// const [counter, setCounter] = useState(0)

// const [state, dispatch] = useReducer(first, second, third)
// useReducers sets 2 parameters
// the first the the state
// the second is the dispatch to set the state
// useReducers takes in 3 parameters, usually 2
// first is the reducer function
// second is the initial value

const [counter, dispatch] = useReducer(counterReducer, 10)

const [inputValue, setInputValue] = useState(0)

const mathArr = ['+', '-']

  return (
    <>
    <div>
      <h1>Counter: {counter}</h1>
      <input 
        type='number'
        onChange={e => setInputValue(parseInt(e.target.value))}
      />
      <br />
      {/* <button onClick={()=>setCounter(counter+1)}>Add</button> */}
      {/* 
      () => dispatch({}) 
         dispatch sends the object to the reducer as the action param
      */}
      <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
      {/* button that sets the state to 42 */}
      <button onClick={() => dispatch({type: 42})}>The Ultimate Answer</button>
      <button onClick={() => dispatch({type: 'increment'})}>++Increment++</button>
      <button onClick={() => dispatch({type: 'decrement'})}>--Decrement--</button>
      <br />
      {/* <button onClick={() => dispatch(
        {
          type: '+',
          value: inputValue
        }
      )}>+</button>
            <button onClick={() => dispatch(
        {
          type: '-',
          value: inputValue
        }
      )}>-</button>
       */}
       
      {/* Make a map function that buils a button for each index of the Math array */}

    </div>

     
    </>
  )
}

export default App
