import { createContext, useContext, useEffect, useReducer } from "react";

const TimerContext = createContext();

const initialState = {
  key: 0,
  time: 3601,
  isRunning: false,
  initialTime: 3601,
};

const timerReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, isRunning: true };
    case "STOP":
      return { ...state, isRunning: false };
    case "RESET":
      return {
        ...state,
        time: state.initialTime,
        isRunning: false,
        key: state.key + 1,
      };
    case "TICK":
      return { ...state, time: state.time - 0.2 };
    default:
      return state;
  }
};

export const TimerProvider = ({ children }) => {
  const storedState =
    /* JSON.parse(localStorage.getItem("timerState")) || */ initialState;
  const [state, dispatch] = useReducer(timerReducer, storedState);

  /*   useEffect(() => {
    localStorage.setItem("timerState", JSON.stringify(state));
  }, [state]); */

  useEffect(() => {
    if (state.time <= 0) {
      dispatch({ type: "RESET" });
    }
  }, [state.time]);

  useEffect(() => {
    let interval;

    if (state.isRunning) {
      interval = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 200);
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
