import styles from './style.module.css'
export default function Generate({solveEquations,resetState}) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={()=>{solveEquations();resetState();}}>Generate</button>
    </div>
  )
}
