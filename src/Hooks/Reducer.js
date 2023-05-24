import React, { useReducer } from 'react'



 const reducer =(state,action)=>{
    if(action.type ==="INCR"){
        state = state + 1;
    }
    if(state >0 && action.type === "DCR"){
        state = state - 1;
    }
   return state;
 };


const Reducer = () => {
     
     const initialState = 5;
     const[state,dispatch] = useReducer(reducer,initialState);

  return (
    <>
        <h2>{state}</h2>
      <button onClick={()=>dispatch({type:"INCR"})}>Incr</button>
      <button onClick={()=>dispatch({type:"DCR"})}>Dcr</button>
    </>
  )
}

export default Reducer;
