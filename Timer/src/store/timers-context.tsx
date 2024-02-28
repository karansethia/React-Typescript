import React, {type ReactNode, createContext} from "react";

type TimerType = {
  name: string;
  duration: number;
};

type TimerStateType = {
  isRunning: boolean;
  timers: TimerType[];
};
type TimerContextMethodType = TimerStateType & {
  add: (timerData: TimerType) => void;
  start: () => void;
  stop: () => void;
};
const TimersContext = createContext<TimerContextMethodType | null>(null);

type TimerContextProviderProps = {
  children: ReactNode;
};

const TimerContextProvider = ({children}: TimerContextProviderProps) => {
  const ctx: TimerContextMethodType = {
    isRunning: false,
    timers: [],
    add: () => {},
    start: () => {},
    stop: () => {},
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};
export default TimerContextProvider;
