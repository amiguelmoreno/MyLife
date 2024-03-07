import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CalendarPage from "./pages/CalendarPage";
import RoutinePage from "./pages/RoutinePage";
import TimerPage from "./pages/TimerPage";
import TasksPage from "./pages/TasksPage";
import { TimerProvider } from "./contexts/timerContext";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <TimerProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout></AppLayout>}>
            <Route index element={<Navigate replace to='routine' />}></Route>
            <Route
              path='calendar'
              element={<CalendarPage></CalendarPage>}
            ></Route>

            <Route path='timer' element={<TimerPage></TimerPage>}></Route>
            <Route path='routine' element={<RoutinePage></RoutinePage>}></Route>
            <Route path='tasks' element={<TasksPage></TasksPage>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </TimerProvider>
  );
}

export default App;
