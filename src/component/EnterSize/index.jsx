import React from 'react';
import styles from './style.module.css';

export default function EnterSize({ n, setN, isMobile }) {
  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value);
    setN(newValue < 0 ? 0 : (isNaN(newValue) ? 0 : newValue));
  };

  return (
    <div className={styles.enterSize}>
      <label>Enter size of 2D array {isMobile?"":"(Square Matrix):"}</label>
      <input type="number" value={n} onChange={handleInputChange} max={9}/>
    </div>
  );
}
