import Sidebar from "./Sidebar";

function AppLayout({ children }) {
  return (
    <div className='s'>
      <Sidebar></Sidebar>
      {children}
    </div>
  );
}

export default AppLayout;
