import {useTimerContext} from "../store/timers-context.tsx";
import Container from "./UI/Container.tsx";
import {useState, useEffect, useRef} from "react";

type TimerProps = {
  name: string;
  duration: number;
};

export default function Timer({name, duration}: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  const {isRunning} = useTimerContext();
  const interval = useRef<number | null>(null);

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) {
            return prevTime;
          }
          return prevTime - 50;
        });
      }, 50);
      interval.current = timer;
    } else if (!isRunning && interval.current) {
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const timeLeft = Math.ceil(remainingTime / 1000);

  return (
    <Container as="article">
      <h2>TODO: {name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>
        {timeLeft} / {duration}
      </p>
    </Container>
  );
}
