import styles from './style.module.css'
export default function EnterAssigned({n,handleBInputChange,isMobile}) {
  return (
    <div className={styles.enterAssigned}>
      {
        !isMobile && <p>Enter Values to the right side of equation</p>
      }
        {[...Array(parseInt(n)).keys()].map(i => (
            <input key={i} type="number" onChange={(e) => handleBInputChange(e, i)} placeholder={`b[${i}]`} />
        ))}
    </div>
  )
}
