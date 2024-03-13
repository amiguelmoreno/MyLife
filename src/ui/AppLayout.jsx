import Sidebar from "./Sidebar";

function AppLayout({ children }) {
  return (
    <div className='h-screen relative'>
      <Sidebar></Sidebar>
      {children}
    </div>
  );
}

export default AppLayout;
