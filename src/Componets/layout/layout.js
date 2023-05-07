import React from "react";
import Header from "../Home/header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    
      <Header />

      <Outlet />
    </>
  );
};

export default Layout;
