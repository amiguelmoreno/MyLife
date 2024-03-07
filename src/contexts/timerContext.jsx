import { createContext, useContext, useEffect, useReducer } from "react";

const TimerContext = createContext();

const initialState = {
  time: 0,
  isRunning: false,
};

const timerReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, isRunning: true };
    case "STOP":
      return { ...state, isRunning: false };
    case "RESET":
      return { ...state, time: 0, isRunning: false };
    case "TICK":
      return { ...state, time: state.time + 1 };
    default:
      return state;
  }
};

export const TimerProvider = ({ children }) => {
  const storedState =
    JSON.parse(localStorage.getItem("timerState")) || initialState;
  const [state, dispatch] = useReducer(timerReducer, storedState);

  useEffect(() => {
    localStorage.setItem("timerState", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    let interval;

    if (state.isRunning) {
      interval = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [state.isRunning]);

  return (
    <TimerContext.Provider value={{ state, dispatch }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
};
