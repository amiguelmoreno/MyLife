import { createContext, useContext, useEffect, useReducer } from "react";
import formatedTime from "../utils/formatedTime";

const alarmSound = new Audio("audio/alarm.mp3");

const TimerContext = createContext();

const initialState = {
  time: 5,
  isRunning: false,
  initialTime: 5,
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
      };
    case "TICK":
      return { ...state, time: state.time - 1 };
    case "UPDATETIME":
      return {
        ...state,
        time: action.payload.timeToAdd,
        initialTime: action.payload.timeToAdd,
      };
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
    if (state.isRunning)
      document.title = `MyRoutine - ${formatedTime(state.time)}`;
    else document.title = `MyRoutine`;
  }, [state.time]);

  useEffect(() => {
    if (state.time <= 0) {
      dispatch({ type: "STOP" });
      alarmSound.play();
      setTimeout(() => {
        alarmSound.pause();
      }, 5000);
    }
  }, [state.time]);

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
