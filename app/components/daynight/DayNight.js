'use client'
import { useState } from 'react';
import './style.css';
import { WiDaySunny } from "react-icons/wi";

export default function DayNight() {
  const [nightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  return (
    // <div className={`${style.container} ${nightMode ? styles.nightMode : ''}`}>
      <button  onClick={toggleNightMode}>
        <WiDaySunny/>
      </button>
    // </div>
  );
}
