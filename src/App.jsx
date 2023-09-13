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

  return (
    <>
    <div>
      <h1>Counter: {counter}</h1>
      {/* <button onClick={()=>setCounter(counter+1)}>Add</button> */}
      {/* 
      () => dispatch({}) 
         dispatch sends the object to the reducer as the action param
      */}
      <button onClick={() => dispatch(
        {
          type: 'Add'
        }
      )}>Add reducer</button>
    </div>
     
    </>
  )
}

export default App
