import styles from './style.module.css'
export default function EnterIteration({m,setM}) {
  return (
    <div className={styles.enterIteration}>
        <label>Enter the number of iterations: </label>
        <input type="number" value={m} onChange={(e) => setM(e.target.value)} />
    </div>
  )
}
