import styles from './style.module.css'
export default function EnterX({n,handleXInputChange}) {
  return (
    <div className={styles.enterX}>
        <p>Enter initial values of x</p>
        {[...Array(parseInt(n)).keys()].map(i => (
            <input key={i} type="number" onChange={(e) => handleXInputChange(e, i)} placeholder={`x[${i}]`} />
        ))}
    </div>
  )
}
