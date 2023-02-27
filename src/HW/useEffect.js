import React from "react";
import { useEffect, useState } from "react";

export default function Timer() {
    // const [count, setCount] = useState(0);
  
    // useEffect(() => {
    //   setTimeout(() => {
    //     setCount((count) => count + 1);
    //   }, 1000);
    // }, []);// add empty brackets to run the effect only on initial render
  
    // return <h1>I've rendered {count} times!</h1>;


//     const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]); // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );

const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
  }