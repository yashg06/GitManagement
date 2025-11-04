import React, { useEffect, useState } from 'react'

const LocalStorge = () => {
    const [name,setName]=useState('');
    useEffect(()=>{
        if(name){
            localStorage.setItem("user",name)
        }
    })

    useEffect(()=>{
        const getName=localStorage.getItem("user");
        if(getName){
            setName(getName);
        }
    })

  return (
    <>
        <input type="text" value={name} onChange={(e)=>setName(e.currentTarget.value)} />
        <p>Name is: {name || "Stranger"}</p>
    </>
  )
}

export default LocalStorge