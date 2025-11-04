import React, { useState } from 'react'

const BooleanExample = () => {
    const [visible,setVisible]=useState(false);
  return (
    <>
    <button onClick={()=>setVisible(!visible)}>{(!visible)?"Unhide":"Hide"}</button>
    {visible && <p>Hello Commander!</p>}
    </>
  )
}

export default BooleanExample