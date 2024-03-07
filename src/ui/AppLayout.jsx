import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

function AppLayout() {
  return (
    <div className='h-screen relative'>
      <Sidebar></Sidebar>
      <MainContainer>
        <Outlet></Outlet>
      </MainContainer>
    </div>
  );
}

export default AppLayout;
