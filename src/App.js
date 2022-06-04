import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./nav";
import Body from "./body";
function App() {
  let [searchterm,setsearchterm]=useState("");
  const handleSearchCallback=(searchData)=>{
    setsearchterm(searchData);
  }
  return (
    <React.Fragment>
      <Nav parentCallback={handleSearchCallback}></Nav>
      <Body searchKey={searchterm}></Body>
    </React.Fragment>
    
    
  )
}

export default App;

// //understanding counter app
// let [count,updateCount]=useState(0);
// useEffect(()=>{
//   alert("component updated");
// },[count]); //useeffect only called when count changes
// useEffect(()=>{
//   alert("component updated");
// },[]); //useeffect called only at first time
// useEffect(()=>{
//   alert("component updated");
// }); //useeffect called everytime when component relaod
// return (
//   <div classNameName="App">
//     <button onClick={()=>updateCount((prev)=>{
//       return prev+1;
//     })}>
//       +
//     </button>
//     <h1>{count}</h1>
//     <button onClick={()=>updateCount((prev)=>{
//       return prev-1;
//     })}>
//       -
//     </button>
//   </div>
// );
