import React, { ReactNode } from "react";

interface ILayoutAuthProps {
  children: ReactNode;
}

function layoutAuth({ children }: ILayoutAuthProps) {
  return <div className="h-full flex justify-center items-center" >{children}</div>;
}

export default layoutAuth;
