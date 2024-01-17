import { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }) {
  const [isLogged, setIsLogged] = useState(false);

  const [remainingTime, setRemainingTime] = useState(getRemainingTime(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(getRemainingTime(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  function getRemainingTime(targetDate) {
    const totalSeconds = Math.round((targetDate.getTime() - Date.now()) / 1000);
    if (totalSeconds < 0 && !isLogged) {
      console.log("finished")
      setIsLogged(true)
    }
    if (totalSeconds < 0 ) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return { hours, minutes, seconds };
  }

  function formatTime(time) {
    return time.toString().padStart(2, '0');
  }
  
  return (
    <div>
      <span>{formatTime(remainingTime.hours)}:</span>
      <span>{formatTime(remainingTime.minutes)}:</span>
      <span>{formatTime(remainingTime.seconds)}</span>
    </div>
  );
}

export default CountdownTimer