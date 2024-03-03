"use client"
import GaussSeidelSolver from "@/component/Gauss-Siedel"
import JacobiSolver from "@/component/Jacobis"
import Introduction from "@/component/Introduction"
import Header from "@/component/Header"

import EnterSize from "@/component/EnterSize"
import EnterMatrix from "@/component/EnterMatrix"
import EnterAssigned from "@/component/EnterAssigned"
import EnterX from "@/component/EnterX"
import EnterIteration from "@/component/EnterIteration"

import { useEffect, useState } from "react";
import styles from './page.module.css'
export default function Home(){

  const [isMobile,setIsMobile] = useState(false);
  const [n, setN] = useState(0);
  const [a, setA] = useState(Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => 0)));
  const [b, setB] = useState(Array.from({ length: 10 }, () => 0));
  const [x, setX] = useState(Array.from({ length: 10 }, () => 0));
  const [m, setM] = useState(0);

  const [gaussResults, setGaussResults] = useState([]);
  const [jacobiResults, setJacobiResults] = useState([]);
  const [method,setMethod] = useState('jacobi');

  const handleInputChange = (event, i, j) => {
    const newValue = event.target.value;
    const newArray = [...a];
    newArray[i][j] = newValue;
    setA(newArray);
  };

  const handleBInputChange = (event, i) => {
    const newValue = event.target.value;
    const newArray = [...b];
    newArray[i] = newValue;
    setB(newArray);
  };

  const handleXInputChange = (event, i) => {
    const newValue = event.target.value;
    const newArray = [...x];
    newArray[i] = newValue;
    setX(newArray);
  };

  useEffect(()=>{
    const handleResize=()=>{
      setIsMobile(window.innerWidth<707)
    }
    handleResize()
    window.addEventListener("resize",handleResize);
    return()=>window.removeEventListener("resize",handleResize);
  },[])

  return(
    <>
    <Header method={method} setMethod={setMethod}/>
    <main className={styles.main}>
      <div className={styles.fifty}>
        <Introduction isMobile={isMobile}/>
        <EnterSize n={n} setN={setN} isMobile={isMobile}/>
      </div>
      <div className={styles.fifty}>
        <EnterMatrix n={n} handleInputChange={handleInputChange} isMobile={isMobile}/>
        <EnterAssigned n={n} handleBInputChange={handleBInputChange} isMobile={isMobile}/>
      </div>
      <div className={styles.fifty}>
        <EnterX n={n} handleXInputChange={handleXInputChange} isMobile={isMobile}/>
        <EnterIteration m={m} setM={setM} isMobile={isMobile}/>
      </div>
      {
        method==='jacobi'?(
          <>
          <JacobiSolver
            x={x}
            m={m}
            n={n}
            a={a}
            b={b}
            results={jacobiResults}
            setResults={setJacobiResults}
          />
          </>
        ):(
          <>
          <GaussSeidelSolver
            x={x}
            m={m}
            n={n}
            a={a}
            b={b}
            results={gaussResults}
            setResults={setGaussResults}
          />
          </>
        )
      }
      
      
    </main>
    </>
  )
}