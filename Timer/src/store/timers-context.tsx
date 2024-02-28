import {type ReactNode, createContext, useContext, useReducer} from "react";

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

export const useTimerContext = () => {
  const ctx = useContext(TimersContext);
  if (ctx === null) {
    throw new Error("Context is null");
  }
  return ctx;
};

type TimerContextProviderProps = {
  children: ReactNode;
};

// useReducer implementation for adding state to timer context
const initialState: TimerStateType = {
  timers: [],
  isRunning: false,
};
type StartTimerType = {
  type: "START_TIMER";
};
type StopTimerType = {
  type: "STOP_TIMER";
};
type AddTimerType = {
  type: "ADD_TIMER";
  payload: TimerType;
};
type ActionType = AddTimerType | StopTimerType | StartTimerType;

function timerReducer(
  state: TimerStateType,
  action: ActionType
): TimerStateType {
  if (action.type === "ADD_TIMER") {
    return {
      ...state,
      timers: [...state.timers, {...action.payload}],
    };
  }
  if (action.type === "START_TIMER") {
    return {...state, isRunning: true};
  }
  if (action.type === "STOP_TIMER") {
    return {...state, isRunning: false};
  }
  return state;
}

const TimerContextProvider = ({children}: TimerContextProviderProps) => {
  const [timerState, dispatchTimer] = useReducer(timerReducer, initialState);
  const ctx: TimerContextMethodType = {
    isRunning: timerState.isRunning,
    timers: timerState.timers,
    add: (timerData) => {
      dispatchTimer({type: "ADD_TIMER", payload: timerData});
    },
    start: () => {
      dispatchTimer({type: "START_TIMER"});
    },
    stop: () => {
      dispatchTimer({type: "STOP_TIMER"});
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};
export default TimerContextProvider;
