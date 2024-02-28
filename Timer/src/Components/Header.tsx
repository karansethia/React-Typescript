import {useTimerContext} from "../store/timers-context.tsx";
import Button from "./UI/Button.tsx";

export default function Header() {
  const ctx = useTimerContext();
  return (
    <header>
      <h1>ReactTimer</h1>
      {ctx.isRunning ? (
        <Button
          el="button"
          onClick={() => {
            ctx.stop();
          }}
        >
          Stop
        </Button>
      ) : (
        <Button
          el="button"
          onClick={() => {
            ctx.start();
          }}
        >
          Start
        </Button>
      )}
    </header>
  );
}
