// useReducer - accept two parametes (state, action) then switch casing...

import { useReducer } from "react"

const reducer = (state, action) => {
    switch (action.type){
        case 'increment' :
            return {count : state.count + 1};
        case 'decrement' :
            return {count : state.count - 1};
        case 'reset':
            return {count: 0}
        default:
            return state;
    }
};



const ComponentUseReducer = () => {

    const intialState = { count: 0 }
    
    const [state, dispatch] = useReducer(reducer, intialState)
  return (
    <div>
        <h1>UseReducer for complex manipulation of state.....</h1>
        <p>The logic is separated from the component</p>
        <h4>Count:{state.count} </h4>
        <button className="btn btn-primary" onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button className="btn btn-danger" onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        <button className="btn btn-success" onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default ComponentUseReducer