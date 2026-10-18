import { useCallback, useEffect, useRef, useState } from 'react';

const useGameTimer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const startTimeRef = useRef(null);
  const intervalRef = useRef(null);

  const updateTimer = useCallback(() => {
    if (startTimeRef.current !== null) {
      setElapsedTime(Date.now() - startTimeRef.current);
    }
  }, []);

  const startTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }

    startTimeRef.current = Date.now();

    intervalRef.current = setInterval(() => {
      updateTimer();
    }, 10);
  }, [updateTimer]);

  const stopTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    if (startTimeRef.current === null) {
      return 0;
    }

    const finalTime = Date.now() - startTimeRef.current;

    setElapsedTime(finalTime)
    startTimeRef.current = null;

    return finalTime;
  }, []);

  const resetTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    startTimeRef.current = null;
    setElapsedTime(0);
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return {
    elapsedTime,
    startTimer,
    stopTimer,
    resetTimer,
  };
};

export default useGameTimer;