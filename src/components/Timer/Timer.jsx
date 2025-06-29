import { useRef, useState } from "react";

export const Timer = () => {
  const timerRef = useRef(null);

  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    const interval = setInterval(() => {
      setSeconds((prevState) => prevState + 1);
    }, 1000);

    timerRef.current = interval;
  }

  const stopTimer = () => {
    clearInterval(timerRef.current);
  }

  return (
    <>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <h3>{seconds}</h3>
    </>
  );
}