import React, { useEffect, useState } from 'react'

const TitleUpdate = () => {
    const [title,setTitle]=useState("");
    useEffect(()=>{
        document.title=title
    })
  return (
<>
    <input type="text" placeholder='Write here to change the title ->' onChange={(e)=>setTitle(e.target.value)}/>
</>  
)}

export default TitleUpdate