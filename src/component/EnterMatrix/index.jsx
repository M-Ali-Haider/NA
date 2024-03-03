import styles from './style.module.css'
export default function EnterMatrix({n,handleInputChange}) {
  return (
    <div className={styles.enterMatrix}>
      <div>
        {[...Array(parseInt(n)).keys()].map(i => (
            <div key={i}>
                {[...Array(parseInt(n)).keys()].map(j => (
                  <input key={j} type="number" onChange={(e) => handleInputChange(e, i, j)} placeholder={`a[${i}][${j}]`} />
                ))}
            </div>
        ))}
      </div>
    </div>
  )
}
