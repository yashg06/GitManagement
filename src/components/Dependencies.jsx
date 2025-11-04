import React, { useEffect, useState } from 'react'

const Dependencies = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    useEffect(()=>{
        console.log(`Count A is ${a} b is ${b} c is ${c}`);
    },[a]) // this will only output a in console8
    return (
        <>
            <h1>Count of A is {a}</h1>
            <h1>Count of B is {b}</h1>
            <h1>Count of C is {c}</h1>
            <button onClick={() => {setA(a+1)}}>Increase A</button> &nbsp;&nbsp;
            <button onClick={() => {setB(b+1)}}>Increase B</button> &nbsp;&nbsp;
            <button onClick={() => {setC(c+1)}}>Increase C</button> &nbsp;&nbsp;
        </>
)}

export default Dependencies