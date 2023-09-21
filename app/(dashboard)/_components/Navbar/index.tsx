import React from "react";
import MobileSitebar from "../MobileSitebar";
import NavbarRoutes from "@/components/NavbarRoutes";

function Navbar() {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSitebar />
      <NavbarRoutes />
    </div>
  );
}

export default Navbar;
