import Sidebar from "./Sidebar";

function AppLayout({ children }) {
  return (
    <div>
      <Sidebar></Sidebar>
      {children}
    </div>
  );
}

export default AppLayout;
