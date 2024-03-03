import styles from './style.module.css'
export default function Header({method,setMethod}) {


  return (
    <>
    <header className={styles.header}>
        <div 
            onClick={()=>setMethod('jacobi')} 
            className={styles.headerOption}
            style={method==='jacobi'?{backgroundColor:'rgba(255, 94, 26, 1)'}:{}}
        >
            Jacobis
        </div>
        <div 
            onClick={()=>setMethod('gauss')} 
            className={styles.headerOption}
            style={method==='gauss'?{backgroundColor:'rgba(255, 94, 26, 1)'}:{}}
        >
            Gauss Siedel
        </div>
    </header>
    </>
  )
}
