import React from "react";
import { Menu } from "lucide-react";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Sidebar from "../Sidebar";


function MobileSitebar() {
  return (
   
      <Sheet>
        <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition" aria-controls="radix-:R1mcq:" > 
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="bg-white p-0">
            <Sidebar />

      </SheetContent>
   </Sheet>
  );
}

export default MobileSitebar;
