import styles from './style.module.css'
import { data } from '@/data/introduction'
export default function Introduction({isMobile}) {
    const introduction = ["Name","Class","Enrollment"]
  return (
    <>
    <div className={styles.introduction}>
      {
        !isMobile && <div className={styles.introductionUnit}>
        {
            introduction.map(i=>{
                return <div key={i}>{i}</div>            
            })
        }
        </div>
      }
        
        <div className={styles.introductionUnit}>
            <div>{data.name}</div>
            <div>{data.class}</div>
            <div>{data.enroll}</div>
        </div>
    </div>
    </>
  )
}
