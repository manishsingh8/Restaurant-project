import React, { useEffect, useState } from 'react'

const Incr = () => {
   
    const [num,setNum] = useState(0);

    useEffect(()=>{
       document.title = `Chats(${num})`;
    },[num]);


  return (
    <>
      <h2>{num}</h2>
      <button onClick={()=>setNum(num + 1)}>Click Me</button>
    </>
  )
}

export default Incr;
