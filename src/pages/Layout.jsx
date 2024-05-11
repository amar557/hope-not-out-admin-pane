import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Layout() {
  return (
    <>
      <Sidebar />
      <div className="ps-[25%] bg-[#11cdef] min-h-screen py-10">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
