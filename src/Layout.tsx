import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Nav"; // Assuming NavBar is in the same folder

const Layout: React.FC = () => {
  return (
    <div>
      <NavBar />
      {/* Outlet will render the nested route content here */}
      <Outlet />
    </div>
  );
};

export default Layout;
