"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { BarChart, Compass, Layout, List, LucideIcon } from "lucide-react";


import SidebarItem from "../SidebarItem";

interface Route {
  icon:  LucideIcon
  href: string;
  label: string;
}

const guestRoutes: Route[] = [
  {
    icon: Layout,
    href: "/",
    label: "Dashboard",
  },
  {
    icon: Compass,
    href: "/search",
    label: "Browse",
  },
];

const teacherRoutes: Route[] = [
  {
    icon: List,
    href: "/teacher/courses",
    label: "Courses",
  },
  {
    icon: BarChart,
    href: "/teacher/analytics",
    label: "Analytics",
  },
];

function SitebarRouts() {

  const pathname = usePathname();



  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");

  const currentRoute = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {currentRoute.map(({ icon, href, label }) => (
        <SidebarItem key={href} href={href} icon={icon} label={label} />
      ))}
    </div>
  );
}

export default SitebarRouts;
