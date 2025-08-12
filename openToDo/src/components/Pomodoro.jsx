import { useEffect, useState, useRef } from 'react';

const Pomodoro = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutos
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Formatear minutos y segundos
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = (minutes) => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimeLeft(minutes * 60);
  };

  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h2 className="text-8xl">{formatTime()}</h2>

      <div>
        <button
          className="border py-1 px-4 rounded text-xl font-semibold hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
          onClick={handleStartPause}
        >
          {isRunning ? 'Pause' : 'Start'} Time
        </button>
      </div>

      <div className="flex gap-3">
        <button className="border py-1 px-4 rounded hover:bg-gray-100 hover:text-gray-900 cursor-pointer"onClick={() => handleReset(25)}>
          Restart Time (25 min)
        </button>

        <button className="border py-1 px-4 rounded hover:bg-gray-100 hover:text-gray-900 cursor-pointer" onClick={() => handleReset(5)}>
          Rest Time (5 min)
        </button>
      </div>

      {timeLeft === 0 && (
        <div className="flex bg-gray-900 gap-1 border items-center text-white px-2 py-1 rounded">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd"/>
          </svg>
          <p className="my-1 ml-2">Pomodoro finished at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      )}
    </div>
  );
};

export default Pomodoro;
