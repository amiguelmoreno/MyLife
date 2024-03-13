import React, { createContext, useContext, useState } from "react";

const generateRandomTask = () => {
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const days = daysOfWeek.filter(() => Math.random() > 0.5);
  const subtasks = Array.from(
    { length: Math.floor(Math.random() * 5) + 1 },
    (_, index) => `Subtask ${index + 1}`
  );

  return {
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    title: `Task ${Math.floor(Math.random() * 100) + 1}`,
    hour: "",
    days,
    subtasks,
    id: Math.random().toString(36).substr(2, 9),
  };
};

// Creamos el contexto
export const TaskContext = createContext();

// Creamos el proveedor del contexto
export const TaskProvider = ({ children }) => {
  // Estado para almacenar las tareas
  const [tasks, setTasks] = useState(
    Array.from({ length: 20 }, (_, index) => generateRandomTask())
  );

  // Función para agregar una tarea
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Proporcionamos el contexto y las funciones a los componentes hijos
  return (
    <TaskContext.Provider value={{ tasks, addTask, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks debe ser utilizado dentro de un TaskProvider");
  }

  return context;
};
