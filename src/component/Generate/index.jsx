import styles from './style.module.css'
export default function Generate({solveEquations}) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={solveEquations}>Generate</button>
    </div>
  )
}
