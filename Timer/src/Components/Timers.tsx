import {useTimerContext} from "../store/timers-context";
import Timer from "./Timer";
export default function Timers() {
  const {timers} = useTimerContext();
  console.log(timers);

  return (
    <ul>
      {timers.map((timer, index) => (
        <li key={index}>
          <Timer name={timer.name} duration={timer.duration} />
        </li>
      ))}
    </ul>
  );
}
