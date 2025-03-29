import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar"; 
import React from "react";
import Footer from "./pages/Footer"; 

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-[70px]"> {/* Adjust this padding based on navbar height */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
