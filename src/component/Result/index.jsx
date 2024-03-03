import styles from './style.module.css'
export default function Result({results}) {
  return (
    <>
    <div>
        {console.log(results)}
        {results.map((result, index) => (
            <div key={index}>
                {result.values.map((value, idx) => (
                    <div key={idx}>
                        <p>{value.variable}</p>
                        <p key={idx}>{(value.value).toFixed(4)}</p>
                    </div>
                ))}
                <br />
            </div>
        ))}
    </div>
    </>
  )
}
