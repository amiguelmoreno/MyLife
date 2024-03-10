import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";

const FormTimerContext = createContext();

export const FormTimerProvider = ({ children }) => {
  const methods = useForm();
  return (
    <FormTimerContext.Provider value={methods}>
      {children}
    </FormTimerContext.Provider>
  );
};

export const useFormTimerContext = () => {
  const context = useContext(FormTimerContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormTimerProvider");
  }
  return context;
};
