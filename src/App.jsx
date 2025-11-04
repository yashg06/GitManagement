// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// ------------------------------------------------><---------------------------------------------------

import Counter from "./components/Counter";
import Home from "./components/Home";
import InputChange from "./components/InputChange";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BooleanExample from "./components/BooleanExample";
import ArrayExample from "./components/ArrayExample";
import ObjExample from "./components/ObjExample";
import UseEffectBasic from "./components/UseEffectBasic";
import TitleUpdate from "./components/TitleUpdate";
import Dependencies from "./components/Dependencies";
import Timer from "./components/Timer";
import FetchBasic from "./components/FetchBasic";
import PerfectFetch from "./components/PerfectFetch";
import ConditionalFetch from "./components/ConditionalFetch";
import LocalStorge from "./components/LocalStorge";


function App() {
  const obj = {
    name: "Wizard",
    age: 71,
  };

  const cards = [
    {
      name: "Card One",
      para: "This is the first card with some details about it.",
      image: reactLogo,
    },
    {
      name: "Card Two",
      para: "This is the second card — contains a short description.",
      image: viteLogo,
    },

  ];

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Hello React!!</h1>

      <Home obj={obj} cards={cards} />
      <br /><br />

      <div style={{ background: "#567076ff", color: "#fff", height: "150px", paddingTop: "40px", borderRadius: "8px", textAlign: "center", width: "50%" }}>
        <Counter /></div>
      <br /><br />

      <div style={{ background: "#3a3a3a", color: "#fff", height: "130px", paddingTop: "40px", borderRadius: "8px", textAlign: "center", width: "50%" }}>
        <InputChange /></div>
      <br /><br />

      <div style={{ background: "#a6d3c5ff", color: "#201818ff", height: "100px", paddingTop: "40px", borderRadius: "8px", width: "50%" }}>
        <BooleanExample /></div>
      <br /><br />

      <ArrayExample />
      <br /><br />

      <div style={{ background: "#3a3a3a", color: "#fff", height: "150px", paddingTop: "40px", borderRadius: "8px", textAlign: "center" }}>
        <ObjExample /></div>

      <div><UseEffectBasic /></div>

      <div><TitleUpdate /></div>
      <br /><br />

      <div style={{ background: "#f9e99aff", color: "#0e0808ff", height: "240px", paddingTop: "20px", borderRadius: "8px", textAlign: "center" }}>
        <Dependencies /></div>
      <br /><br />

      <div><Timer /></div>
      <br /><br />

      <div style={{ background: "#66a5a6ff", color: "#0e0808ff", height: "240px", paddingTop: "20px", borderRadius: "8px"}}>
        <FetchBasic /></div>
      <br /><br />

      <div style={{ background: "#98eba5ff", color: "#0e0808ff", height: "240px", paddingTop: "20px", borderRadius: "8px" }}>
        <PerfectFetch /></div>

      <br /><br />
      <div><ConditionalFetch /></div>

      <br /><br />
      <div><LocalStorge /></div>
    </>
  );
}

export default App;

