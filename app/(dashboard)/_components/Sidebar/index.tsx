import React from "react";
import Logo from "../Logo";
import SitebarRouts from "../SiteBarRouts";

function Sidebar() {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <SitebarRouts />
    </div>
  );
}

export default Sidebar;
