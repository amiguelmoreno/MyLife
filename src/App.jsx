import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RoutinePage from "./pages/RoutinePage";
import TimerPage from "./pages/TimerPage";
import { TimerProvider } from "./contexts/timerContext";
import AnimationLayout from "./ui/AnimationLayout";
import { TaskProvider } from "./contexts/routineContext";

function App() {
  return (
    <TimerProvider>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AnimationLayout></AnimationLayout>}>
              <Route index element={<Navigate replace to='routine' />}></Route>
              <Route path='timer' element={<TimerPage></TimerPage>}></Route>
              <Route
                path='routine'
                element={<RoutinePage></RoutinePage>}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </TimerProvider>
  );
}

export default App;
